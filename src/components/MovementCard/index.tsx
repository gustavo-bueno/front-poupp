import React from 'react';
import { colors } from '../../styles';
import { IProps } from './IProps';

import NumberToMoney from '../../functions/NumberToMoney';

import {
  CardConatiner,
  TitleContainer,
  Title,
  ValueContainer,
  ValueDescription,
  Value,
} from './styles';

const MovementCard = ({ entries = false, title, value }: IProps) => {
  return (
    <CardConatiner>
      <TitleContainer>
        <Title theme={{ color: entries ? colors.green : colors.red }}>
          {title}
        </Title>
      </TitleContainer>
      <ValueContainer>
        <ValueDescription
          theme={{ color: entries ? colors.green : colors.red }}
        >
          {entries ? '+R$' : '-R$'}
        </ValueDescription>
        <Value>{NumberToMoney(value)}</Value>
      </ValueContainer>
    </CardConatiner>
  );
};

export default MovementCard;
