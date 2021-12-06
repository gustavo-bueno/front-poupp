import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';

import { BorderRadiusContainer } from '../../components/Container';
import InfoCardItem from '../../components/InfoCardItem';
import { H5 } from '../../components/Text';
import { metrics } from '../../styles';
import { ItemImage } from './styles';
import { AxiosResponse } from 'axios';
import useUserData from '../../hooks/useUserData';
import goalImg from '../../../assets/images/goal.png';
import walletImg from '../../../assets/images/wallet.png';
import axiosApi from '../../services/apiRequest';
import { ITransaction } from '../../models/transaction';
import { IAccount } from '../../models/account';

interface ListRenderItemInfo<ItemT> {
  item: ItemT;

  index: number;

  separators: {
    highlight: () => void;
    unhighlight: () => void;
    updateProps: (select: 'leading' | 'trailing', newProps: any) => void;
  };
}

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

const renderItem = ({ item }: ListRenderItemInfo<IAccount>) => (
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
);

const AccountsListScreen: React.FC = () => {
  const { user } = useUserData();

  const [accounts, setAccounts] = useState<IAccount[]>([]);

  const options = {
    headers: { Authorization: `Bearer ${user.token}` },
  };

  useEffect(() => {
    axiosApi.get('/accounts', options).then((response: AxiosResponse) => {
      if (response.status === 200) {
        setAccounts(response.data);
      }
    });
  }, []);

  return (
    <BorderRadiusContainer style={{ paddingTop: metrics.base * 4 }}>
      <FlatList
        data={accounts}
        renderItem={renderItem}
        ItemSeparatorComponent={() => (
          <View style={{ marginBottom: metrics.base * 4 }} />
        )}
        keyExtractor={(_, idx) => idx.toString()}
      />
    </BorderRadiusContainer>
  );
};

export default AccountsListScreen;
