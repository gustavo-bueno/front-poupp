import { useNavigation } from '@react-navigation/core';
import React, { useState, useEffect } from 'react';
import { FlatList, View } from 'react-native';
import { createAnimatableComponent } from 'react-native-animatable';

import { Feather } from '@expo/vector-icons';

import Button from '../../components/Button';
import { BorderRadiusContainer } from '../../components/Container';
import { H3, H4, H5 } from '../../components/Text';
import { colors, metrics } from '../../styles';
import { BillsImage } from '../BillsListSCreen/styles';
import Ripple from 'react-native-material-ripple';
import InfoCardItem from '../../components/InfoCardItem';
import { ROUTES } from '../../constants/routes';
import { IBill } from '../../models/bill';
import useUserData from '../../hooks/useUserData';
import { getTransactionsCategories } from '../../services/transactions';

const List = createAnimatableComponent(FlatList);

const SetExpensesScreen: React.FC = () => {
  const { navigate } = useNavigation();
  const { user } = useUserData();
  const [data, setData] = useState<IBill[]>([]);

  const renderItem = ({ item }: { item: IBill }) => {
    return (
      <Ripple
        style={{ marginTop: metrics.base * 2 }}
        rippleContainerBorderRadius={metrics.borderRadius}
      >
        <InfoCardItem
          title={item.title}
          value={item.remainingValue}
          bottomInfo={<H4>clique para editar</H4>}
          image={
            <BillsImage>
              <Feather name="percent" size={48} color={colors.white} />
            </BillsImage>
          }
        />
      </Ripple>
    );
  };

  useEffect(() => {
    const getCategories = async () => {
      const categories = await getTransactionsCategories(user.token);
      setData(categories);
    };
    getCategories();
  }, []);

  return (
    <>
      <BorderRadiusContainer style={{ justifyContent: 'space-between' }}>
        <View>
          <H3>
            Você tem dívidas? Sem problemas, vamos juntos resolver isso! 💪
          </H3>
          <List
            useNativeDriver
            animation="bounceInDown"
            contentInsetAdjustmentBehavior="automatic"
            duration={1000}
            renderItem={renderItem as any}
            keyExtractor={(_, idx) => idx.toString()}
            ItemSeparatorComponent={() => (
              <View style={{ marginBottom: metrics.base * 4 }} />
            )}
            data={data}
          />
        </View>
        <View style={{ marginBottom: 44 }}>
          <Button title="Pronto!" onPress={() => navigate(ROUTES.ADD_INCOME)} />
        </View>
      </BorderRadiusContainer>
    </>
  );
};

export default SetExpensesScreen;
