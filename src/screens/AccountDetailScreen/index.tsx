import React from "react";
import {
  DayTransactions,
  DayTransactionsTitle,
  ScrollViewContainer,
  MainContent,
  AccountsInfos,
  ItemImage,
  AccountName,
  AccountValue,
  Description,
  ImageContainer,
  Informations,
  HorizontalContainer,
  SeeMoreButton,
  SeeMoreText,
  DescriptionContainer,
  ImageContent,
} from "./styles";

import MovementCard from "../../components/MovementCard";
import { useRoute, useNavigation } from "@react-navigation/native";
import { ITransaction } from "../../models/transaction";
import LimitedString from "../../functions/LimitedString";
import { SafeAreaView } from "react-native";
import { IAccount } from "../../models/account";
import goalImg from "../../../assets/images/goal.png";
import walletImg from "../../../assets/images/wallet.png";
import { ROUTES } from "../../constants/routes";
import NumberToMoney from "../../functions/NumberToMoney";

interface DayInterface {
  date: Date;
  transactions: ITransaction[];
}

const AccountDetailScreen = () => {
  const { account } = useRoute()?.params as {
    account: IAccount;
  };

  const { navigate } = useNavigation();

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

    const reverseTransactions: ITransaction[] = account.transactions.reverse();

    if (reverseTransactions.length > 0) {
      const dates: Date[] = [];

      reverseTransactions.map((transaction) => {
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

        reverseTransactions.map((transaction) => {
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
        <AccountsInfos>
          <HorizontalContainer>
            <Informations>
              <AccountName>{account.name}</AccountName>
              <AccountValue>R$ {NumberToMoney(account.value)}</AccountValue>
            </Informations>
            <ImageContainer>
              <ImageContent>
                <ItemImage
                  source={
                    account.bank
                      ? { uri: account.bank.picture }
                      : account.type === "wallet"
                      ? walletImg
                      : goalImg
                  }
                />
              </ImageContent>
            </ImageContainer>
          </HorizontalContainer>

          {account.type === "normal" && account.card && (
            <DescriptionContainer>
              <Description>Essa conta já possui um cartão.</Description>
              <SeeMoreButton onPress={() => navigate(ROUTES.CARD_LIST)}>
                <SeeMoreText>Ver cartões +</SeeMoreText>
              </SeeMoreButton>
            </DescriptionContainer>
          )}

          {account.type === "normal" && !account.card && (
            <DescriptionContainer>
              <Description>Essa conta ainda não possui um cartão..</Description>
              <SeeMoreButton onPress={() => navigate(ROUTES.ADD_CARD)}>
                <SeeMoreText>Criar cartão +</SeeMoreText>
              </SeeMoreButton>
            </DescriptionContainer>
          )}
        </AccountsInfos>
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

export default AccountDetailScreen;
