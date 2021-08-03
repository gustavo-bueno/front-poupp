import React from 'react';
import NumberToMoney from '../../functions/NumberToMoney';
import {
  CardContainer,
  BlackBar,
  CardContent,
  WhiteBar,
  Infos,
  BalanceContent,
  UserContent,
  Ball,
  Username,
  Date,
  BalanceText,
} from './styles';

import { IProps } from './IProps';
import { TextMask } from 'react-native-masked-text';

const Card: React.FC<IProps> = ({ username, balance, day }: IProps) => {
  return (
    <CardContainer>
      <BlackBar />
      <CardContent>
        <WhiteBar />
        <Infos>
          <UserContent>
            <Ball />
            <Username>{username}</Username>
          </UserContent>
          <BalanceContent>
            <Date>{day}/mês</Date>
            <BalanceText>
              <TextMask value={balance.toString()} type="money" />
              {'\n'}Balanço
            </BalanceText>
          </BalanceContent>
        </Infos>
      </CardContent>
    </CardContainer>
  );
};

export default Card;
