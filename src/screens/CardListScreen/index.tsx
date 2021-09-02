import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList as List, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Ripple from 'react-native-material-ripple';
import Button from '../../components/Button';

import { BorderRadiusContainer } from '../../components/Container';
import CreditCard from '../../components/CreditCard';
import { ROUTES } from '../../constants/routes';
import { colors, metrics } from '../../styles';

const FlatList = Animatable.createAnimatableComponent(List);

const data = [
  {
    id: 1,
    name: 'Gustavo Carvalho',
    expirationDay: 9,
    value: 199000,
    bank: 'Itáu',
    transactions: [
      {
        id: 1,
        createdAt: 'Segunda-feira, 30 Jan',
        value: 1995,
        title: 'Salário',
        entries: true,
      },
      {
        id: 2,
        createdAt: 'Segunda-feira, 29 Jan',
        value: 800,
        title: 'Aluguél',
        entries: false,
      },
    ],
  },
  {
    id: 2,
    name: 'Reginaldo Carvalho',
    expirationDay: parseInt('03'),
    value: 29900,
    bank: 'Itáu',
    transactions: [
      {
        id: 3,
        createdAt: 'Segunda-feira, 30 Jan',
        value: 1995,
        title: 'Salário',
        entries: true,
      },
      {
        id: 4,
        createdAt: 'Segunda-feira, 29 Jan',
        value: 800,
        title: 'Aluguel',
        entries: false,
      },
    ],
  },
];

const CardListScreen: React.FC = () => {
  const { navigate } = useNavigation();

  const renderItem = ({ item }: any) => {
    return (
      <Ripple
        rippleContainerBorderRadius={metrics.borderRadius * 2}
        onPress={() => navigate(ROUTES.CARD_DETAIL, { card: item })}
      >
        <CreditCard
          bank={item.bank}
          username={item.name}
          day={item.expirationDay}
          balance={item.value}
        />
      </Ripple>
    );
  };

  return (
    <View
      style={{ backgroundColor: colors.green, flex: 1, position: 'relative' }}
    >
      <BorderRadiusContainer style={{ paddingTop: metrics.base * 4 }}>
        <FlatList
          useNativeDriver
          animation="bounceInDown"
          contentInsetAdjustmentBehavior="automatic"
          duration={1000}
          renderItem={renderItem}
          data={data}
          keyExtractor={(item: any) => item.id.toString()}
          ItemSeparatorComponent={() => (
            <View style={{ marginVertical: metrics.base }} />
          )}
        />
      </BorderRadiusContainer>
      <Button type="rounded" onPress={() => navigate(ROUTES.ADD_CARD)} />
    </View>
  );
};

export default CardListScreen;
