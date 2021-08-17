import styled from 'styled-components/native';
import Ripple from 'react-native-material-ripple';
import { colors, metrics } from '../../styles';

export const AddButton = styled(Ripple).attrs({
  rippleContainerBorderRadius: metrics.borderRadius * 1.5,
})`
  width: ${metrics.base * 18}px;
  height: ${metrics.base * 11}px;
  margin-top: -${metrics.base * 5}px;
  border-radius: ${metrics.borderRadius * 1.5}px;
  background-color: ${colors.green};
  display: flex;
  align-items: center;
  justify-content: center;
`;
