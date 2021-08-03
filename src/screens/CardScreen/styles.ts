import styled from 'styled-components/native';
import { colors, metrics, fontFamily } from '../../styles';

export const CardContainer = styled.View`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: ${metrics.base * 13}px;
  padding-bottom: ${metrics.base * 6}px;
`;

export const MainContent = styled.View`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  background-color: ${colors.background};

  min-height: ${metrics.hp(90)}px;

  border-top-right-radius: ${metrics.base * 12.5}px;
  border-top-left-radius: ${metrics.base * 12.5}px;
  padding-top: ${metrics.base * 5}px;
  padding-bottom: ${metrics.base * 5}px;

  position: absolute;

  bottom: -${metrics.hp(22)}px;

  z-index: -1;
`;

export const Transactions = styled.View`
  margin-top: ${metrics.base * 6}px;
  padding: 0 16px;
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
  position: relative;
`;
