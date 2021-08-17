import React from 'react';
import { FlatList } from 'react-native';
import { CardContainer, Container, TransactionsTitle } from './styles';

import MovementCard from '../../components/MovementCard';
import CreditCard from '../../components/CreditCard';
import { BorderRadiusContainer } from '../../components/Container';
import { useRoute } from '@react-navigation/native';
import { createAnimatableComponent } from 'react-native-animatable';
import useAnimation from '../../hooks/useAnimation';
import { metrics } from '../../styles';

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

const List = createAnimatableComponent(FlatList);

const CardDetailScreen = () => {
  const { card } = useRoute()?.params as any;
  const { opacityStyle } = useAnimation();
  return (
    <Container>
      <CardContainer style={opacityStyle}>
        <CreditCard
          username={card.name}
          bank={card.bank}
          day={card.expirationDay}
          balance={card.value}
        />
      </CardContainer>
      <BorderRadiusContainer style={{ paddingTop: metrics.base * 4 }}>
        <List
          useNativeDriver
          animation="bounceInUp"
          contentInsetAdjustmentBehavior="automatic"
          duration={1000}
          keyExtractor={(item: any) => item.id.toString()}
          data={card.transactions}
          renderItem={renderTransactionItem}
        />
      </BorderRadiusContainer>
    </Container>
  );
};

export default CardDetailScreen;
