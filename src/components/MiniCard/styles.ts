import styled from 'styled-components/native';
import { colors, metrics } from '../../styles';

export const MiniCardContainer = styled.View`
  background-color: ${colors.white};
  height: ${metrics.hp(8)}px;
  border-radius: ${metrics.borderRadius}px;
  flex-direction: row;
`;

export const MiniCardImage = styled.Image`
  height: ${metrics.hp(8)}px;
  width: ${metrics.hp(8)}px;
  border-radius: ${metrics.borderRadius}px;
`;

export const MiniCardText = styled.View`
  padding-left: ${metrics.base * 2}px;
  flex: 1;
  justify-content: center;
`;
