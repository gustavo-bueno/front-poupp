import React, { useState } from 'react';
import { FlatList } from 'react-native';

import { categoryTypes } from '../../constants/categoriesTypes';
import { ICategory } from '../../models/category';
import { metrics } from '../../styles';
import { H3 } from '../Text';
import { IProps } from './interfaces';
import { CategoryIconContainer, CategoryItemContainer } from './styles';

const CategoriesList: React.FC<IProps> = ({ ...rest }: IProps) => {
  const [selected, setSelected] = useState<ICategory>();
  const renderItem = ({ item }: { item: ICategory }) => {
    return (
      <CategoryItemContainer
        active={selected === item ? true : false}
        onPress={() => setSelected(item)}
      >
        <CategoryIconContainer color={item.color}>
          {item.icon}
        </CategoryIconContainer>
        <H3 style={{ textAlign: 'center', width: metrics.wp(20.55) }}>
          {item.name}
        </H3>
      </CategoryItemContainer>
    );
  };

  return (
    <FlatList
      style={{ maxHeight: metrics.hp(12) }}
      showsHorizontalScrollIndicator={false}
      horizontal
      renderItem={renderItem}
      data={categoryTypes}
      {...rest}
      keyExtractor={(item) => item.id}
    />
  );
};

export default CategoriesList;
