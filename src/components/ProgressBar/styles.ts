import styled from 'styled-components/native';
import { colors, metrics } from '../../styles';

export const ProgressContainer = styled.View`
  width: 100%;
  background-color: ${colors.gray};
  height: 10px;
  border-radius: ${metrics.borderRadius}px;
`;

export const Progress = styled.View`
  background-color: ${colors.green};
  height: 10px;
  border-radius: ${metrics.borderRadius}px;
`;
