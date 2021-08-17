import React from 'react';
import { View, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ripple from 'react-native-material-ripple';

import { IGoal } from '../../models/goal.model';

import Car from '../../../assets/images/car.svg';
import Plane from '../../../assets/images/plane.svg';
import House from '../../../assets/images/house.svg';
import Pig from '../../../assets/images/pig.svg';
import Button from '../../components/Button';
import { BorderRadiusContainer } from '../../components/Container';
import CardItem from '../../components/CardItem';
import { ProgressBar } from '../../components/ProgressBar';
import MoneyText from '../../components/MoneyText';
import { H2, H5 } from '../../components/Text';
import { Container, styles } from './styles';
import { metrics } from '../../styles';
import { ROUTES } from '../../constants/routes';

const images = {
  'car': Car,
  'house': House,
  'travel': Plane,
  'other': Pig,
};

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

const GoalsListScreen = () => {
  const { navigate } = useNavigation();

  const renderItem = ({ item }: { item: IGoal }) => {
    item.image = images[item.type];
    const Image = item.image;
    const percentage = item.achieved / item.goalValue;
    return (
      <Ripple
        rippleContainerBorderRadius={metrics.borderRadius}
        onPress={() => navigate(ROUTES.GOAL_DETAIL, { goal: item })}
      >
        <CardItem
          content={
            <View
              style={{
                flex: 1,
                maxWidth: metrics.wp(50.5),
                justifyContent: 'space-evenly',
              }}
            >
              <H2 fontWeight="bold">{item.title}</H2>
              <MoneyText value={item.goalValue} fontSize="h2" />
              <>
                <ProgressBar progress={percentage} />
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                  }}
                >
                  <H5 color="text">
                    <MoneyText fontSize="h5" value={item.achieved} />
                    {' arrecadado'}
                  </H5>
                  <H5 color="text">{percentage * 100}% concluído</H5>
                </View>
              </>
            </View>
          }
          svgImage={<Image style={styles.svg} />}
        />
      </Ripple>
    );
  };

  return (
    <Container>
      <BorderRadiusContainer
        style={{ paddingTop: metrics.base * 7, paddingHorizontal: 16 }}
      >
        <FlatList
          renderItem={renderItem}
          keyExtractor={(_, idx) => idx.toString()}
          ItemSeparatorComponent={() => (
            <View style={{ marginBottom: metrics.base * 4 }} />
          )}
          data={data}
        />
      </BorderRadiusContainer>
      <Button type="rounded" onPress={() => console.log('boa')} />
    </Container>
  );
};

export default GoalsListScreen;
