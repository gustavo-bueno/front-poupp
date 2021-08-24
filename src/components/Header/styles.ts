import Ripple from 'react-native-material-ripple';
import styled from 'styled-components/native';

import { colors, metrics } from '../../styles';

export const TitleContainer = styled.View`
  height: ${metrics.hp(15)}px;

  flex-direction: row;
  align-items: flex-end;

  background-color: ${colors.green};

  padding-left: ${metrics.base * 3}px;
  padding-bottom: ${metrics.base * 4}px;
`;

export const TextContainer = styled.View`
  flex-direction: column;
`;

export const BackButton = styled(Ripple)`
  margin-bottom: ${metrics.base * 9}px;
  margin-right: ${metrics.base * 2}px;
`;
