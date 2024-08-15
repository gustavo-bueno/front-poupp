import React, { useState, useEffect } from "react";
import {
  ChartsContainer,
  Header,
  Title,
  BalanceContainer,
  Total,
  Label,
  MainContent,
  TabsContainer,
  Tab,
  TabText,
  TabIndicatior,
  FilterContainer,
  TotalFiltred,
  CategoriesList,
  CategoriesTitle,
} from "./styles";

import CategorieResume from "../../components/CategorieResume";
import useUserData from "../../hooks/useUserData";
import { FlatList, SafeAreaView, View } from "react-native";
import NumberToMoney from "../../functions/NumberToMoney";
import { colors, metrics } from "../../styles";
import Svg, { Rect, Text } from "react-native-svg";
import { ScrollView } from "react-native-gesture-handler";
import { LineChart } from "react-native-chart-kit";
import { H1 } from "../../components/Text";
import axiosApi from "../../services/apiRequest";
import { AxiosResponse } from "axios";
import { ITransaction } from "../../models/transaction";
import { ITransactionCategory } from "../../models/transactionCategory";
import { Loading } from "../../components/Loading";

interface ProgressChartData {
  _id: string;
  title: string;
  percentage: number;
}

const ChartSreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("outcome");
  const [tooltipPos, setTooltipPos] = useState({
    x: 0,
    y: 0,
    visible: false,
    value: 0,
  });
  const { user, refresh } = useUserData();
  const [transactions, setTransactions] = useState<ITransaction[]>([]);
  const [chartValues, setChartValues] = useState<number[]>([]);
  const [labels, setLabels] = useState<string[]>([]);
  const [progessChartData, setProgressChartData] = useState<
    ProgressChartData[]
  >([]);

  const today = new Date(Date.now());

  useEffect(() => {
    const options = {
      headers: { authorization: `Bearer ${user.token}` },
      params: {
        month: today.getMonth(),
        year: today.getFullYear(),
        limit: 10000,
      },
    };

    axiosApi
      .get("/transactions/month", options)
      .then((response: AxiosResponse) => {
        if (response.status === 200) {
          setTransactions(response.data.transactions);
        }
      })
      .catch((err) => console.log(err));
  }, [refresh]);

  useEffect(() => {
    const labels: string[] = [];
    const values: number[] = [];
    const progressChart: ProgressChartData[] = [];
    const transactionCategories: ITransactionCategory[] = [];

    const filtredTransactions: ITransaction[] = transactions
      .filter(
        (transaction) =>
          transaction.type === activeTab &&
          !transaction.isCard &&
          transaction.category
      )
      .reverse();

    let day = 1;

    while (day <= today.getDate()) {
      let value = 0;

      filtredTransactions.map((transaction) => {
        if (new Date(transaction.createdAt).getDate() === day) {
          value += transaction.value;
        }
      });

      values.push(value);
      labels.push(day.toString());
      day++;
    }

    let totalValue = 0;

    filtredTransactions.map((transaction) => {
      totalValue += transaction.value;
      if (
        transaction.category &&
        !transactionCategories.find(
          (category) => transaction.category?._id === category._id
        )
      ) {
        transactionCategories.push(transaction.category);
      }
    });

    transactionCategories.map((category) => {
      let categoryValue = 0;

      filtredTransactions.map((transaction) => {
        if (transaction.category && transaction.category._id === category._id) {
          categoryValue += transaction.value;
        }
      });

      let categoryData: ProgressChartData = {
        _id: category._id,
        percentage: Math.ceil((categoryValue / totalValue) * 100),
        title: category.name,
      };

      progressChart.push(categoryData);
    });

    setProgressChartData(progressChart);
    setChartValues(values);
    setLabels(labels);
  }, [activeTab, transactions]);

  const chartConfig = {
    backgroundGradientFrom: colors.background,
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: colors.background,
    backgroundGradientToOpacity: 0.5,
    labelColor: () => colors.text,
    color: () => "rgba(0,0,0,0.2)",
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: true, // optional
    propsForBackgroundLines: {
      strokeDasharray: "", // solid background lines with no dashes
    },
  };

  const total = chartValues.reduce((sum, item) => {
    sum += item;
    return sum;
  }, 0);

  const transactionsTotalValue = () => {
    let value = 0;

    transactions.map((transaction) => {
      if (
        transaction.category &&
        (transaction.type === "income" || transaction.type === "outcome") &&
        !transaction.isCard
      ) {
        if (transaction.type === "income") {
          value += transaction.value;
        } else {
          value -= transaction.value;
        }
      }
    });

    return value;
  };

  return (
    <SafeAreaView>
      <ChartsContainer>
        <Header>
          <Title>Gráfico Mensal</Title>
          <BalanceContainer>
            <Total>R$ {NumberToMoney(transactionsTotalValue())}</Total>
            <Label>Balanço mensal</Label>
          </BalanceContainer>
        </Header>
        <MainContent>
          <TabsContainer>
            <Tab
              onPress={() => setActiveTab("outcome")}
              rippleContainerBorderRadius={metrics.base * 4}
            >
              <TabText>Saídas</TabText>
              <TabIndicatior
                theme={{
                  color: activeTab === "outcome" ? colors.green : colors.gray,
                }}
              />
            </Tab>
            <Tab
              onPress={() => setActiveTab("income")}
              rippleContainerBorderRadius={metrics.base * 4}
            >
              <TabText>Entradas</TabText>
              <TabIndicatior
                theme={{
                  color: activeTab === "income" ? colors.green : colors.gray,
                }}
              />
            </Tab>
          </TabsContainer>
          <FilterContainer>
            <TotalFiltred>
              <H1 style={{ fontWeight: "bold" }}>R$ {NumberToMoney(total)}</H1>
            </TotalFiltred>
          </FilterContainer>
          {chartValues.length > 0 && (
            <>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{ maxHeight: 220, paddingHorizontal: 15 }}
              >
                <LineChart
                  data={{
                    labels: labels,
                    datasets: [
                      {
                        data: chartValues,
                        color: () => colors.darkGreen,
                        strokeWidth: 2,
                      },
                    ],
                  }}
                  width={metrics.wp(chartValues.length * 15 + 20)}
                  height={220}
                  yAxisLabel="R$"
                  bezier
                  formatYLabel={(yValue) => NumberToMoney(Number(yValue))}
                  withOuterLines={false}
                  withVerticalLines={false}
                  chartConfig={chartConfig}
                  decorator={() => {
                    return tooltipPos.visible ? (
                      <View>
                        <Svg>
                          <Rect x={tooltipPos.x - 15} y={tooltipPos.y + 10} />
                          <Text
                            x={tooltipPos.x + 15}
                            y={tooltipPos.y + 30}
                            fill={colors.text}
                            fontSize="14"
                            fontWeight="bold"
                            textAnchor="middle"
                          >
                            {`R$ ${NumberToMoney(tooltipPos.value)}`}
                          </Text>
                        </Svg>
                      </View>
                    ) : null;
                  }}
                  onDataPointClick={(data) => {
                    let isSamePoint =
                      tooltipPos.x === data.x && tooltipPos.y === data.y;

                    isSamePoint
                      ? setTooltipPos((previousState) => {
                          return {
                            ...previousState,
                            value: data.value,
                            visible: !previousState.visible,
                          };
                        })
                      : setTooltipPos({
                          x: data.x,
                          value: data.value,
                          y: data.y,
                          visible: true,
                        });
                  }}
                />
              </ScrollView>
              {progessChartData.length > 0 && (
                <CategoriesList>
                  <CategoriesTitle>Categorias</CategoriesTitle>
                  <FlatList
                    showsHorizontalScrollIndicator={false}
                    data={progessChartData}
                    horizontal
                    keyExtractor={(item) => item._id.toString()}
                    renderItem={({ item }) => (
                      <CategorieResume
                        title={item.title}
                        percentage={item.percentage}
                      />
                    )}
                  />
                </CategoriesList>
              )}
            </>
          )}
        </MainContent>
      </ChartsContainer>
    </SafeAreaView>
  );
};

export default ChartSreen;
