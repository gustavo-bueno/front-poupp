import styled from 'styled-components/native';
import { Image } from 'react-native';

import { colors, metrics } from '../../styles';
import { H2 } from '../../components/Text';

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
