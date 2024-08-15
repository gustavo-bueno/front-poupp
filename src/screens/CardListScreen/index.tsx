import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatList as List, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Ripple from 'react-native-material-ripple';
import Button from '../../components/Button';

import { BorderRadiusContainer } from '../../components/Container';
import CreditCard from '../../components/CreditCard';
import { ROUTES } from '../../constants/routes';
import { colors, metrics } from '../../styles';
import { ICard } from '../../models/card';
import useUserData from '../../hooks/useUserData';
import { AxiosResponse } from 'axios';
import { Loading } from '../../components/Loading';
import axiosApi from '../../services/apiRequest';

const FlatList = Animatable.createAnimatableComponent(List);

const CardListScreen: React.FC = () => {
  const { navigate } = useNavigation();
  const { user, refresh } = useUserData();

  const [cards, setCards] = useState<ICard[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    const options = {
      headers: { Authorization: `Bearer ${user.token}` },
    };

    axiosApi
      .get('/cards', options)
      .then((response: AxiosResponse) => {
        if (response.status === 200) {
          setCards(response.data);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [refresh]);

  const renderItem = ({ item }: { item: ICard }) => {
    return (
      <Ripple
        rippleContainerBorderRadius={metrics.borderRadius * 2}
        onPress={() => navigate(ROUTES.CARD_DETAIL, { card: item })}
        style={{ marginBottom: metrics.base * 4 }}
      >
        <CreditCard
          bank={item.bank.name}
          username={item.username}
          day={item.closeDay}
          balance={item.value}
          limit={item.limit}
        />
      </Ripple>
    );
  };

  return (
    <View
      style={{ backgroundColor: colors.green, flex: 1, position: 'relative' }}
    >
      <BorderRadiusContainer style={{ paddingTop: metrics.base * 4 }}>
        {loading ? (
          <Loading />
        ) : (
          <FlatList
            useNativeDriver
            animation="bounceInDown"
            contentInsetAdjustmentBehavior="automatic"
            duration={1000}
            renderItem={renderItem as any}
            data={cards}
            keyExtractor={(item: any) => item._id.toString()}
            ItemSeparatorComponent={() => (
              <View style={{ marginVertical: metrics.base }} />
            )}
          />
        )}
      </BorderRadiusContainer>
      <Button type="rounded" onPress={() => navigate(ROUTES.ADD_CARD)} />
    </View>
  );
};

export default CardListScreen;
