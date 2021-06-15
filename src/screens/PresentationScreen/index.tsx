import React from 'react';
import { View } from 'react-native';

import Wave from '../../../assets/background.svg';
import metrics from '../../styles/variables/metrics';
import Button from '../../components/Button';
import { Container } from '../../components/Container';
import {
  BusinessManSvg,
  ButtonsContainer,
  Header,
  SignUpButton,
  Title,
} from './styles';
import { useNavigation } from '@react-navigation/core';
import { ROUTES } from '../../constants/routes';

const PresentationScreen: React.FC = () => {
  const { navigate } = useNavigation();
  return (
    <View style={{ position: 'relative', flex: 1, backgroundColor: '#FFF' }}>
      <Wave
        width={metrics.wp(100)}
        style={{ position: 'absolute', top: -metrics.hp(7), zIndex: 0 }}
      />
      <Container>
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
      </Container>
    </View>
  );
};

export default PresentationScreen;
