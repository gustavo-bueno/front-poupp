import { TextInput } from 'react-native';
import styled from 'styled-components/native';
import { colors, metrics } from '../../styles';

export const CustomInput = styled(TextInput)`
  width: 100%;
  height: ${metrics.hp(5)}px;
  font-family: 'Ubuntu_400Regular';
  border-bottom-width: 1px;
  border-color: ${colors.darkBlue};
`;
