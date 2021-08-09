import React from 'react';

import { H0, H1 } from '../Text';
import { IProps } from './IProps';

import { TitleContainer } from './styles';

const Header = ({ title, subtitle, ...rest }: IProps) => {
  return (
    <TitleContainer {...rest}>
      <H1 color="white">{title}</H1>
      <H0 fontWeight="bold" color="white">
        {subtitle.toUpperCase()}
      </H0>
    </TitleContainer>
  );
};

export default Header;
