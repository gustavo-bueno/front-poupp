import React from 'react';
import { ScrollView, View } from 'react-native';
import MiniCard from '../../components/MiniCard';
import PostCard from '../../components/PostCard';
import { H0, H1 } from '../../components/Text';
import { colors, metrics } from '../../styles';
import { Container as PaddingContainer } from '../../components/Container';
import { Container, Title, TitleContainer } from './styles';

const PouppTeachScreen: React.FC = () => {
  return (
    <View style={{ backgroundColor: colors.green }}>
      <TitleContainer>
        <H1 color="white">Poupp</H1>
        <H0 fontWeight="bold" color="white">
          EDUCA
        </H0>
      </TitleContainer>
      <Container>
        <Title>Segue aí umas informações bem importantes! :)</Title>
        <ScrollView
          horizontal
          style={{ maxHeight: '25%' }}
          showsVerticalScrollIndicator={false}
        >
          <PostCard
            title="O que é reserva de emergência e por que ela é tão importante?"
            image="https://images.pexels.com/photos/6052014/pexels-photo-6052014.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          />
          <PostCard
            title="O que é reserva de emergência e por que ela é tão importante?"
            image="https://images.pexels.com/photos/6052014/pexels-photo-6052014.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          />
          <PostCard
            title="O que é reserva de emergência e por que ela é tão importante?"
            image="https://images.pexels.com/photos/6052014/pexels-photo-6052014.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          />
        </ScrollView>
        <PaddingContainer>
          <H1
            style={{
              marginVertical: metrics.base * 4,
            }}
          >
            Alguns canais de finanças que ajudam muito!
          </H1>
          <MiniCard
            title="Canal Primo Rico"
            image="https://yt3.ggpht.com/ytc/AAUvwniJHOXNmMgd3jZGuuu3GvIARyE1HFEVVhRcX_BxCw=s900-c-k-c0x00ffffff-no-rj"
          />
          <MiniCard
            title="Me poupe"
            image="https://yt3.ggpht.com/ytc/AAUvwngNoWKOTh_VCS89ORIZb9gdAQMZvyocgjXhGQx91Q=s900-c-k-c0x00ffffff-no-rj"
          />
        </PaddingContainer>
      </Container>
    </View>
  );
};

export default PouppTeachScreen;
