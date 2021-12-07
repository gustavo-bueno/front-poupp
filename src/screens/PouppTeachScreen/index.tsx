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
import {
  getPouppTeachPosts,
  getYoutubers,
  IYoutuber,
} from '../../services/poupp-teach';
import useUserData from '../../hooks/useUserData';
import { IPost } from '../../models/post';

const ITEM_SIZE = metrics.wp(80);

const PouppTeachScreen: React.FC = () => {
  const { navigate } = useNavigation();
  const { user } = useUserData();
  const [youtubersList, setYoutubersList] = useState<IYoutuber[]>([]);
  const [posts, setPosts] = useState<IPost[]>([]);

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
    const getPouppTeachData = async () => {
      const youtubers = await getYoutubers(user.token);
      const teachPosts = await getPouppTeachPosts(user.token);
      setYoutubersList(youtubers);
      setPosts(teachPosts);
    };
    getPouppTeachData();
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
            data={posts}
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
