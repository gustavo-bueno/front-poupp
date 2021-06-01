import styled from 'styled-components/native';

import Button from '../../components/Button';
import { H0 } from '../../components/Text';
import { colors, metrics } from '../../styles';

export const Header = styled.View`
  justify-content: space-between;
  height: 44%;
`;

export const SignUpButton = styled(Button).attrs({
  type: 'link',
  title: 'Criar conta  >',
  titleWeight: 'bold',
  titleStyle: {
    color: colors.white,
    textAlign: 'right',
    fontSize: 18,
  },
})`
  width: ${metrics.wp(35)}px;
  align-self: flex-end;
  padding-top: ${metrics.base}px;
  padding-bottom: ${metrics.base}px;
`;

export const FormContainer = styled.View`
  height: 50%;
`;

export const ForgotPasswordButton = styled(Button).attrs({
  type: 'link',
  titleWeight: 'bold',
  title: 'Esqueceu sua senha?',
  titleStyle: {
    fontSize: 16,
    textAlign: 'center',
  },
})`
  margin-top: ${metrics.base * 5}px;
  width: ${metrics.wp(50)}px;
  align-self: center;
  padding-top: ${metrics.base}px;
  padding-bottom: ${metrics.base}px;
`;

export const Title = styled(H0).attrs({
  fontWeight: 'bold',
  color: 'text',
})`
  font-size: 32px;
  margin-bottom: ${metrics.base * 3}px;
`;

export const SignInButton = styled(Button).attrs({
  title: 'Entrar',
})`
  margin-top: ${metrics.base * 6}px;
  margin-bottom: ${metrics.base}px;
`;
