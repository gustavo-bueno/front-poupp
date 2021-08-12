import styled from 'styled-components/native';
import { colors, metrics } from '../../styles';

export const Container = styled.View`
  padding-left: ${metrics.base * 5}px;
  padding-right: ${metrics.base * 5}px;
  padding-top: ${metrics.base * 2}px;
`;

export const SpaceBetweenContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const CenteredContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const BorderRadiusContainer = styled.View`
  height: ${metrics.hp(100)}px;

  padding-left: ${metrics.base * 5}px;
  padding-right: ${metrics.base * 5}px;
  padding-top: ${metrics.base * 2}px;

  border-top-left-radius: ${metrics.borderRadius * 4}px;
  border-top-right-radius: ${metrics.borderRadius * 4}px;

  background-color: ${colors.background};
`;
