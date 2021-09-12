import React from 'react';
import { FlatList, View } from 'react-native';
import Ripple from 'react-native-material-ripple';

import { Entypo } from '@expo/vector-icons';

import {
  CollapsibleHeader,
  ItemContainer,
  CollapsibleContainer,
} from './styles';
import { H2 } from '../Text';
import { useState } from 'react';
import { IProps } from './IProps';

export const CollapsibleList: React.FC<IProps> = ({
  collapsibleTitle,
  data,
  itemProp = 'name',
  onPressItem,
}: IProps) => {
  const [collapsibled, setCollapsed] = useState(true);

  const renderItem = ({ item }: { item: any }) => (
    <Ripple
      onPress={() => {
        onPressItem(item);
        setCollapsed(true);
      }}
    >
      <ItemContainer>
        <H2>{item[itemProp]}</H2>
      </ItemContainer>
    </Ripple>
  );

  return (
    <View style={{ borderRadius: 16, backgroundColor: '#FFF' }}>
      <CollapsibleHeader onPress={() => setCollapsed((state) => !state)}>
        <H2>{collapsibleTitle}</H2>
        <Entypo
          name={collapsibled ? 'chevron-down' : 'chevron-up'}
          size={24}
          color="grey"
        />
      </CollapsibleHeader>
      <CollapsibleContainer collapsed={collapsibled}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item: { id: string; name: string }) => item.id}
        />
      </CollapsibleContainer>
    </View>
  );
};

export default CollapsibleList;
