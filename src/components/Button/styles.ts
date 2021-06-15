import styled from 'styled-components';
import Ripple from 'react-native-material-ripple';

import { metrics } from '../../styles';

export const CustomButton = styled(Ripple)`
  width: 100%;
  padding-top: ${metrics.base * 3}px;
  padding-bottom: ${metrics.base * 3}px;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
`;
