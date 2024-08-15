import styled from 'styled-components/native';

import { H3, H2 } from '../../components/Text';
import { metrics } from '../../styles';

export const DateContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const AddCardLabel = styled(H2).attrs({
  fontWeight: 'medium',
})`
  margin-bottom: ${metrics.base * 2}px;
`;
