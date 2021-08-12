import styled from 'styled-components/native';
import { H1 } from '../../components/Text';
import { colors, metrics } from '../../styles';

export const Title = styled(H1)`
  margin-top: ${metrics.base * 4}px;
  margin-left: ${metrics.base * 4}px;
`;

export const CardsContainer = styled.View`
  padding-top: ${metrics.base * 4}px;
`;
