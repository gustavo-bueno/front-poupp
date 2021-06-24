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
      year: '2019',
    },
    {
      year: '2020',
    },
    {
      year: '2021',
    },
  ];

  const [activeYear, setActiveYear] = useState<String>(data[0].year);

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
            <ChangeButton>
              <MaterialIcons
                name="keyboard-arrow-left"
                size={metrics.base * 9}
                color={colors.darkBlue}
              />
            </ChangeButton>
            <Month>
              <MonthText>Janeiro</MonthText>
            </Month>
            <ChangeButton>
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
