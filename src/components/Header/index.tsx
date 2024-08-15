import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Entypo } from '@expo/vector-icons';

import { H0, H1 } from '../Text';
import { IProps } from './IProps';

import { BackButton, TextContainer, TitleContainer } from './styles';

const Header = ({
  title,
  subtitle,
  backButton = true,
  titleStyle,
  ...rest
}: IProps) => {
  const { goBack } = useNavigation();

  return (
    <TitleContainer {...rest}>
      {backButton && (
        <BackButton onPress={goBack}>
          <Entypo name="chevron-left" size={24} color="white" />
        </BackButton>
      )}
      <TextContainer>
        <H1 style={titleStyle} color="white">
          {title}
        </H1>
        {subtitle && (
          <H0 fontWeight="bold" color="white">
            {subtitle.toUpperCase()}
          </H0>
        )}
      </TextContainer>
    </TitleContainer>
  );
};

export default Header;
