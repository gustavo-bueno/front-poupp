import Ripple from 'react-native-material-ripple';
import styled from 'styled-components/native';
import { H2 } from '../../components/Text';
import { colors, metrics } from '../../styles';

export const OptionContainer = styled(Ripple).attrs({
  rippleBorderRadius: metrics.borderRadius,
})<{ isSelected: boolean }>`
  width: 100%;
  height: ${metrics.hp(25)}px;

  border-radius: ${metrics.borderRadius}px;

  position: relative;

  background-color: ${({ isSelected }) =>
    isSelected ? colors.gray : '#EBE1E1'};

  margin-top: ${metrics.base * 3}px;

  align-items: center;
`;

export const OptionText = styled(H2)`
  position: absolute;

  top: ${metrics.base}px;
  left: ${metrics.base}px;
`;
