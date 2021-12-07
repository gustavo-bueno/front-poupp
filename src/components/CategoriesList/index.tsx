import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { categoryInfos } from '../../constants/categoriesTypes';

import { ICategory } from '../../models/category';
import { metrics } from '../../styles';
import { H3 } from '../Text';
import { IProps } from './interfaces';
import { CategoryIconContainer, CategoryItemContainer } from './styles';

const CategoriesList: React.FC<IProps> = ({
  data,
  onSelect,
  income,
  ...rest
}: IProps) => {
  const [selected, setSelected] = useState<ICategory>();
  const renderItem = ({ item }: { item: ICategory }) => {
    if ((income && !item.income) || (!income && item.income)) {
      return <></>;
    }

    return (
      <CategoryItemContainer
        active={selected === item}
        onPress={() => {
          setSelected(item);
          onSelect(item._id);
        }}
      >
        <CategoryIconContainer color={categoryInfos[item.type].color}>
          {categoryInfos[item.type].icon}
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
      data={data}
      {...rest}
      keyExtractor={(item) => item._id}
    />
  );
};

export default CategoriesList;
