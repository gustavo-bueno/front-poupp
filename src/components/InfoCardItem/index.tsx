import React from 'react';
import { IProps } from './IProps';
import CardItem from '../CardItem';
import MoneyText from '../MoneyText';
import { H2 } from '../Text';

import { CardItemContent } from './styles';

const InfoCardItem: React.FC<IProps> = ({
  title,
  price,
  bottomInfo,
  image,
}: IProps) => {
  return (
    <CardItem
      content={
        <CardItemContent>
          <H2 fontWeight="bold">{title}</H2>
          <MoneyText value={price} bold="medium" fontSize="h2" />
          {bottomInfo && bottomInfo}
        </CardItemContent>
      }
      svgImage={image}
    />
  );
};

export default InfoCardItem;
