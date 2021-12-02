import styled from 'styled-components/native';
import { colors, metrics } from '../../styles';

export const BillsImage = styled.View`
  width: ${metrics.wp(17.5)}px;
  height: ${metrics.wp(17.5)}px;

  margin-top: ${metrics.hp(2.5)}px;
  margin-right: ${metrics.base * 4}px;

  border-radius: ${metrics.borderRadius}px;

  background: ${colors.red};

  justify-content: center;
  align-items: center;
`;
