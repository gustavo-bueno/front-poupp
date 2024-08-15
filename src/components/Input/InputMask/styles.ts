import styled from 'styled-components/native';
import { TextInputMask } from 'react-native-masked-text';

import { colors, metrics } from '../../../styles';

export const CustomMaskedInput = styled(TextInputMask)`
  width: 100%;
  height: ${metrics.hp(5)}px;
  font-family: 'Ubuntu_400Regular';
  border-bottom-width: 1px;
  border-color: ${colors.darkBlue};
`;
