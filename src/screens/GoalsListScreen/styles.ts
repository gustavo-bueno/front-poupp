import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

import { colors, metrics } from '../../styles';

export const Container = styled.View`
  flex: 1;
  position: relative;
  background-color: ${colors.green};
`;

export const CardItemContent = styled.View`
  flex: 1;
  max-width: ${metrics.wp(50.5)}px;
  justify-content: space-evenly;
`;

export const ProgressTextContainer = styled.View`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const styles = StyleSheet.create({
  svg: { position: 'absolute', bottom: 5, right: -30 },
  itemSvg: {
    position: 'absolute',
    right: -metrics.wp(25),
    bottom: -metrics.hp(1.5),
    zIndex: 1,
  },
});
