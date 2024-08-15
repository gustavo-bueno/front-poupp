import React from 'react';
import { OptionContainer, OptionIcon, OptionTitle } from './styles';

import { IProps } from './IProps';
import { useNavigation } from '@react-navigation/native';
import { metrics } from '../../styles';

const OptionCard = ({ title, icon, route, ...rest }: IProps) => {
  const { navigate } = useNavigation();
  return (
    <OptionContainer
      rippleContainerBorderRadius={metrics.borderRadius * 1.5}
      onPress={() => navigate(route)}
      {...rest}
    >
      <OptionIcon>{icon}</OptionIcon>
      <OptionTitle>{title}</OptionTitle>
    </OptionContainer>
  );
};

export default OptionCard;
