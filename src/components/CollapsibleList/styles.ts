import styled from 'styled-components/native';
import Ripple from 'react-native-material-ripple';
import Collapsible from 'react-native-collapsible';

import { metrics, colors } from '../../styles';

export const CollapsibleHeader = styled(Ripple).attrs({
  rippleContainerBorderRadius: metrics.borderRadius,
})`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  background-color: ${colors.white};
  padding: ${metrics.base * 2}px;
  border-radius: ${metrics.borderRadius}px;
`;

export const ItemContainer = styled.View`
  padding: ${metrics.base}px;
  background-color: ${colors.white};
`;

export const CollapsibleContainer = styled(Collapsible)`
  background-color: ${colors.white};
  border-radius: ${metrics.borderRadius}px;
`;
