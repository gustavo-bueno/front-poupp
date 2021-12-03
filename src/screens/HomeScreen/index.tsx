import React, { useState, useEffect } from "react";
import { colors, metrics } from "../../styles";
import {
  HomeContainer,
  HeaderContent,
  TotalContent,
  Total,
  TotalLabel,
  MainContent,
  ResumeContainer,
  Resume,
  ResumeContent,
  ResumeIndicator,
  ResumeValue,
  ResumeType,
  Divider,
  RecentsContainer,
  RecentsTitle,
  SeeMoreButton,
  SeeMoreText,
  OptionsContainer,
  OptionsTitle,
  OptionsList,
  Chart,
  Labels,
  Label,
  Marker,
  LabelText,
} from "./styles";

import NumberToMoney from "../../functions/NumberToMoney";

import { PieChart } from "react-native-svg-charts";
import "react-native-svg";

import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

import MovementCard from "../../components/MovementCard";
import OptionCard from "../../components/OptionCard";
import { SafeAreaView, View } from "react-native";
import { ROUTES } from "../../constants/routes";
import { useNavigation } from "@react-navigation/native";
import { H0, H1 } from "../../components/Text";
import useUserData from "../../hooks/useUserData";
import { ITransaction } from "../../models/transaction";
import { AxiosResponse } from "axios";
import LimitedString from "../../functions/LimitedString";
import apiRequest from "../../services/apiRequest";

interface ChartDataInterface {
  name: string;
  key: number;
  value: number;
  svg: {
    fill: string;
  };
  arc: { cornerRadius: number };
}

