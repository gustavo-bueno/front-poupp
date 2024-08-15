import styled from 'styled-components/native';
import { Animated } from 'react-native';

import { H1 } from '../../components/Text';
import { metrics } from '../../styles';

export const Title = styled(H1)`
  margin-top: ${metrics.base * 4}px;
  margin-left: ${metrics.base * 4}px;
`;

export const CardsContainer = styled.View`
  padding-top: ${metrics.base * 4}px;
`;

export const CardContainer = styled(Animated.View)`
  margin-top: ${metrics.base * 2}px;
  margin-left: ${metrics.base * 1.5}px;
  margin-right: ${metrics.base * 1.5}px;
`;
