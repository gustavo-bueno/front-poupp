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

const PresentationScreen: React.FC = () => {
  return (
    <View style={{ position: 'relative', flex: 1 }}>
      <Wave
        width={metrics.wp(100)}
        style={{ position: 'absolute', top: 0, zIndex: 0 }}
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
          <Button title="Entrar" />
          <SignUpButton />
        </ButtonsContainer>
      </Container>
    </View>
  );
};

export default PresentationScreen;
