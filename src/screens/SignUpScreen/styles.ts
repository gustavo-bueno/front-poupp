import styled from 'styled-components/native';
import RegisterVector from '../../../assets/signup.svg';
import { colors, metrics } from '../../styles';
import { Form as Unform } from '@unform/mobile';

export const SignUpVector = styled(RegisterVector).attrs({
  width: '100%',
  height: '100%',
})`
  align-self: flex-end;
  margin-top: ${metrics.base * 10}px;
  margin-bottom: ${metrics.base * 5}px;
`;

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.white};
`;

export const Form = styled(Unform)`
  border-top-left-radius: ${metrics.borderRadius}px;
  border-top-right-radius: ${metrics.borderRadius}px;
`;

export const Content = styled.View`
  flex: 1;
`;
