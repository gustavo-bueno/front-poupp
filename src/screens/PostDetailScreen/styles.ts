import styled from 'styled-components/native';
import { Image } from 'react-native';

import { colors, metrics } from '../../styles';
import { H2, H1 } from '../../components/Text';

export const Container = styled.ScrollView`
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;

  padding: ${metrics.base * 3}px;

  background-color: ${colors.background};
  height: 100%;
  flex: 1;
`;

export const PostImage = styled(Image)`
  width: 100%;
  height: ${metrics.hp(15)}px;
  margin-top: ${metrics.base * 3}px;
`;

export const PostContent = styled(H2)`
  text-align: justify;
  margin-top: ${metrics.base * 2}px;
  color: #5f6266;
`;

export const ProducedByText = styled(H2).attrs({
  color: 'text',
})`
  margin-top: ${metrics.base * 2}px;
`;
