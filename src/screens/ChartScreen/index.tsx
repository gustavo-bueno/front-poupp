import React, { useState } from 'react';
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
  ProvisoryCollapsible,
  CategoriesList,
  ChartContent,
  ChartContainer,
  CategoriesTitle,
} from './styles';

import CategorieResume from '../../components/CategorieResume';

import { H1, H2, H3 } from '../../components/Text';

import * as shape from 'd3-shape';
import { FlatList, SafeAreaView, View } from 'react-native';
import NumberToMoney from '../../functions/NumberToMoney';
import { colors, fontFamily, metrics } from '../../styles';
import { Entypo } from '@expo/vector-icons';
import { Grid, XAxis, YAxis } from 'react-native-svg-charts';
import Svg, { Defs, LinearGradient, Rect, Stop, Text } from 'react-native-svg';
import { ScrollView } from 'react-native-gesture-handler';
import { LineChart } from 'react-native-chart-kit';
import MoneyText from '../../components/MoneyText';
import { number } from 'yup/lib/locale';

const Gradient = () => (
  <Defs key={'gradient'}>
    <LinearGradient id={'gradient'} x1={'0'} y1={'0%'} x2={'100%'} y2={'0%'}>
      <Stop offset={'0%'} stopColor={colors.green} />
      <Stop offset={'100%'} stopColor={colors.lightBlue} />
    </LinearGradient>
  </Defs>
);

const ChartSreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('incomes');
  const [tooltipPos, setTooltipPos] = useState({
    x: 0,
    y: 0,
    visible: false,
    value: 0,
  });

  const data2 = [
    0, 10, 40, 95, 40, 24, 85, 91, 35, 53, 53, 24, 50, 20, 80, 50, 10, 40, 95,
    0, 24, 85, 91, 35, 53, 53, 24, 50, 20, 80,
  ];

  const chartData = {
    labels: [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      '11',
      '12',
      '13',
      '14',
      '15',
      '16',
      '17',
      '18',
      '19',
      '20',
      '21',
      '22',
      '23',
      '24',
      '25',
      '26',
      '27',
      '28',
      '29',
      '30',
    ],
    datasets: [
      {
        data: data2,
        color: (opacity = 1) => colors.darkGreen,
        strokeWidth: 2,
      },
    ],
  };

  const progressData = [
    {
      id: 1,
      title: 'Teste1',
      percentage: 40,
    },
    {
      id: 2,
      title: 'Teste2',
      percentage: 40,
    },
    {
      id: 3,
      title: 'Teste3',
      percentage: 20,
    },
  ];

  const chartConfig = {
    backgroundGradientFrom: colors.background,
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: colors.background,
    backgroundGradientToOpacity: 0.5,
    labelColor: () => colors.text,
    color: () => 'rgba(0,0,0,0.2)',
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: true, // optional
    propsForBackgroundLines: {
      strokeDasharray: '', // solid background lines with no dashes
    },
  };

  const total = data2.reduce((sum, item) => {
    sum += item;
    return sum;
  }, 0);

  return (
    <SafeAreaView>
      <ChartsContainer>
        <Header>
          <Title>Gráficos</Title>
          <BalanceContainer>
            <Total>R$ {NumberToMoney(2700)}</Total>
            <Label>Balanço geral</Label>
          </BalanceContainer>
        </Header>
        <MainContent>
          <TabsContainer>
            <Tab
              onPress={() => setActiveTab('incomes')}
              rippleContainerBorderRadius={metrics.base * 4}
            >
              <TabText>Saídas</TabText>
              <TabIndicatior
                theme={{
                  color: activeTab === 'incomes' ? colors.green : colors.gray,
                }}
              />
            </Tab>
            <Tab
              onPress={() => setActiveTab('outcomes')}
              rippleContainerBorderRadius={metrics.base * 4}
            >
              <TabText>Entradas</TabText>
              <TabIndicatior
                theme={{
                  color: activeTab === 'outcomes' ? colors.green : colors.gray,
                }}
              />
            </Tab>
          </TabsContainer>
          <FilterContainer>
            <TotalFiltred>
              <MoneyText bold value={total} fontSize="h1" />
            </TotalFiltred>
            <ProvisoryCollapsible>
              <H2>Mensal</H2>
              <Entypo name="chevron-down" size={24} color="grey" />
            </ProvisoryCollapsible>
          </FilterContainer>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ maxHeight: 220 }}
          >
            <LineChart
              data={chartData as any}
              width={metrics.wp(200)}
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
                      <Rect
                        x={tooltipPos.x - 15}
                        y={tooltipPos.y + 10}
                        width="60"
                        height="30"
                        fill={colors.text}
                      />
                      <Text
                        x={tooltipPos.x + 15}
                        y={tooltipPos.y + 30}
                        fill="white"
                        fontSize="16"
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
          <CategoriesList>
            <CategoriesTitle>Categorias</CategoriesTitle>
            <FlatList
              showsHorizontalScrollIndicator={false}
              data={progressData}
              horizontal
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <CategorieResume
                  title={item.title}
                  percentage={item.percentage}
                />
              )}
            />
          </CategoriesList>
        </MainContent>
      </ChartsContainer>
    </SafeAreaView>
  );
};

export default ChartSreen;
