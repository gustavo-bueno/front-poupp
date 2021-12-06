import React, { useRef, useState, useEffect } from 'react';
import { Animated, FlatList, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ripple from 'react-native-material-ripple';

import { ROUTES } from '../../constants/routes';
import MiniCard from '../../components/MiniCard';
import PostCard from '../../components/PostCard';
import { H1 } from '../../components/Text';
import { Container as PaddingContainer } from '../../components/Container';
import { BorderRadiusContainer } from '../../components/Container';

import { colors, metrics } from '../../styles';
import { CardsContainer, CardContainer, Title } from './styles';
import { getYoutubers, IYoutuber } from '../../services/poupp-teach';
import useUserData from '../../hooks/useUserData';

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
  const { user } = useUserData();
  const [youtubersList, setYoutubersList] = useState<IYoutuber[]>([]);

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
      <CardContainer
        style={{
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
      </CardContainer>
    );
  };

  useEffect(() => {
    const getAllYoutubers = async () => {
      const youtubers = await getYoutubers(user.token);
      setYoutubersList(youtubers);
    };
    getAllYoutubers();
  }, [user.token]);

  return (
    <View style={{ backgroundColor: colors.green }}>
      <BorderRadiusContainer style={{ paddingLeft: 0, paddingRight: 0 }}>
        <Title fontWeight="bold" color="text">
          Segue aí umas informações bem importantes! :)
        </Title>
        <CardsContainer>
          <Animated.FlatList
            keyExtractor={(_, idx) => idx.toString()}
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
          <FlatList
            data={youtubersList}
            keyExtractor={(item) => item.channelId}
            renderItem={({ item }) => (
              <MiniCard
                channelId={item.channelId}
                title={item.title}
                image={item.picture}
              />
            )}
          />
        </PaddingContainer>
      </BorderRadiusContainer>
    </View>
  );
};

export default PouppTeachScreen;
