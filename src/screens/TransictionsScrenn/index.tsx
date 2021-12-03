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
import { AxiosResponse } from "axios";
import { ITransaction } from "../../models/transaction";
import LimitedString from "../../functions/LimitedString";
import apiRequest from "../../services/apiRequest";

interface DayInterface {
  date: Date;
  transactions: ITransaction[];
}

const TransictionsScreen: React.FC = () => {
  const { user } = useUserData();

  const [activeYear, setActiveYear] = useState<number>(
    new Date(Date.now()).getFullYear()
  );
  const [activeMonth, setActiveMonth] = useState<number>(
    new Date(Date.now()).getMonth()
  );
  const [transactions, setTransactions] = useState<ITransaction[]>([]);

  useEffect(() => {
    const options = {
      headers: { Authorization: `Bearer ${user.token}` },
      params: { year: activeYear, month: activeMonth, limit: 10000 },
    };

    apiRequest
      .get("/transactions/month", options)
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
        let transactionsData: ITransaction[] = [];

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
  };

  return (
    <SafeAreaView>
      <TransactionsContainer showsVerticalScrollIndicator={false}>
        <HeaderContent>
          <Title>Transações</Title>
        </HeaderContent>
        <MainContent>
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
                  type={transaction.type}
                  isCard={transaction.isCard}
                />
              ))}
            </DayTransactions>
          ))}
        </MainContent>
        <Filter>
          <FlatList
            data={getAllYears()}
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
              rippleContainerBorderRadius={metrics.base * 6}
              disabled={
                activeMonth === 0 ||
                (activeYear === new Date(user.user.createdAt).getFullYear() &&
                  activeMonth === new Date(user.user.createdAt).getMonth())
              }
              onPress={() => setActiveMonth(Number(activeMonth) - 1)}
            >
              <MaterialIcons
                name="keyboard-arrow-left"
                size={metrics.base * 9}
                color={colors.darkBlue}
              />
            </ChangeButton>
            <Month>
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
