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

import { H2 } from '../../components/Text';

import * as shape from 'd3-shape';
import { FlatList, SafeAreaView, View } from 'react-native';
import NumberToMoney from '../../functions/NumberToMoney';
import { colors, fontFamily, metrics } from '../../styles';
import { Entypo } from '@expo/vector-icons';
import { LineChart, Grid, XAxis, YAxis } from 'react-native-svg-charts';
import { Defs, LinearGradient, Stop } from 'react-native-svg';
import { ScrollView } from 'react-native-gesture-handler';

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

  const data2 = [
    0, 10, 40, 95, 40, 24, 85, 91, 35, 53, 53, 24, 50, 20, 80, 50, 10, 40, 95,
    0, 24, 85, 91, 35, 53, 53, 24, 50, 20, 80,
  ];

  const data = [
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

  const axesSvg = {
    fontSize: 10,
    fill: colors.text,
    fontFamily: fontFamily.regular,
  };

  const verticalContentInset = { top: 17, bottom: 10 };
  const xAxisHeight = 30;

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
            <TotalFiltred>R$ {NumberToMoney(-1950)}</TotalFiltred>
            <ProvisoryCollapsible>
              <H2>Mensal</H2>
              <Entypo name="chevron-down" size={24} color="grey" />
            </ProvisoryCollapsible>
          </FilterContainer>
          <ChartContainer>
            <YAxis
              data={data2}
              style={{
                height: metrics.base * 45,
                width: metrics.base * 5,
              }}
              contentInset={verticalContentInset}
              svg={axesSvg}
            />
            <ScrollView
              horizontal
              contentContainerStyle={{ paddingRight: 16 }}
              showsHorizontalScrollIndicator={false}
            >
              <ChartContent>
                <LineChart
                  style={{ height: metrics.base * 45, flex: 1 }}
                  data={data2}
                  contentInset={{
                    top: metrics.base * 5,
                    bottom: metrics.base * 5,
                  }}
                  curve={shape.curveNatural}
                  svg={{
                    strokeWidth: 2,
                    stroke: 'url(#gradient)',
                  }}
                >
                  <Grid />
                  <Gradient />
                </LineChart>
                <XAxis
                  style={{
                    flex: 1,
                    maxHeight: xAxisHeight,
                    width: '100%',
                  }}
                  spacingInner={0.01}
                  data={data2}
                  formatLabel={(_, index) => index}
                  contentInset={{ left: 8, right: 8 }}
                  svg={axesSvg}
                />
              </ChartContent>
            </ScrollView>
          </ChartContainer>
          <CategoriesList>
            <CategoriesTitle>Categorias</CategoriesTitle>
            <FlatList
              showsHorizontalScrollIndicator={false}
              data={data}
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
