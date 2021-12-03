import React from "react";
import {
  CardContainer,
  DayTransactions,
  DayTransactionsTitle,
  ScrollViewContainer,
  MainContent
} from "./styles";

import MovementCard from "../../components/MovementCard";
import CreditCard from "../../components/CreditCard";
import { BorderRadiusContainer } from "../../components/Container";
import { useRoute } from "@react-navigation/native";
import useAnimation from "../../hooks/useAnimation";
import { metrics } from "../../styles";
import { ICard } from "../../models/card";
import { ITransaction } from "../../models/transaction";
import LimitedString from "../../functions/LimitedString";
import { SafeAreaView } from "react-native";

interface DayInterface {
  date: Date;
  transactions: ITransaction[];
}

const CardDetailScreen = () => {
  const { card } = useRoute()?.params as {
    card: ICard;
  };
  const { opacityStyle } = useAnimation();

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

    if (card.transactions.length > 0) {
      const dates: Date[] = [];

      card.transactions.map((transaction) => {
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

        card.transactions.map((transaction) => {
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
      <ScrollViewContainer showsVerticalScrollIndicator={false}>
        <CardContainer style={opacityStyle}>
          <CreditCard
            username={card.username}
            bank={card.bank.name}
            day={card.closeDay}
            balance={card.value}
          />
        </CardContainer>
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
                  type={transaction.type as "transfer" | "outcome" | "income"}
                  isCard={transaction.isCard}
                />
              ))}
            </DayTransactions>
          ))}
          
        </MainContent>
      </ScrollViewContainer>
    </SafeAreaView>
  );
};

export default CardDetailScreen;
