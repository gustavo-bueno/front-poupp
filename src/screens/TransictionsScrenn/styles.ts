import styled from "styled-components/native";

import { colors, fontFamily, metrics } from "../../styles";
import Ripple from "react-native-material-ripple";

interface props {
  theme: {
    color: string;
  };
}

export const TransactionsContainer = styled.ScrollView`
    width: 100%;
    height: 100%;
    display: flex;
    background: ${colors.green};
    position: relative;
`

export const HeaderContent = styled.View`
  width: 100%;
  padding: ${metrics.base * 3}px;
  height: ${metrics.hp(14)}px;
  margin-top: ${metrics.base * 2}px;
  display: flex;
  justify-content: space-between;
`

export const Title = styled.Text`
    color: ${colors.white};
    font-family: ${fontFamily.medium};
    font-size: ${metrics.base * 6}px;
    margin-top: ${metrics.base * 2}px;
`

export const MainContent = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.background};
  width: 100%;
  min-height: ${metrics.hp(90)}px;
  border-top-right-radius: ${metrics.base * 12.5}px;
  border-top-left-radius: ${metrics.base * 12.5}px;
  margin-top: ${metrics.base * 10}px;
  padding-top: ${metrics.base * 5}px;
  padding-bottom: ${metrics.base * 5}px;
`;

export const Filter = styled.View`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: ${metrics.hp(13)}px;
`

export const Year = styled(Ripple)`
  height: ${metrics.base * 6}px;
  width: ${metrics.base * 12}px;
  background-color: ${(props: props) => props.theme.color};
  margin-right: ${metrics.base * .5}px;
  margin-left: ${metrics.base * .5}px;
  border-radius: ${metrics.base * 2.5}px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const YearText = styled.Text`
  font-family: ${fontFamily.regular};
  font-size: ${metrics.base * 3.5}px;
  color: ${(props: props) => props.theme.color};
`

export const MonthContainer  =styled.View`
  margin-top: ${metrics.base * 2}px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`

export const ChangeButton = styled(Ripple)`
  height: ${metrics.base * 12}px;
  width: ${metrics.base * 12}px;
  border-radius: ${metrics.base * 6}px;
  background-color: ${colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Month = styled.View`
  height: ${metrics.base * 12}px;
  width: ${metrics.wp(50)}px;
  border-radius: ${metrics.base * 7}px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.white};
  margin-right: ${metrics.wp(5)}px;
  margin-left: ${metrics.wp(5)}px;
`

export const MonthText = styled.Text`
  color: ${colors.text};
  font-family: ${fontFamily.medium};
  font-size: ${metrics.base * 5.5}px;
`

export const DayTransactions = styled.View`
  display: flex;
  margin-top: ${metrics.base * 6}px;
  width: 90%;
`

export const DayTransactionsTitle = styled.Text`
  margin-bottom: ${metrics.base * 1}px;
  margin-left: ${metrics.base * 4}px;
  font-size: ${metrics.base * 4}px;
  font-family: ${fontFamily.medium};
  color: ${colors.text};
`