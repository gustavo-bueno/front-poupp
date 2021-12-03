import React from "react";
import { useRoute } from "@react-navigation/native";
import { View } from "react-native";

import { Fontisto } from "@expo/vector-icons";

import { BorderRadiusContainer } from "../../components/Container";
import MoneyText from "../../components/MoneyText";
import { ProgressBar } from "../../components/ProgressBar";
import { H1, H2, H3, H4 } from "../../components/Text";
import { colors, metrics } from "../../styles";
import Button from "../../components/Button";
import NumberToMoney from "../../functions/NumberToMoney";

import {
  Container,
  FirstInfoContainer,
  RemainingInfoContainer,
  styles,
} from "./styles";
import { SpaceBetweenContainer } from "../../components/Container";
import goals from "../../icons/goals";
import { IGoal } from "../../models/goal";

const GoalDetailScreen = () => {
  const { goal, goalAccountValue } = useRoute()?.params as {
    goal: IGoal;
    goalAccountValue: number;
  };
  const GoalImage = goals[goal.category.type];
  const remainigValue = goal.totalValue - goalAccountValue;
  return (
    <Container>
      <FirstInfoContainer>
        <H1 fontWeight="bold" color="white">
          {goal.title}
        </H1>
        <GoalImage width="100%" height="80%" style={styles.svgImage} />
      </FirstInfoContainer>
      <BorderRadiusContainer
        style={{
          borderTopEndRadius: 0,
          flex: 1,
          paddingTop: metrics.base * 8,
        }}
      >
        <SpaceBetweenContainer style={{ maxHeight: metrics.hp(5) }}>
          <H1>R$ {NumberToMoney(goalAccountValue)}</H1>
          <H3>R$ {NumberToMoney(goal.totalValue)}</H3>
        </SpaceBetweenContainer>
        <ProgressBar progress={goalAccountValue / goal.totalValue} />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginVertical: metrics.base * 4,
          }}
        >
          <Fontisto name="clock" size={30} color={colors.green} />
          <View
            style={{ flexDirection: "column", marginLeft: metrics.base * 2 }}
          >
            <H2 fontWeight="medium">Data estipulada</H2>
            <H3>27 de julho de 2022</H3>
          </View>
        </View>
        <RemainingInfoContainer>
          <View style={{ alignItems: "center" }}>
            <H2 fontWeight="bold">Valor necessário</H2>
            <H2>R$ {NumberToMoney(remainigValue)}</H2>
          </View>
          <H4 style={{ textAlign: "center" }}>
            Você precisa economizar R$2.400,00 por mês para concluir dentro do
            tempo estipulado.
          </H4>
        </RemainingInfoContainer>
        <Button title="Concluír" onPress={() => console.log("boa")} />
      </BorderRadiusContainer>
    </Container>
  );
};

export default GoalDetailScreen;
