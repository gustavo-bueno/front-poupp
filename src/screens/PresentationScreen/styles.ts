import styled from 'styled-components/native';

import Button from '../../components/Button';
import PresentationSvg from '../../../assets/presentation.svg';
import { colors, metrics } from '../../styles';
import { H0 } from '../../components/Text';

export const Header = styled.View`
  position: relative;
  height: ${metrics.hp(80)}px;
  width: ${metrics.wp(100)}px;
  justify-content: space-around;
`;

export const ButtonsContainer = styled.View`
  height: 20%;
  justify-content: space-evenly;
  align-items: center;
`;

export const SignUpButton = styled(Button).attrs({
  type: 'outline',
  title: 'Criar conta',
})`
  margin-bottom: ${metrics.base * 3}px;
  background-color: ${colors.white};
`;

export const BusinessManSvg = styled(PresentationSvg)`
  z-index: 1;
  align-self: center;
  justify-content: center;
  margin-top: ${metrics.base * 8}px;
`;

export const Title = styled(H0).attrs({
  fontWeight: 'bold',
  color: 'text',
})`
  font-size: 36px;
  margin-bottom: ${metrics.base * 2}px;
`;
