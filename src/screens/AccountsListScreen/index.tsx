import React, { useEffect, useState } from 'react';
import { FlatList as List, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { BorderRadiusContainer } from '../../components/Container';
import InfoCardItem from '../../components/InfoCardItem';
import { H5 } from '../../components/Text';
import * as Animatable from 'react-native-animatable';
import { metrics } from '../../styles';
import { Container, ItemImage } from './styles';
import { AxiosResponse } from 'axios';
import useUserData from '../../hooks/useUserData';
import goalImg from '../../../assets/images/goal.png';
import walletImg from '../../../assets/images/wallet.png';
import apiRequest from '../../services/apiRequest';
import { ITransaction } from '../../models/transaction';
import { IAccount } from '../../models/account';
import { Loading } from '../../components/Loading';
import Button from '../../components/Button';
import { ROUTES } from '../../constants/routes';
import Ripple from 'react-native-material-ripple';

interface ListRenderItemInfo<ItemT> {
  item: ItemT;

  index: number;

  separators: {
    highlight: () => void;
    unhighlight: () => void;
    updateProps: (select: 'leading' | 'trailing', newProps: any) => void;
  };
}

const FlatList = Animatable.createAnimatableComponent(List);

const getLastTransactionDate = (transactions: ITransaction[]) => {
  const lastTransaction = transactions[transactions.length - 1];

  if (!lastTransaction) {
    return 'Ainda não possui nenhuma movimentação.';
  } else {
    const date = new Date(lastTransaction.createdAt);

    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    return `Última movimentação feita em ${day}/${month}/${year} às ${hours}:${minutes}h`;
  }
};

const AccountsListScreen: React.FC = () => {
  const { user, refresh } = useUserData();

  const { navigate } = useNavigation();

  const [accounts, setAccounts] = useState<IAccount[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const options = {
    headers: { Authorization: `Bearer ${user.token}` },
  };

  useEffect(() => {
    setLoading(true);
    apiRequest.get('/accounts', options).then((response: AxiosResponse) => {
      if (response.status === 200) {
        setAccounts(response.data);
        setLoading(false);
      }
    });
  }, [refresh]);

  const renderItem = ({ item }: ListRenderItemInfo<IAccount>) => (
    <Ripple
      rippleContainerBorderRadius={metrics.borderRadius}
      onPress={() => navigate(ROUTES.ACCOUNT_DETAIL, { account: item })}
    >
      <InfoCardItem
        title={item.name}
        value={item.value}
        bottomInfo={<H5>{getLastTransactionDate(item.transactions)}</H5>}
        image={
          <ItemImage
            source={
              item.bank
                ? { uri: item.bank.picture }
                : item.type === 'wallet'
                ? walletImg
                : goalImg
            }
          />
        }
      />
    </Ripple>
  );

  return (
    <Container style={{ position: 'relative' }}>
      <BorderRadiusContainer style={{ paddingTop: metrics.base * 4 }}>
        {loading ? (
          <Loading />
        ) : (
          <FlatList
            useNativeDriver
            animation="bounceInDown"
            contentInsetAdjustmentBehavior="automatic"
            duration={1000}
            data={accounts}
            renderItem={renderItem as any}
            ItemSeparatorComponent={() => (
              <View style={{ marginBottom: metrics.base * 4 }} />
            )}
            keyExtractor={(_, idx) => idx.toString()}
          />
        )}
      </BorderRadiusContainer>
      <Button type="rounded" onPress={() => navigate(ROUTES.ADD_ACCOUNT)} />
    </Container>
  );
};

export default AccountsListScreen;
