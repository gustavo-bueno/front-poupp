import styled from 'styled-components/native';
import { metrics, colors } from '../../styles';

export const CardPostContainer = styled.View`
  background-color: ${colors.white};
  border-radius: ${metrics.borderRadius * 2}px;
  height: ${metrics.hp(25)}px;
  width: ${metrics.wp(80)}px;
  flex-wrap: wrap;
  margin-left: ${metrics.base * 4}px;
  border-radius: ${metrics.borderRadius}px;
`;
