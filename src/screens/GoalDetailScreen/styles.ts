import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

import { colors, metrics } from '../../styles';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.green};
`;

export const RemainingInfoContainer = styled.View`
  height: ${metrics.hp(16)}px;

  justify-content: space-evenly;
  align-items: center;

  background-color: ${colors.white};

  border-radius: ${metrics.borderRadius}px;
  margin-bottom: ${metrics.base * 3}px;
`;

export const styles = StyleSheet.create({
  svgImage: {
    position: 'absolute',
    right: -metrics.wp(25),
    bottom: -metrics.hp(1.5),
    zIndex: 1,
  },
});

export const FirstInfoContainer = styled.View`
  position: relative;
  flex: 0.5;
  padding-left: ${metrics.base * 3}px;
`;
