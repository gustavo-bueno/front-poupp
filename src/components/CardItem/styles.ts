import styled from 'styled-components/native';
import { Image, StyleSheet } from 'react-native';

import { colors, metrics } from '../../styles';

export const Container = styled.View`
  height: ${metrics.hp(13)}px;
  width: 100%;

  flex-direction: row;
  justify-content: space-between;

  padding-left: ${metrics.base * 3}px;

  position: relative;

  background-color: ${colors.white};
  border-radius: ${metrics.borderRadius}px;
`;
