import React from 'react';
import { FlatList } from 'react-native';

import { BorderRadiusContainer } from '../../components/Container';
import InfoCardItem from '../../components/InfoCardItem';
import { H5 } from '../../components/Text';
import { metrics } from '../../styles';
import { ItemImage } from './styles';

const data = [
  {
    username: 'Gustavo Carvalho',
    value: 115000,
    bank: 'Nu',
    image: 'https://assets.brandfetch.io/885f3306ccda4eb.png',
  },
];

const renderItem = ({ item }: { item: any }) => (
  <InfoCardItem
    title={`Conta ${item.bank}`}
    price={item.value}
    bottomInfo={<H5>Última movimentação{'\n'}feita em 27/07 às 17:23h</H5>}
    image={<ItemImage source={{ uri: item.image }} />}
  />
);

const AccountsListScreen: React.FC = () => {
  return (
    <BorderRadiusContainer style={{ paddingTop: metrics.base * 4 }}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(_, idx) => idx.toString()}
      />
    </BorderRadiusContainer>
  );
};

export default AccountsListScreen;
