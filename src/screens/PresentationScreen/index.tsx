import React from 'react';
import { View } from 'react-native';

import metrics from '../../styles/variables/metrics';
import Button from '../../components/Button';
import { Container as ContentContainer } from '../../components/Container';
import {
  BusinessManSvg,
  ButtonsContainer,
  Container,
  Header,
  SignUpButton,
  Title,
} from './styles';
import { useNavigation } from '@react-navigation/core';
import { ROUTES } from '../../constants/routes';
import { Wave } from '../../components/Wave';

const PresentationScreen: React.FC = () => {
  const { navigate } = useNavigation();
  return (
    <Container>
      <Wave />
      <ContentContainer>
        <Header>
          <BusinessManSvg />
          <Title>
            Bora economizar {'\n'}
            grana?
          </Title>
        </Header>
        <ButtonsContainer>
          <Button title="Entrar" onPress={() => navigate(ROUTES.LOGIN)} />
          <SignUpButton onPress={() => navigate(ROUTES.SIGNUP)} />
        </ButtonsContainer>
      </ContentContainer>
    </Container>
  );
};

export default PresentationScreen;
