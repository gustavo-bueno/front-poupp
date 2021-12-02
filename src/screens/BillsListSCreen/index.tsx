import React from 'react';
import { FlatList, View } from 'react-native';
import Ripple from 'react-native-material-ripple';
import { useNavigation } from '@react-navigation/core';

import { Feather } from '@expo/vector-icons';

import { BorderRadiusContainer } from '../../components/Container';
import InfoCardItem from '../../components/InfoCardItem';
import MoneyText from '../../components/MoneyText';
import ProgressResume from '../../components/ProgressResume';
import { H5 } from '../../components/Text';
import { ROUTES } from '../../constants/routes';
import { metrics } from '../../styles';
import { BillsImage } from './styles';
import { createAnimatableComponent } from 'react-native-animatable';
import { IGoal } from '../../models/goal';
import Button from '../../components/Button';

const List = createAnimatableComponent(FlatList);

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

const BillsListScreen: React.FC = () => {
  const { navigate } = useNavigation();

  const renderItem = ({ item }: { item: IGoal }) => {
    const percentage = item.achieved / item.goalValue;
    return (
      <Ripple
        rippleContainerBorderRadius={metrics.borderRadius}
        onPress={() => navigate(ROUTES.GOAL_DETAIL, { goal: item })}
      >
        <InfoCardItem
          title={item.title}
          price={item.goalValue}
          bottomInfo={
            <ProgressResume
              progress={percentage}
              leftContent={
                <H5 color="text">
                  <MoneyText fontSize="h5" value={item.achieved} />
                  {' arrecadado'}
                </H5>
              }
              rightContent={<H5 color="text">{percentage * 100}% concluído</H5>}
            />
          }
          image={
            <BillsImage>
              <Feather name="percent" size={24} color="black" />
            </BillsImage>
          }
        />
      </Ripple>
    );
  };

  return (
    <View style={{ position: 'relative' }}>
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
    </View>
  );
};

export default BillsListScreen;
