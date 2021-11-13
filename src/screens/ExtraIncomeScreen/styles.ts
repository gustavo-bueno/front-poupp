import styled from 'styled-components/native';
import { H1 } from '../../components/Text';
import { colors, metrics } from '../../styles';

export const Title = styled(H1).attrs({
  fontWeight: 'bold',
})`
  margin-top: ${metrics.base * 4}px;
  margin-bottom: ${metrics.base * 4}px;
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
  padding-right: ${metrics.base * 2}px;
`;
