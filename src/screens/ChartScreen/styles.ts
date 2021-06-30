import styled from 'styled-components/native'
import { colors, fontFamily, metrics } from '../../styles';
import Ripple from 'react-native-material-ripple';

interface props {
  theme: {
    color: string;
  };
}

export const ChartsContainer = styled.ScrollView`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: ${colors.green};
`;

export const Header = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${metrics.base * 3}px;
  margin-top: ${metrics.base * 2}px;
`

export const Title = styled.Text`
  color: ${colors.white};
  font-family: ${fontFamily.medium};
  font-size: ${metrics.base * 6}px;
  margin-top: ${metrics.base * 2}px;
`

export const BalanceContainer = styled.View`
  margin-top: ${metrics.hp(3)}px;
  margin-bottom: ${metrics.hp(3)}px;
`

export const Total = styled.Text`
  font-size: ${metrics.base * 10}px;
  font-family: ${fontFamily.bold};
  color: #fff;
  margin-bottom: ${metrics.base / 2}px;
`

export const Label = styled.Text`
  font-size: ${metrics.base * 4}px;
  font-family: ${fontFamily.regular};
  color: white;
`

export const MainContent = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${colors.background};
  width: 100%;
  border-top-right-radius: ${metrics.base * 12.5}px;
  border-top-left-radius: ${metrics.base * 12.5}px;
  padding-top: ${metrics.base * 7.5}px;
  padding-bottom: ${metrics.base * 5}px;
`

export const TabsContainer = styled.View`
  width: 90%;
  height: ${metrics.hp(8)}px;
  background: white;
  border-radius: ${metrics.base * 4}px;
  display: flex;
  flex-direction: row;
`

export const Tab = styled(Ripple).attrs({
  rippleContainerBorderRadius: metrics.base * 4
})`
  flex: 1;
  background: transparent;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export const TabText = styled.Text`
  color: ${colors.text};
  font-family: ${fontFamily.medium};
  font-size: ${metrics.base * 5}px;
  margin-top: ${metrics.hp(2)}px;
`

export const TabIndicatior = styled.View`
  background-color: ${(props: props) => props.theme.color};
  border-top-right-radius: ${metrics.base * 2}px;
  width: 70%;
  height: ${metrics.base * 1}px;
  border-top-left-radius: ${metrics.base * 2}px;
`

export const FilterContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  margin-top: ${metrics.base * 4}px;
  margin-bottom: ${metrics.base * 2}px;
`

export const TotalFiltred = styled.Text`
  color: ${colors.text};
  font-family: ${fontFamily.medium};
  font-size: ${metrics.base * 5}px;
`

export const ColapsableList = styled.TextInput`
  width: ${metrics.base * 35}px;
  height: ${metrics.hp(5)}px;
  background-color: ${colors.white};
  border-radius: ${metrics.base * 3}px;
`

export const CategoriesList = styled.View`
  display: flex;
  flex-direction: column;
  gap: ${metrics.base * 2}px;
  width: 90%;
`

export const CategoriesTitle = styled.Text`
  color: ${colors.text};
  font-family: ${fontFamily.medium};
  font-size: ${metrics.base * 5}px;
`