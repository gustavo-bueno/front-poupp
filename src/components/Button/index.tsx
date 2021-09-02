import React from 'react';
import Ripple from 'react-native-material-ripple';

import { Entypo } from '@expo/vector-icons';

import { H2, H1 } from '../Text';
import { IProps } from './IProps';
import { colors, metrics } from '../../styles';
import { CustomButton, RoundedButton } from './styles';

const Button: React.FC<IProps> = ({
  title,
  type = 'primary',
  style,
  titleWeight,
  titleStyle,
  children,
  ...rest
}: IProps) => {
  let backgroundColor = colors.green;
  let color = colors.white;
  let borderWidth = 0;
  let fontWeight: 'medium' | 'bold' = 'bold';

  if (type == 'outline') {
    color = colors.green;
    backgroundColor = '#FFF';
    borderWidth = 1.5;
    fontWeight = 'medium';
  }

  if (type == 'link') {
    return (
      <Ripple style={style} {...rest}>
        <H2
          color={backgroundColor}
          fontWeight={titleWeight}
          style={[titleStyle]}
        >
          {title}
        </H2>
      </Ripple>
    );
  }

  if (type == 'rounded') {
    return (
      <RoundedButton {...rest}>
        {children ?? (
          <Entypo name="plus" size={metrics.base * 12} color="white" />
        )}
      </RoundedButton>
    );
  }

  return (
    <CustomButton
      rippleContainerBorderRadius={40}
      style={[
        {
          backgroundColor: backgroundColor,
          borderWidth: borderWidth,
          borderColor: color,
        },
        style,
      ]}
      {...rest}
    >
      <H1 color={color} style={[titleStyle]} fontWeight={fontWeight}>
        {title}
      </H1>
    </CustomButton>
  );
};

export default Button;
