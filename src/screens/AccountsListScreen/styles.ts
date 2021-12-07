import styled from 'styled-components/native';
import { Image } from 'react-native';
import { colors, metrics } from '../../styles';

export const ItemImage = styled(Image)`
  width: ${metrics.wp(17.5)}px;
  height: ${metrics.wp(17.5)}px;

  margin-top: ${metrics.hp(2.5)}px;
  margin-right: ${metrics.base * 4}px;

  border-radius: ${metrics.borderRadius}px;
`;

export const Container = styled.View`
  flex: 1;
  position: relative;
  background-color: ${colors.green};
`;
