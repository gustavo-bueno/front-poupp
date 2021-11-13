import React from 'react';
import { useRoute } from '@react-navigation/native';
import { View } from 'react-native';

import { Fontisto } from '@expo/vector-icons';

import { BorderRadiusContainer } from '../../components/Container';
import MoneyText from '../../components/MoneyText';
import { ProgressBar } from '../../components/ProgressBar';
import { H1, H2, H3, H4 } from '../../components/Text';
import { metrics } from '../../styles';
import Button from '../../components/Button';

import {
  Container,
  FirstInfoContainer,
  RemainingInfoContainer,
  styles,
} from './styles';
import { SpaceBetweenContainer } from '../../components/Container';
import goals from '../../icons/goals';
import { IGoal } from '../../models/goal';

const GoalDetailScreen = () => {
  const { goal } = useRoute()?.params as { goal: IGoal };
  const GoalImage = goals[goal?.type];
  const remainigValue = goal.goalValue - goal.achieved;
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
          <MoneyText value={goal.achieved} fontSize="h1" />
          <MoneyText value={goal.goalValue} fontSize="h3" />
        </SpaceBetweenContainer>
        <ProgressBar progress={goal.achieved / goal.goalValue} />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: metrics.base * 4,
          }}
        >
          <Fontisto name="clock" size={30} color="black" />
          <View
            style={{ flexDirection: 'column', marginLeft: metrics.base * 2 }}
          >
            <H2 fontWeight="bold">Data da meta</H2>
            <H3>27 de julho de 2022</H3>
          </View>
        </View>
        <RemainingInfoContainer>
          <View style={{ alignItems: 'center' }}>
            <H2 fontWeight="bold">Valor restante</H2>
            <MoneyText value={remainigValue} fontSize="h2" />
          </View>
          <H4>Você precisa economizar R$2.400,00 por mês</H4>
        </RemainingInfoContainer>
        <Button title="Adicionar valor" onPress={() => console.log('boa')} />
      </BorderRadiusContainer>
    </Container>
  );
};

export default GoalDetailScreen;
