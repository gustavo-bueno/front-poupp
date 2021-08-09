import React from 'react';
import { Animated, View } from 'react-native';

import MiniCard from '../../components/MiniCard';
import PostCard from '../../components/PostCard';

import { H0, H1 } from '../../components/Text';
import { Container as PaddingContainer } from '../../components/Container';
import { colors, metrics } from '../../styles';
import { CardsContainer, Container, Title } from './styles';
import { useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import Ripple from 'react-native-material-ripple';
import { ROUTES } from '../../constants/routes';

const data = [
  {
    id: 1,
    title: 'O que é reserva de emergência e porque ela é tão importante?',
    image:
      'https://images.pexels.com/photos/6052014/pexels-photo-6052014.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pellentesque massa sed sagittis tincidunt. Proiimperdiet facilisis. Donec sollicitudin est eu suscipit placerat. Sed mattis sodales ligula, rhoncus sollicitudin turpis iaculis nec. Praesent nec porttitor mi. Fusce ultrices quis odio quis ullamcorper. Etiam urna nunc, euismod at semper vitae, malesuada non nisl. Vestibulum sit amet mollis mi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus egestas semper nunc in vehicula',
  },
  {
    id: 2,
    title: 'O que é reserva de emergência e porque ela é tão importante?',
    image:
      'https://images.pexels.com/photos/6052014/pexels-photo-6052014.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pellentesque massa sed sagittis tincidunt. Proiimperdiet facilisis. Donec sollicitudin est eu suscipit placerat. Sed mattis sodales ligula, rhoncus sollicitudin turpis iaculis nec. Praesent nec porttitor mi. Fusce ultrices quis odio quis ullamcorper. Etiam urna nunc, euismod at semper vitae, malesuada non nisl. Vestibulum sit amet mollis mi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus egestas semper nunc in vehicula',
  },
  {
    id: 3,
    title: 'O que é reserva de emergência e porque ela é tão importante?',
    image:
      'https://images.pexels.com/photos/6052014/pexels-photo-6052014.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pellentesque massa sed sagittis tincidunt. Proiimperdiet facilisis. Donec sollicitudin est eu suscipit placerat. Sed mattis sodales ligula, rhoncus sollicitudin turpis iaculis nec. Praesent nec porttitor mi. Fusce ultrices quis odio quis ullamcorper. Etiam urna nunc, euismod at semper vitae, malesuada non nisl. Vestibulum sit amet mollis mi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus egestas semper nunc in vehicula',
  },
];

const ITEM_SIZE = metrics.wp(80);

const PouppTeachScreen: React.FC = () => {
  const { navigate } = useNavigation();

  const scrollX = useRef(new Animated.Value(0)).current;

  const renderItem = ({ item, index }: any) => {
    const inputRange = [
      (index - 1) * ITEM_SIZE,
      index * ITEM_SIZE,
      (index + 1) * ITEM_SIZE,
    ];
    const translateY = scrollX.interpolate({
      inputRange,
      outputRange: [0, -8, 0],
    });
    return (
      <Animated.View
        style={{
          marginTop: metrics.base * 2,
          marginHorizontal: metrics.base * 1.5,
          width: ITEM_SIZE,
          transform: [{ translateY }],
        }}
      >
        <Ripple
          rippleContainerBorderRadius={metrics.borderRadius}
          onPress={() => navigate(ROUTES.POST_DETAIL, { post: item })}
        >
          <PostCard title={item.title} image={item.image} />
        </Ripple>
      </Animated.View>
    );
  };

  return (
    <View style={{ backgroundColor: colors.green }}>
      <Container>
        <Title fontWeight="bold" color="text">
          Segue aí umas informações bem importantes! :)
        </Title>
        <CardsContainer>
          <Animated.FlatList
            renderItem={renderItem}
            data={data}
            decelerationRate={0}
            snapToInterval={ITEM_SIZE}
            bounces={false}
            contentContainerStyle={{
              alignSelf: 'center',
            }}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              {
                useNativeDriver: true,
              }
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </CardsContainer>

        <PaddingContainer>
          <H1
            fontWeight="bold"
            style={{
              marginVertical: metrics.base * 4,
            }}
          >
            Alguns canais de finanças que ajudam muito!
          </H1>
          <MiniCard
            channelId="UCT4nDeU5pv1XIGySbSK-GgA"
            title="Canal Primo Rico"
            image="https://yt3.ggpht.com/ytc/AAUvwniJHOXNmMgd3jZGuuu3GvIARyE1HFEVVhRcX_BxCw=s900-c-k-c0x00ffffff-no-rj"
          />
          <MiniCard
            channelId="UC8mDF5mWNGE-Kpfcvnn0bUg"
            title="Me poupe"
            image="https://yt3.ggpht.com/ytc/AAUvwngNoWKOTh_VCS89ORIZb9gdAQMZvyocgjXhGQx91Q=s900-c-k-c0x00ffffff-no-rj"
          />
        </PaddingContainer>
      </Container>
    </View>
  );
};

export default PouppTeachScreen;
