import React from 'react';
import { IProps } from './IProps';

import { Container } from './styles';

const CardItem = ({ content, svgImage }: IProps) => {
  return (
    <Container>
      {content}
      {svgImage}
    </Container>
  );
};

export default CardItem;
