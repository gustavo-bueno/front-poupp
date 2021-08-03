import React, { useRef } from 'react';
import { FlatList, SafeAreaView, View, Animated } from 'react-native';
import {
  CardContainer,
  Container,
  MainContent,
  Transactions,
  TransactionsTitle,
} from './styles';

import MovementCard from '../../components/MovementCard';
import Card from '../../components/Card';
import { metrics } from '../../styles';

const data = [
  {
    id: 1,
    name: 'Gustavo Carvalho',
    expirationDay: parseInt('09'),
    value: 199000,
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
        title: 'Aluguél',
        entries: false,
      },
    ],
  },
];

const ITEM_SIZE = metrics.wp(100);

const renderTransactionItem = ({ item }: any) => {
  return (
    <>
      <TransactionsTitle>{item.createdAt}</TransactionsTitle>
      <MovementCard
        entries={item.entries}
        value={item.value}
        title={item.title}
      />
    </>
  );
};

const CardScreen: React.FC = () => {
  const scrollX = useRef(new Animated.Value(0)).current;

  const renderItem = ({ item, index }: any) => {
    const inputRange = [
      index - 1 * ITEM_SIZE,
      index * ITEM_SIZE,
      index + 1 * ITEM_SIZE,
    ];
    const translateY = scrollX.interpolate({
      inputRange,
      outputRange: [0, -15, 0],
    });
    return (
      <Animated.View style={{ width: ITEM_SIZE, transform: [{ translateY }] }}>
        <CardContainer>
          <Card
            username={item.name}
            day={item.expirationDay}
            balance={item.value}
          />
        </CardContainer>
        <Transactions>
          <FlatList
            keyExtractor={(item) => item.id.toString()}
            data={item.transactions}
            renderItem={renderTransactionItem}
          />
        </Transactions>
      </Animated.View>
    );
  };

  return (
    <Container>
      <Animated.FlatList
        style={{ height: '100%' }}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        data={data}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        decelerationRate={0}
        snapToInterval={ITEM_SIZE}
        bounces={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          {
            useNativeDriver: true,
          }
        )}
      />
      <MainContent />
    </Container>
  );
};

export default CardScreen;
