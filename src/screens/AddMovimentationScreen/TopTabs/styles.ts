import styled from 'styled-components/native';
import { colors, metrics } from '../../../styles';

export const OptionContainer = styled.View<{ active: boolean }>`
  border-color: ${colors.green};
  padding-top: ${metrics.base}px;
  padding-bottom: ${metrics.base}px;
  border-bottom-width: ${(props) => (props.active ? 3 : 0)}px;
`;

export const OptionsContainer = styled.View`
  background-color: ${colors.white};
  border-radius: ${metrics.borderRadius}px;
  margin-top: ${metrics.base * 2}px;
  margin-bottom: ${metrics.base * 2}px;
  height: ${metrics.hp(7)}px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;
