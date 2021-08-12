import styled from 'styled-components/native';
import { colors, fontFamily, metrics } from '../../styles';

export const CardContainer = styled.View`
  width: ${metrics.wp(80)}px;
  height: ${metrics.hp(27)}px;
  background-color: ${colors.lightBlue};
  border-radius: ${metrics.base * 5}px;
`;

export const BlackBar = styled.View`
  width: 100%;
  height: ${metrics.hp(5)}px;
  margin-top: ${metrics.hp(5)}px;
  background-color: ${colors.darkBlue};
`;

export const CardContent = styled.View`
  width: 100%;
  display: flex;
  align-items: center;
  height: ${metrics.hp(15.5)}px;
  justify-content: space-around;
`;

export const WhiteBar = styled.View`
  width: 80%;
  height: ${metrics.hp(1.5)}px;
  background-color: ${colors.background};
`;

export const Infos = styled.View`
  width: 90%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const UserContent = styled.View`
  display: flex;
  justify-content: center;
`;

export const Ball = styled.View`
  width: ${metrics.base * 13}px;
  height: ${metrics.base * 13}px;
  border-radius: ${metrics.base * 6.5}px;
  background-color: ${colors.blue};
  margin-bottom: ${metrics.base * 2}px;
  margin-left: ${metrics.base * 2}px;
`;

export const Username = styled.Text`
  font-size: ${metrics.base * 4}px;
  color: ${colors.white};
  font-family: ${fontFamily.regular};
`;

export const BalanceContent = styled.View`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const BalanceText = styled.Text`
  font-size: ${metrics.base * 4}px;
  color: ${colors.white};
  font-family: ${fontFamily.medium};
  text-align: center;
`;

export const Date = styled.Text`
  font-size: ${metrics.base * 4}px;
  color: ${colors.white};
  font-family: ${fontFamily.regular};
  margin-bottom: ${metrics.base * 4}px;
`;
