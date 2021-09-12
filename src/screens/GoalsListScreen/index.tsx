import React from 'react';
import { View, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ripple from 'react-native-material-ripple';
import * as Animatable from 'react-native-animatable';

import { IGoal } from '../../models/goal.model';
import { ROUTES } from '../../constants/routes';
import { BorderRadiusContainer } from '../../components/Container';
import CardItem from '../../components/CardItem';
import { ProgressBar } from '../../components/ProgressBar';
import Button from '../../components/Button';
import MoneyText from '../../components/MoneyText';
import { H2, H5 } from '../../components/Text';

import { metrics } from '../../styles';
import {
  CardItemContent,
  Container,
  ProgressTextContainer,
  styles,
} from './styles';
import goals from '../../icons/goals';

const data: IGoal[] = [
  {
    id: 1,
    title: 'Carro novo',
    type: 'car',
    goalValue: 2500000,
    achieved: 1250000,
  },
  {
    id: 2,
    title: 'Casa nova',
    type: 'house',
    goalValue: 25000000,
    achieved: 1250000,
  },
  {
    id: 3,
    title: 'Guitarra nova',
    type: 'other',
    goalValue: 125000,
    achieved: 32500,
  },
  {
    id: 4,
    title: 'Viagem para cancun',
    type: 'travel',
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
        <CardItem
          content={
            <CardItemContent>
              <H2 fontWeight="bold">{item.title}</H2>
              <MoneyText value={item.goalValue} fontSize="h2" />
              <>
                <ProgressBar progress={percentage} />
                <ProgressTextContainer>
                  <H5 color="text">
                    <MoneyText fontSize="h5" value={item.achieved} />
                    {' arrecadado'}
                  </H5>
                  <H5 color="text">{percentage * 100}% concluído</H5>
                </ProgressTextContainer>
              </>
            </CardItemContent>
          }
          svgImage={<Image style={styles.svg} />}
        />
      </Ripple>
    );
  };

  return (
    <Container style={{ position: 'relative' }}>
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
