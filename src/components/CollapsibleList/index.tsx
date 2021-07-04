import React from 'react';
import { FlatList } from 'react-native';
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
  onPressItem,
}: IProps) => {
  const [collapsibled, setCollapsed] = useState(true);

  const renderItem = ({ item }: { item: { name: string; id: string } }) => (
    <Ripple onPress={() => onPressItem(item)}>
      <ItemContainer>
        <H2>{item.name}</H2>
      </ItemContainer>
    </Ripple>
  );

  return (
    <>
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
    </>
  );
};

export default CollapsibleList;