const HomeScreen: React.FC = () => {
  const { navigate } = useNavigation();
  const { user } = useUserData();

  const [monthTransactions, setMonthTransactions] = useState<ITransaction[]>(
    []
  );
  const [chartData, setChartData] = useState<ChartDataInterface[]>([]);

  useEffect(() => {
    const options = {
      headers: { authorization: `Bearer ${user.token}` },
      params: {
        month: new Date(Date.now()).getMonth(),
        year: new Date(Date.now()).getFullYear(),
        limit: 10000,
      },
    };

    apiRequest
      .get("/transactions/month", options)
      .then((response: AxiosResponse) => {
        if (response.status === 200) {
          setMonthTransactions(response.data.transactions);

          const transactions: ITransaction[] = response.data.transactions;

          const transactionCategories: string[] = [];

          const chartCategoriesData: ChartDataInterface[] = [];

          transactions.map((transaction: ITransaction) => {
            if (
              transaction.category &&
              transactionCategories.find(
                (category) => transaction.category?.name === category
              ) === undefined &&
              transaction.type === "outcome"
            ) {
              transactionCategories.push(transaction.category?.name);
            }
          });

          transactionCategories.map((category, index) => {
            let categoryTotal = 0;

            transactions.map((transaction) => {
              if (
                transaction.category &&
                transaction.category.name === category
              ) {
                categoryTotal += transaction.value;
              }
            });

            const data = {
              name: category,
              key: index,
              value: categoryTotal,
              svg: {
                fill:
                  "#" +
                  (Math.random() * 0xfffff * 1000000).toString(16).slice(0, 6),
              },
              arc: { cornerRadius: 4 },
            };

            chartCategoriesData.push(data);
          });

          setChartData(chartCategoriesData);
        }
      });
  }, []);

  const getMonthOutcome = () => {
    let total = 0;

    monthTransactions.forEach((transaction) => {
      if (!transaction.isCard) {
        if (transaction.type === "outcome") {
          total += transaction.value;
        }
      }
    });

    return total;
  };

  const getMonthIncome = () => {
    let total = 0;

    monthTransactions.forEach((transaction) => {
      if (!transaction.isCard) {
        if (transaction.type === "income") {
          total += transaction.value;
        }
      }
    });

    return total;
  };

  const getLastsTransactions = () => {
    return monthTransactions.slice(0, 2);
  };

  return (
    <SafeAreaView
      style={{ backgroundColor: colors.background, height: "100%" }}
    >
      <View style={{ backgroundColor: "transparent" }}>
        <HomeContainer showsVerticalScrollIndicator={false}>
          <HeaderContent>
            <View>
              <H1 color="white" style={{ fontSize: 24 }}>
                Olá,
              </H1>
              <H1 style={{ fontSize: 24 }} fontWeight="medium" color="white">
                {user.user.name}
              </H1>
            </View>
            <TotalContent>
              <Total>
                R$ {NumberToMoney(getMonthIncome() - getMonthOutcome())}
              </Total>
              <TotalLabel>Balanço Mensal</TotalLabel>
            </TotalContent>
          </HeaderContent>
          <MainContent>
            <ResumeContainer>
              <Resume>
                <ResumeIndicator theme={{ color: colors.green }}>
                  <MaterialIcons
                    name="keyboard-arrow-up"
                    size={metrics.base * 5}
                    color="white"
                  />
                </ResumeIndicator>
                <ResumeContent>
                  <ResumeValue>
                    R$ {NumberToMoney(getMonthIncome())}
                  </ResumeValue>
                  <ResumeType>Entradas</ResumeType>
                </ResumeContent>
              </Resume>
              <Divider />
              <Resume>
                <ResumeIndicator theme={{ color: colors.red }}>
                  <MaterialIcons
                    name="keyboard-arrow-down"
                    size={metrics.base * 5}
                    color="white"
                  />
                </ResumeIndicator>
                <ResumeContent>
                  <ResumeValue>
                    R$ {NumberToMoney(getMonthOutcome())}
                  </ResumeValue>
                  <ResumeType>Saídas</ResumeType>
                </ResumeContent>
              </Resume>
            </ResumeContainer>
            {monthTransactions.length !== 0 && (
              <>
                <Chart>
                  <PieChart
                    style={{
                      height: metrics.base * 50,
                      width: metrics.base * 50,
                    }}
                    outerRadius={"70%"}
                    innerRadius={30}
                    data={chartData}
                  />
                  <Labels>
                    {chartData.map((data) => (
                      <Label key={data.key}>
                        <Marker theme={{ color: data.svg.fill }} />
                        <LabelText>{data.name}</LabelText>
                      </Label>
                    ))}
                  </Labels>
                </Chart>
                <RecentsContainer>
                  <RecentsTitle>Recentes</RecentsTitle>
                  {getLastsTransactions().map((transaction) => (
                    <MovementCard
                      key={transaction._id}
                      title={LimitedString(transaction.title, 22)}
                      value={transaction.value}
                      entries={transaction.type === "income"}
                    />
                  ))}
                  <SeeMoreButton onPress={() => navigate(ROUTES.TRANSACTIONS)}>
                    <SeeMoreText>Ver mais +</SeeMoreText>
                  </SeeMoreButton>
                </RecentsContainer>
              </>
            )}
            <OptionsContainer>
              <OptionsTitle>Gerenciar</OptionsTitle>
              <OptionsList>
                <OptionCard
                  title="Contas"
                  route={ROUTES.ACCOUNT_LIST}
                  icon={
                    <FontAwesome
                      name="bank"
                      size={metrics.base * 10}
                      color={colors.text}
                    />
                  }
                />
                <OptionCard
                  route={ROUTES.CARD_LIST}
                  title="Cartões"
                  icon={
                    <AntDesign
                      name="creditcard"
                      size={metrics.base * 10}
                      color={colors.text}
                    />
                  }
                />
                <OptionCard
                  route={ROUTES.GOALS_LIST}
                  title="Metas"
                  icon={
                    <Feather
                      name="target"
                      size={metrics.base * 10}
                      color={colors.text}
                    />
                  }
                />
              </OptionsList>
            </OptionsContainer>
          </MainContent>
        </HomeContainer>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
