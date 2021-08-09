import styled from 'styled-components/native';
import { H1 } from '../../components/Text';
import { colors, metrics } from '../../styles';

export const Container = styled.View`
  height: ${metrics.hp(100)}px;
  border-top-left-radius: ${metrics.borderRadius * 4}px;
  border-top-right-radius: ${metrics.borderRadius * 4}px;
  background-color: ${colors.background};
`;

export const Title = styled(H1)`
  margin-top: ${metrics.base * 4}px;
  margin-bottom: ${metrics.base * 4}px;
  margin-left: ${metrics.base * 4}px;
`;

export const NoGoalsContent = styled.View`
  height: ${metrics.hp(20)}px;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${colors.white};
  border-radius: ${metrics.borderRadius}px;
`;

export const NoGoalsContainer = styled.View`
  justify-content: center;
  align-items: center;
  padding-left: ${metrics.base * 2}px;
  padding-right: ${metrics.base * 2}px;
`;
