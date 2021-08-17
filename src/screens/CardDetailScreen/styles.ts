import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';
import { colors, metrics, fontFamily } from '../../styles';

export const CardContainer = styled(Animated.View)`
  width: 100%;

  justify-content: center;
  align-items: center;

  padding-top: ${metrics.base * 13}px;
  padding-bottom: ${metrics.base * 6}px;
`;

export const TransactionsTitle = styled.Text`
  margin-bottom: ${metrics.base * 1}px;
  margin-left: ${metrics.base * 4}px;
  font-size: ${metrics.base * 4}px;
  font-family: ${fontFamily.medium};
  color: ${colors.text};
`;

export const Container = styled.SafeAreaView`
  background-color: ${colors.green};
`;
