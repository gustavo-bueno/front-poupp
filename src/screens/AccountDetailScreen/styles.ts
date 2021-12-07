import styled from "styled-components/native";
import { colors, metrics, fontFamily } from "../../styles";
import { Image } from "react-native";
import Ripple from "react-native-material-ripple";

export const ImageContent = styled.View`
  padding: ${metrics.base * 2}px;
  background-color: ${colors.background};
  border-radius: ${metrics.borderRadius}px;
` 

export const HorizontalContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
`;

export const AccountsInfos = styled.View`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex: 1;
  padding-left: 8%;
  padding-right: 8%;
  height: ${metrics.hp(25)}px;
  flex-direction: column;
`;

export const DescriptionContainer = styled.View`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Informations = styled.View`
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;

export const AccountName = styled.Text`
  font-size: ${metrics.base * 7}px;
  color: ${colors.white};
  font-family: ${fontFamily.medium};
`;

export const AccountValue = styled.Text`
  font-size: ${metrics.base * 6}px;
  color: ${colors.white};
  font-family: ${fontFamily.regular};
`;

export const Description = styled.Text`
  font-size: ${metrics.base * 5}px;
  color: ${colors.white};
  font-family: ${fontFamily.regular};
  text-align: center;
`;

export const ImageContainer = styled.View``;

export const ItemImage = styled(Image)`
  width: ${metrics.wp(20)}px;
  height: ${metrics.wp(20)}px;

  background-color: ${colors.background};
  border-radius: ${metrics.borderRadius}px;
`;

export const ScrollViewContainer = styled.ScrollView`
  width: 100%;
  height: 100%;
  display: flex;
  background: ${colors.green};
`;

export const SeeMoreButton = styled(Ripple)`
  padding: ${metrics.base * 2}px;
  margin-top: ${metrics.base * 2}px;
  background: transparent;
  border-radius: ${metrics.base * 4}px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SeeMoreText = styled.Text`
  font-size: ${metrics.base * 4}px;
  font-family: ${fontFamily.regular};
  color: ${colors.white};
`;

export const MainContent = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.background};
  width: 100%;
  min-height: ${metrics.hp(80)}px;
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
