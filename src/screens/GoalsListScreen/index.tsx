import React, { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ripple from "react-native-material-ripple";
import * as Animatable from "react-native-animatable";

import { IGoal } from "../../models/goal";
import { ROUTES } from "../../constants/routes";
import { BorderRadiusContainer } from "../../components/Container";
import Button from "../../components/Button";
import NumberToMoney from "../../functions/NumberToMoney";
import { H5 } from "../../components/Text";

import { metrics } from "../../styles";
import { Container, styles } from "./styles";
import goals from "../../icons/goals";
import InfoCardItem from "../../components/InfoCardItem";
import ProgressResume from "../../components/ProgressResume";

const data: IGoal[] = [
  {
    id: 1,
    title: "Carro novo",
    type: "car",
    goalValue: 2500000,
    achieved: 1250000,
  },
  {
    id: 2,
    title: "Casa nova",
    type: "house",
    goalValue: 25000000,
    achieved: 1250000,
  },
  {
    id: 3,
    title: "Guitarra nova",
    type: "other",
    goalValue: 125000,
    achieved: 32500,
  },
  {
    id: 4,
    title: "Viagem para cancun",
    type: "travel",
    goalValue: 1000000,
    achieved: 32500,
  },
];

const List = Animatable.createAnimatableComponent(FlatList);

const GoalsListScreen = () => {
  const { navigate } = useNavigation();

  const renderItem = ({ item }: { item: IGoal }) => {
    const Image = goals[item.type];
    const percentage = item.achieved / item.goalValue;

    return (
      <Ripple
        rippleContainerBorderRadius={metrics.borderRadius}
        onPress={() => navigate(ROUTES.GOAL_DETAIL, { goal: item })}
      >
        <InfoCardItem
          title={item.title}
          value={item.goalValue}
          bottomInfo={
            <ProgressResume
              progress={percentage}
              leftContent={
                <H5 color="text">
                  {`R$ ${NumberToMoney(item.achieved)} arrecadado`}
                </H5>
              }
              rightContent={<H5 color="text">{percentage * 100}% concluído</H5>}
            />
          }
          image={<Image style={styles.svg} />}
        />
      </Ripple>
    );
  };

  return (
    <Container style={{ position: "relative" }}>
      <BorderRadiusContainer
        style={{ paddingTop: metrics.base * 7, paddingHorizontal: 16 }}
      >
        <List
          useNativeDriver
          animation="bounceInDown"
          contentInsetAdjustmentBehavior="automatic"
          duration={1000}
          renderItem={renderItem as any}
          keyExtractor={(_, idx) => idx.toString()}
          ItemSeparatorComponent={() => (
            <View style={{ marginBottom: metrics.base * 4 }} />
          )}
          data={data}
        />
      </BorderRadiusContainer>
      <Button type="rounded" onPress={() => navigate(ROUTES.ADD_GOAL)} />
    </Container>
  );
};

export default GoalsListScreen;
