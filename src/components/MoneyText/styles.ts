import { TextMask } from 'react-native-masked-text';
import styled from 'styled-components/native';
import { colors, metrics } from '../../styles';

export const StyledMoneyText = styled(TextMask)`
  font-family: Ubuntu;
  margin-top: ${metrics.base / 2}px;
  color: ${colors.text};
`;
