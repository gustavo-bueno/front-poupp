import styled from 'styled-components';
import Ripple from 'react-native-material-ripple';

import { colors, metrics } from '../../styles';

export const CustomButton = styled(Ripple)`
  width: 100%;
  padding-top: ${metrics.base * 3}px;
  padding-bottom: ${metrics.base * 3}px;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
`;

export const RoundedButton = styled(Ripple).attrs({
  rippleContainerBorderRadius: metrics.hp(10),
})`
  height: ${metrics.wp(20)}px;
  width: ${metrics.wp(20)}px;
  background-color: ${colors.green};
  border-radius: ${metrics.wp(10)}px;
  position: absolute;
  bottom: 10px;
  right: 10px;
  justify-content: center;
  align-items: center;
`;
