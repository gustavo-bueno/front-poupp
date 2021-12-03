import Animated from "react-native-reanimated";
import styled from "styled-components/native";
import { colors, metrics, fontFamily } from "../../styles";

export const CardContainer = styled(Animated.View)`
  width: 100%;

  justify-content: center;
  align-items: center;

  padding-top: ${metrics.base * 13}px;
  padding-bottom: ${metrics.base * 6}px;
`;

export const ScrollViewContainer = styled.ScrollView`
  width: 100%;
  height: 100%;
  display: flex;
  background: ${colors.green};
`;

export const MainContent = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.background};
  width: 100%;
  min-height: ${metrics.hp(90)}px;
  border-top-right-radius: ${metrics.base * 12.5}px;
  border-top-left-radius: ${metrics.base * 12.5}px;
  padding-top: ${metrics.base * 5}px;
  padding-bottom: ${metrics.base * 5}px;
`;

export const DayTransactions = styled.View`
  display: flex;
  margin-bottom: ${metrics.base * 6}px;
  width: 90%;
`;

export const DayTransactionsTitle = styled.Text`
  margin-bottom: ${metrics.base * 1}px;
  margin-left: ${metrics.base * 4}px;
  font-size: ${metrics.base * 4}px;
  font-family: ${fontFamily.medium};
  color: ${colors.text};
`;
