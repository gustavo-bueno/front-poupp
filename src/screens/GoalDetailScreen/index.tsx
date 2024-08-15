import React from 'react';
import { useRoute } from '@react-navigation/native';
import { View } from 'react-native';

import { Fontisto } from '@expo/vector-icons';

import { BorderRadiusContainer } from '../../components/Container';
import { ProgressBar } from '../../components/ProgressBar';
import { H1, H2, H3, H4 } from '../../components/Text';
import { colors, metrics } from '../../styles';
import Button from '../../components/Button';
import NumberToMoney from '../../functions/NumberToMoney';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../../constants/routes';
import useUserData from '../../hooks/useUserData';
import dayjs from 'dayjs';

import {
  Container,
  FirstInfoContainer,
  RemainingInfoContainer,
  styles,
} from './styles';
import { SpaceBetweenContainer } from '../../components/Container';
import goals from '../../icons/goals';
import { IGoal } from '../../models/goal';
import axiosApi from '../../services/apiRequest';
import { AxiosResponse } from 'axios';

const GoalDetailScreen = () => {
  const { goal, goalAccountValue } = useRoute()?.params as {
    goal: IGoal;
    goalAccountValue: number;
  };

  const { navigate } = useNavigation();
  const { user, refreshData } = useUserData();

  const GoalImage = goals[goal.category.type];
  const remainigValue = goal.totalValue - goalAccountValue;

  const options = {
    headers: { authorization: `Bearer ${user.token}` },
    params: { goalId: goal._id },
  };

  const conclude = () => {
    if (goalAccountValue / goal.totalValue > 1) {
      axiosApi
        .put('/goals/complete', {}, options)
        .then((response: AxiosResponse) => {
          if (response.status === 200) {
            refreshData();
            navigate(ROUTES.GOALS_LIST);
          }
        })
        .catch((err) => console.log(err.message));
    }
  };

  const exclude = () => {
    axiosApi
      .delete('/goals/delete', options)
      .then((response: AxiosResponse) => {
        if (response.status === 200) {
          refreshData();
          navigate(ROUTES.GOALS_LIST);
        }
      });
  };

  const valuePerMonth = () => {
    const timeRemaining = Date.now() - dayjs(goal.expirationDate).millisecond();
    return remainigValue / dayjs(timeRemaining).month();
  };

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
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: metrics.base * 4,
          }}
        >
          <Fontisto name="clock" size={30} color={colors.green} />
          <View
            style={{ flexDirection: 'column', marginLeft: metrics.base * 2 }}
          >
            <H2 fontWeight="medium">Data estipulada</H2>
            <H3>{dayjs(goal.expirationDate).format('DD/MM/YYYY')}</H3>
          </View>
        </View>
        <RemainingInfoContainer>
          {remainigValue > 0 ? (
            <>
              <View style={{ alignItems: 'center' }}>
                <H2 fontWeight="bold">Valor necessário</H2>
                <H2>R$ {NumberToMoney(remainigValue)}</H2>
              </View>
              <H4 style={{ textAlign: 'center' }}>
                Você precisa economizar R$ {NumberToMoney(valuePerMonth())} por
                mês para concluir dentro do tempo estipulado.
              </H4>
            </>
          ) : (
            <H4 style={{ textAlign: 'center' }}>
              Parabéns! você ja pode concluir essa meta.
            </H4>
          )}
        </RemainingInfoContainer>
        {goalAccountValue / goal.totalValue > 1 && (
          <Button title="Conclur" onPress={conclude} />
        )}
        <Button
          title="Excluir"
          onPress={exclude}
          style={{ marginTop: metrics.base * 2 }}
        />
      </BorderRadiusContainer>
    </Container>
  );
};

export default GoalDetailScreen;
