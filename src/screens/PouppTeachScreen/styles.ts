import styled from 'styled-components/native';
import { H1, H2 } from '../../components/Text';
import { colors, metrics } from '../../styles';

export const TitleContainer = styled.View`
  justify-content: flex-end;
  height: ${metrics.hp(15)}px;
  background-color: ${colors.green};
  padding-left: ${metrics.base * 3}px;
  padding-bottom: ${metrics.base * 4}px;
`;

export const Container = styled.View`
  height: ${metrics.hp(100)}px;
  border-top-left-radius: ${metrics.borderRadius * 4}px;
  border-top-right-radius: ${metrics.borderRadius * 4}px;
  background-color: ${colors.background};
`;

export const Title = styled(H1)`
  margin-top: ${metrics.base * 4}px;
  margin-left: ${metrics.base * 4}px;
`;

export const CardsContainer = styled.View`
  padding-top: ${metrics.base * 4}px;
`;
