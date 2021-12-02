import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { FlatList, View } from 'react-native';
import { createAnimatableComponent } from 'react-native-animatable';

import { Feather } from '@expo/vector-icons';

import Button from '../../components/Button';
import { BorderRadiusContainer } from '../../components/Container';
import MoneyText from '../../components/MoneyText';
import ProgressResume from '../../components/ProgressResume';
import { H3, H5 } from '../../components/Text';
import { metrics } from '../../styles';
import { BillsImage } from '../BillsListSCreen/styles';
import Ripple from 'react-native-material-ripple';
import InfoCardItem from '../../components/InfoCardItem';
import { ROUTES } from '../../constants/routes';
import { IGoal } from '../../models/goal';

// import { Container } from './styles';

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

const AddInitialBillsScreen: React.FC = () => {
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
    <BorderRadiusContainer style={{ position: 'relative' }}>
      <H3>Você tem dívidas? Sem problemas, vamos juntos resolver isso! 💪</H3>
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
      <Button
        style={{
          position: 'absolute',
          bottom: metrics.hp(11),
          left: metrics.wp(5),
        }}
        title="Pronto!"
        onPress={() => navigate(ROUTES.ADD_INCOME)}
      />
    </BorderRadiusContainer>
  );
};

export default AddInitialBillsScreen;
