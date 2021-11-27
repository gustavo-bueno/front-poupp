import React, { useState } from 'react';
import {
  TransactionsContainer,
  MainContent,
  HeaderContent,
  Title,
  Filter,
  Year,
  YearText,
  MonthContainer,
  Month,
  MonthText,
  ChangeButton,
  DayTransactions,
  DayTransactionsTitle,
} from './styles';

import { FlatList, SafeAreaView } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';
import { colors, metrics } from '../../styles';
import MovementCard from '../../components/MovementCard';

const TransictionsScreen: React.FC = () => {
  const data = [
    {
      year: 2019,
    },
    {
      year: 2020,
    },
    {
      year: 2021,
    },
  ];

  const months = [
    {
      name: 'Janeiro',
      number: 1,
    },

    {
      name: 'Fevereiro',
      number: 2,
    },
    {
      name: 'Março',
      number: 3,
    },
    {
      name: 'Abril',
      number: 4,
    },
    {
      name: 'Maio',
      number: 5,
    },
    {
      name: 'Junho',
      number: 6,
    },
    {
      name: 'Julho',
      number: 7,
    },
    {
      name: 'Agosto',
      number: 8,
    },
    {
      name: 'Setembro',
      number: 9,
    },
    {
      name: 'Outubro',
      number: 10,
    },
    {
      name: 'Novembro',
      number: 11,
    },
    {
      name: 'Dezembro',
      number: 12,
    },
  ];

  const [activeYear, setActiveYear] = useState<number>(data[0].year);
  const [activeMonth, setActiveMonth] = useState(months[0]);

  const nextMonth = () => {
    if (activeMonth.number === 12) {
      setActiveMonth(months[0]);
      setActiveYear(activeYear + 1);
    } else {
      setActiveMonth((state) => months[state.number]);
    }
  };

  const backMonth = () => {
    if (activeMonth.number === 1) {
      setActiveMonth(months[11]);
      setActiveYear((state) => state - 1);
    } else {
      setActiveMonth((state) => months[state.number - 2]);
    }
  };

  return (
    <SafeAreaView>
      <TransactionsContainer showsVerticalScrollIndicator={false}>
        <HeaderContent>
          <Title>Transações</Title>
        </HeaderContent>
        <MainContent>
          <DayTransactions>
            <DayTransactionsTitle>Segunda-feira, 20 Jan</DayTransactionsTitle>
            <MovementCard title="Salário" value={1000} entries={true} />
            <MovementCard title="Conta de luz" value={1000} entries={false} />
          </DayTransactions>
          <DayTransactions>
            <DayTransactionsTitle>Segunda-feira, 20 Jan</DayTransactionsTitle>
            <MovementCard title="Salário" value={1000} entries={true} />
            <MovementCard title="Conta de luz" value={1000} entries={false} />
          </DayTransactions>
          <DayTransactions>
            <DayTransactionsTitle>Segunda-feira, 20 Jan</DayTransactionsTitle>
            <MovementCard title="Salário" value={1000} entries={true} />
            <MovementCard title="Conta de luz" value={1000} entries={false} />
          </DayTransactions>
          <DayTransactions>
            <DayTransactionsTitle>Segunda-feira, 20 Jan</DayTransactionsTitle>
            <MovementCard title="Salário" value={1000} entries={true} />
            <MovementCard title="Conta de luz" value={1000} entries={false} />
          </DayTransactions>
          <DayTransactions>
            <DayTransactionsTitle>Segunda-feira, 20 Jan</DayTransactionsTitle>
            <MovementCard title="Salário" value={1000} entries={true} />
            <MovementCard title="Conta de luz" value={1000} entries={false} />
          </DayTransactions>
        </MainContent>
        <Filter>
          <FlatList
            data={data}
            horizontal
            keyExtractor={(year, index) => index.toString()}
            renderItem={({ item }) => (
              <Year
                theme={
                  activeYear === item.year
                    ? { color: colors.darkBlue }
                    : { color: colors.white }
                }
                onPress={() => setActiveYear(item.year)}
                rippleContainerBorderRadius={metrics.base * 2.5}
              >
                <YearText
                  theme={
                    activeYear === item.year
                      ? { color: colors.white }
                      : { color: colors.text }
                  }
                >
                  {item.year}
                </YearText>
              </Year>
            )}
          />
          <MonthContainer>
            <ChangeButton
              onPress={() => backMonth()}
              rippleContainerBorderRadius={metrics.base * 6}
            >
              <MaterialIcons
                name="keyboard-arrow-left"
                size={metrics.base * 9}
                color={colors.darkBlue}
              />
            </ChangeButton>
            <Month>
              <MonthText>{activeMonth.name}</MonthText>
            </Month>
            <ChangeButton
              onPress={() => nextMonth()}
              rippleContainerBorderRadius={metrics.base * 6}
            >
              <MaterialIcons
                name="keyboard-arrow-right"
                size={metrics.base * 9}
                color={colors.darkBlue}
              />
            </ChangeButton>
          </MonthContainer>
        </Filter>
      </TransactionsContainer>
    </SafeAreaView>
  );
};

export default TransictionsScreen;
