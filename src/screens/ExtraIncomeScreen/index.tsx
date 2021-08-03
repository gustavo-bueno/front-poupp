import React from 'react';
import { View, FlatList } from 'react-native';
import MiniCard from '../../components/MiniCard';
import { H0, H1, H2 } from '../../components/Text';
import { colors, metrics } from '../../styles';
import { Container as PaddingContainer } from '../../components/Container';
import {
  Container,
  NoGoalsContainer,
  NoGoalsContent,
  Title,
  TitleContainer,
} from './styles';
import Button from '../../components/Button';
import PostCard from '../../components/PostCard';
import { ProgressBar } from '../../components/ProgressBar';

const data: any[] = [
  {
    totalValue: 200000,
    percentage: 70,
  },
];

const renderItem = ({ item }: any) => (
  <PostCard
    content={
      <View style={{ paddingHorizontal: metrics.base * 2.5 }}>
        <H1 style={{ fontSize: 28 }} color="text">
          R${item.totalValue}
        </H1>
        <ProgressBar progress={0.6} />
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}
        >
          <H2 color="text">
            R${item.totalValue * (item.percentage / 100)} arrecadado
          </H2>
          <H2 color="text">{item.percentage}% concluído</H2>
        </View>
      </View>
    }
    image="https://images.pexels.com/photos/3883509/pexels-photo-3883509.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  />
);

const ExtraIncomeScreen: React.FC = () => {
  return (
    <View style={{ backgroundColor: colors.green }}>
      <TitleContainer>
        <H1 color="white">Bora de</H1>
        <H0 fontWeight="bold" color="white">
          RENDA EXTRA?
        </H0>
      </TitleContainer>
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
