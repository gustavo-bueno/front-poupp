import React from 'react';
import { IProps } from './IProps';
import CardItem from '../CardItem';
import NumberToMoney from '../../functions/NumberToMoney';
import { H2 } from '../Text';

import { CardItemContent } from './styles';

const InfoCardItem: React.FC<IProps> = ({
  title,
  value,
  bottomInfo,
  image,
}: IProps) => {
  return (
    <CardItem
      content={
        <CardItemContent>
          <H2 fontWeight="bold">{title}</H2>
          <H2 fontWeight='medium'>R$ { NumberToMoney(value) } </H2>
          {bottomInfo && bottomInfo}
        </CardItemContent>
      }
      svgImage={image}
    />
  );
};

export default InfoCardItem;
