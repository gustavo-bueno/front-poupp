import styled from "styled-components/native";
import { colors, fontFamily, metrics } from "../../styles";
import Ripple from "react-native-material-ripple";

interface props {
  theme: {
    color: string;
  };
}

export const HomeContainer = styled.ScrollView`
  width: 100%;
  flex-direction: column;
  background: ${colors.green};
`;

export const HeaderContent = styled.View`
  width: 100%;
  padding: ${metrics.base * 3}px;
  height: ${metrics.hp(25)}px;
  margin-top: ${metrics.base * 2}px;
  display: flex;
  justify-content: space-evenly;
`;

export const TotalContent = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Total = styled.Text`
  font-size: ${metrics.base * 10}px;
  font-family: ${fontFamily.bold};
  color: #fff;
`;

export const TotalLabel = styled.Text`
  font-size: ${metrics.base * 4}px;
  font-family: ${fontFamily.regular};
  color: white;
`;

export const MainContent = styled.View`
  height: auto;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.background};
  border-top-right-radius: ${metrics.base * 12.5}px;
  border-top-left-radius: ${metrics.base * 12.5}px;
  margin-top: ${metrics.base * 10}px;
  padding-bottom: ${metrics.base * 5}px;
`;

export const ResumeContainer = styled.View`
  width: 90%;
  height: ${metrics.hp(8)}px;
  border-radius: ${metrics.base * 4}px;
  background-color: white;
  margin-top: ${metrics.base * 10}px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const Divider = styled.View`
  width: ${metrics.base * 0.25}px;
  background-color: ${colors.background};
  height: 100%;
`;

export const Resume = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ResumeIndicator = styled.View`
  width: ${metrics.base * 5}px;
  height: ${metrics.base * 5}px;
  border-radius: ${metrics.base * 2.5}px;
  background-color: ${(props: props) => props.theme.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: ${metrics.base * 3}px;
`;

export const ResumeContent = styled.View`
  display: flex;
  justify-content: center;
`;

export const ResumeValue = styled.Text`
  font-size: ${metrics.base * 4.5}px;
  font-family: ${fontFamily.medium};
  color: ${colors.text};
`;

export const ResumeType = styled.Text`
  font-size: ${metrics.base * 3.5}px;
  font-family: ${fontFamily.regular};
  color: ${colors.text};
`;

export const RecentsContainer = styled.View`
  margin-top: ${metrics.base * 5}px;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ChartContainer = styled.View`
  margin-top: ${metrics.base * 5}px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ChartTitle = styled.Text`
  margin-left: 18%;
  width: 100%;
  text-align: left;
  font-size: ${metrics.base * 5.5}px;
  font-family: ${fontFamily.medium};
  margin-bottom: ${metrics.base * 3}px;
  color: ${colors.text};
`;

export const RecentsTitle = styled.Text`
  margin-left: 8%;
  width: 100%;
  text-align: left;
  font-size: ${metrics.base * 5.5}px;
  font-family: ${fontFamily.medium};
  margin-bottom: ${metrics.base * 3}px;
  color: ${colors.text};
`;

export const SeeMoreButton = styled(Ripple)`
  padding: ${metrics.base * 2}px;
  background: transparent;
  margin-top: ${metrics.base * 1}px;
  border-radius: ${metrics.base * 4}px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SeeMoreText = styled.Text`
  font-size: ${metrics.base * 4}px;
  font-family: ${fontFamily.regular};
  color: ${colors.text};
`;

export const OptionsContainer = styled.View`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: ${metrics.base * 5}px;
`;

export const OptionsTitle = styled.Text`
  margin-left: 8%;
  width: 100%;
  text-align: left;
  font-size: ${metrics.base * 5.5}px;
  font-family: ${fontFamily.medium};
  margin-bottom: ${metrics.base * 3}px;
  color: ${colors.text};
`;

export const OptionsList = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const Chart = styled.View`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-left: ${metrics.base * -7}px;
`;

export const Labels = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const Label = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Marker = styled.View`
  width: ${metrics.base * 4}px;
  height: ${metrics.base * 4}px;
  margin-right: ${metrics.base * 2}px;
  margin-top: ${metrics.base * 1}px;
  border-radius: ${metrics.base * 2}px;
  background-color: ${(props: props) => props.theme.color};
`;

export const LabelText = styled.Text`
  font-size: ${metrics.base * 4}px;
  font-family: ${fontFamily.medium};
  color: ${colors.text};
`;
