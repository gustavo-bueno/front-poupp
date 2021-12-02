import React, { useState, useEffect } from "react";
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
} from "./styles";

import { FlatList, SafeAreaView } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";
import { colors, metrics } from "../../styles";
import MovementCard from "../../components/MovementCard";
import useUserData from "../../hooks/useUserData";
import axios, { AxiosResponse } from "axios";
import { TransactionInterface } from "../../@types/types";
import LimitedString from "../../functions/LimitedString";

interface DayInterface {
  date: Date;
  transactions: TransactionInterface[];
}

const TransictionsScreen: React.FC = () => {
<<<<<<< HEAD
  const { user } = useUserData();

  const [activeYear, setActiveYear] = useState<number>(
    new Date(Date.now()).getFullYear()
  );
  const [activeMonth, setActiveMonth] = useState<number>(
    new Date(Date.now()).getMonth()
  );
  const [transactions, setTransactions] = useState<TransactionInterface[]>([]);

  useEffect(() => {
    const options = {
      headers: { Authorization: `Bearer ${user.token}` },
      params: { year: activeYear, month: activeMonth, limit: 10000 },
    };

    axios
      .get(
        "https://eb4a-2804-4ec-10d8-1500-1840-695a-30e6-7c8b.ngrok.io/transactions/month",
        options
      )
      .then((response: AxiosResponse) => {
        if (response.status === 200) {
          setTransactions(response.data.transactions);
        }
      });
  }, [activeMonth, activeYear]);

  const getAllYears = () => {
    const userSigninYear = new Date(user.user.createdAt).getFullYear();
    const actualYear = new Date(Date.now()).getFullYear();

    const years = [];

    for (let i = userSigninYear; i <= actualYear; i++) {
      years.push({ year: i });
    }

    return years;
  };

  const getMonthName = (month: number) => {
    switch (month) {
      case 0:
        return "Janeiro";
      case 1:
        return "Fevereiro";
      case 2:
        return "Março";
      case 3:
        return "Abril";
      case 4:
        return "Maio";
      case 5:
        return "Junho";
      case 6:
        return "Julho";
      case 7:
        return "Agosto";
      case 8:
        return "Setembro";
      case 9:
        return "Outubro";
      case 10:
        return "Novembro";
      case 11:
        return "Dezembro";
    }
  };

  const splitDays = () => {
    const days: DayInterface[] = [];

    if (transactions.length > 0) {
      const dates: Date[] = [];

      transactions.map((transaction) => {
        if (
          !dates.find(
            (date) =>
              new Date(date).getDate() ===
                new Date(transaction.createdAt).getDate() &&
              new Date(date).getMonth() ===
                new Date(transaction.createdAt).getMonth() &&
              new Date(date).getFullYear() ===
                new Date(transaction.createdAt).getFullYear()
          )
        ) {
          dates.push(transaction.createdAt);
        }
      });

      dates.map((date) => {
        let transactionsData: TransactionInterface[] = [];

        transactions.map((transaction) => {
          if (
            new Date(date).getDate() ===
              new Date(transaction.createdAt).getDate() &&
            new Date(date).getMonth() ===
              new Date(transaction.createdAt).getMonth() &&
            new Date(date).getFullYear() ===
              new Date(transaction.createdAt).getFullYear()
          ) {
            transactionsData.push(transaction);
          }
        });

        days.push({
          date,
          transactions: transactionsData,
        });
      });
    }

    return days;
=======
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
>>>>>>> dd69fe7613f3576b8653c6c71006666f8eb315ee
  };

  return (
    <SafeAreaView>
      <TransactionsContainer showsVerticalScrollIndicator={false}>
        <HeaderContent>
          <Title>Transações</Title>
        </HeaderContent>
        <MainContent>
<<<<<<< HEAD
          {splitDays().map((day, index) => (
            <DayTransactions key={index}>
              <DayTransactionsTitle>{`${new Date(
                day.date
              ).getDate()} de ${getMonthName(
                new Date(day.date).getMonth()
              )}`}</DayTransactionsTitle>
              {day.transactions.map((transaction, index) => (
                <MovementCard
                  key={index}
                  title={LimitedString(transaction.title, 22)}
                  value={transaction.value}
                  entries={transaction.type === "income"}
                />
              ))}
            </DayTransactions>
          ))}
        </MainContent>
        <Filter>
          <FlatList
            data={getAllYears()}
=======
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
>>>>>>> dd69fe7613f3576b8653c6c71006666f8eb315ee
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
<<<<<<< HEAD
              rippleContainerBorderRadius={metrics.base * 6}
              disabled={
                activeMonth === 0 ||
                (activeYear === new Date(user.user.createdAt).getFullYear() &&
                  activeMonth === new Date(user.user.createdAt).getMonth())
              }
              onPress={() => setActiveMonth(Number(activeMonth) - 1)}
=======
              onPress={() => backMonth()}
              rippleContainerBorderRadius={metrics.base * 6}
>>>>>>> dd69fe7613f3576b8653c6c71006666f8eb315ee
            >
              <MaterialIcons
                name="keyboard-arrow-left"
                size={metrics.base * 9}
                color={colors.darkBlue}
              />
            </ChangeButton>
            <Month>
<<<<<<< HEAD
              <MonthText>{getMonthName(activeMonth)}</MonthText>
            </Month>
            <ChangeButton
              rippleContainerBorderRadius={metrics.base * 6}
              disabled={
                activeMonth === 11 ||
                (new Date(Date.now()).getMonth() === activeMonth &&
                  activeYear === new Date(Date.now()).getFullYear())
              }
              onPress={() => setActiveMonth(Number(activeMonth) + 1)}
=======
              <MonthText>{activeMonth.name}</MonthText>
            </Month>
            <ChangeButton
              onPress={() => nextMonth()}
              rippleContainerBorderRadius={metrics.base * 6}
>>>>>>> dd69fe7613f3576b8653c6c71006666f8eb315ee
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
