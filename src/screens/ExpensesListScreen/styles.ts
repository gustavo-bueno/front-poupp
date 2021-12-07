import styled from 'styled-components/native';
import { metrics } from '../../styles';

export const ExpenseImageContainer = styled.View<{ color: string }>`
  width: ${metrics.wp(17.5)}px;
  height: ${metrics.wp(17.5)}px;

  margin-top: ${metrics.hp(2.5)}px;
  margin-right: ${metrics.base * 4}px;

  border-radius: ${metrics.borderRadius}px;

  background-color: ${({ color }) => color};

  justify-content: center;
  align-items: center;
`;
