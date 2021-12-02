import Ripple from 'react-native-material-ripple';
import styled from 'styled-components/native';
import { H2 } from '../../components/Text';
import { colors, metrics } from '../../styles';

export const OptionContainer = styled(Ripple).attrs({
  rippleBorderRadius: metrics.borderRadius,
})<{ isSelected: boolean }>`
  width: 100%;
  height: ${metrics.hp(15)}px;

  position: relative;

  background-color: ${({ isSelected }) =>
    isSelected ? colors.gray : 'EBE1E1'};
`;

export const OptionText = styled(H2)`
  position: absolute;

  top: ${metrics.base}px;
  left: ${metrics.base}px;
`;
