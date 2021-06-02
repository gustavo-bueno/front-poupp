import styled from 'styled-components/native';

import Button from '../../components/Button';
import PresentationSvg from '../../../assets/presentation.svg';
import { metrics } from '../../styles';
import { H0 } from '../../components/Text';

export const Header = styled.View`
  position: relative;
  height: ${metrics.hp(82)}px;
  width: ${metrics.wp(100)}px;
  justify-content: space-around;
`;

export const ButtonsContainer = styled.View`
  height: ${metrics.hp(18)}px;
  justify-content: space-evenly;
  align-items: center;
`;

export const SignUpButton = styled(Button).attrs({
  type: 'outline',
  title: 'Criar conta',
})`
  margin-bottom: ${metrics.base * 3}px;
`;

export const BusinessManSvg = styled(PresentationSvg)`
  z-index: 1;
  align-self: center;
  justify-content: center;
  margin-top: ${metrics.base * 10}px;
`;

export const Title = styled(H0).attrs({
  fontWeight: 'bold',
  color: 'text',
})`
  font-size: 36px;
`;
