import React from 'react';

import { IProps } from './IProps';
import { StyledMoneyText } from './styles';
import { fontSize as fSize } from '../../styles';

const MoneyText = ({
  value,
  fontSize,
  style,
  bold = false,
  ...rest
}: IProps) => {
  let fontFamily = 'Ubuntu_400Regular';

  if (bold) {
    fontFamily = 'Ubuntu_700Bold';
  }

  return (
    <StyledMoneyText
      type="money"
      value={Number(value).toString()}
      style={[
        {
          fontFamily,
          fontSize: fSize[fontSize],
        },
        style,
      ]}
      {...rest}
    />
  );
};

export default MoneyText;
