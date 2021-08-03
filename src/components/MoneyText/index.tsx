import React from 'react';

import { IProps } from './IProps';
import { StyledMoneyText } from './styles';
import { fontSize as fSize } from '../../styles';

const MoneyText: React.FC<IProps> = ({ value, fontSize, style, ...rest }) => {
  return (
    <StyledMoneyText
      type="money"
      value={Number(value).toString()}
      style={[
        {
          fontSize: fSize[fontSize],
        },
        style,
      ]}
      {...rest}
    />
  );
};

export default MoneyText;
