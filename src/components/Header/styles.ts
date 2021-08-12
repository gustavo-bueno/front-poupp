import styled from 'styled-components/native';

import { colors, metrics } from '../../styles';

export const TitleContainer = styled.View`
  height: ${metrics.hp(15)}px;

  justify-content: flex-end;

  background-color: ${colors.green};

  padding-left: ${metrics.base * 3}px;
  padding-bottom: ${metrics.base * 4}px;
`;
