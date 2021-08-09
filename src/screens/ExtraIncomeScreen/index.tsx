import React from 'react';
import { View, FlatList } from 'react-native';
import MiniCard from '../../components/MiniCard';
import { H1, H2, H3 } from '../../components/Text';
import { colors, metrics } from '../../styles';
import { Container as PaddingContainer } from '../../components/Container';
import { Container, NoGoalsContainer, NoGoalsContent, Title } from './styles';
import Button from '../../components/Button';
import PostCard from '../../components/PostCard';
import { ProgressBar } from '../../components/ProgressBar';
import MoneyText from '../../components/MoneyText';

const data: any[] = [
  {
    totalValue: 200000,
    progress: 0.7,
  },
];

const renderItem = ({ item }: any) => (
  <PostCard
    content={
      <View style={{ paddingHorizontal: metrics.base * 2.5 }}>
        <MoneyText
          value={item.totalValue}
          fontSize="h0"
          style={{ fontSize: 24, marginVertical: metrics.base }}
        />
        <ProgressBar progress={item.progress} />
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}
        >
          <H3 color="text">
            <MoneyText fontSize="h2" value={item.totalValue * item.progress} />
            {' arrecadado'}
          </H3>
          <H2 color="text">{item.progress * 100}% concluído</H2>
        </View>
      </View>
    }
    image="https://images.pexels.com/photos/3883509/pexels-photo-3883509.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  />
);

const ExtraIncomeScreen: React.FC = () => {
  return (
    <View style={{ backgroundColor: colors.green }}>
      <Container>
        <Title>Minhas metas</Title>
        {data.length === 0 ? (
          <NoGoalsContainer>
            <NoGoalsContent>
              <H2>Você ainda não possui metas :(</H2>
            </NoGoalsContent>
          </NoGoalsContainer>
        ) : (
          <FlatList
            style={{
              maxHeight: metrics.hp(25),
            }}
            contentContainerStyle={{
              justifyContent: 'center',
              alignItems: 'center',
            }}
            data={data}
            horizontal
            renderItem={renderItem}
          />
        )}
        <PaddingContainer>
          <Button
            style={{ marginTop: metrics.base * 2 }}
            title="Adicionar meta"
          />
          <H1
            fontWeight="bold"
            style={{
              marginVertical: metrics.base * 4,
            }}
          >
            Que tal?
          </H1>
          <MiniCard
            title="Receita de brigadeiro"
            image="https://images.pexels.com/photos/3883509/pexels-photo-3883509.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          />
          <MiniCard
            title="Você realmente precisa de todas as suas roupas?"
            image="https://images.pexels.com/photos/3965545/pexels-photo-3965545.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          />
        </PaddingContainer>
      </Container>
    </View>
  );
};

export default ExtraIncomeScreen;
