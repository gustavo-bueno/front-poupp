import React from 'react';
import { H3 } from '../Text';
import { IProps } from './IProps';
import { MiniCardContainer, MiniCardImage, MiniCardText } from './styles';

const MiniCard: React.FC<IProps> = ({ title, image }: IProps) => {
  return (
    <MiniCardContainer>
      <MiniCardImage source={{ uri: image }} />
      <MiniCardText>
        <H3>{title}</H3>
      </MiniCardText>
    </MiniCardContainer>
  );
};

export default MiniCard;
