import Ripple from 'react-native-material-ripple';
import styled from 'styled-components/native';
import { colors, fontFamily, metrics } from '../../styles';

interface Props {
  theme: {
    type: 'top' | 'bottom' | 'normal';
  };
}

export const UserContainer = styled.SafeAreaView`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.green};
`;

export const HeaderContainer = styled.View`
  width: 100%;
  padding: ${metrics.base * 3}px;
  height: ${metrics.hp(30)}px;
  margin-top: ${metrics.base * 4}px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const UserBackground = styled.View`
  width: ${metrics.base * 30}px;
  height: ${metrics.base * 30}px;
  border-radius: ${metrics.base * 15}px;
  background-color: ${colors.darkBlue};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Username = styled.Text`
  font-size: ${metrics.base * 7}px;
  font-family: ${fontFamily.bold};
  color: ${colors.text};
`;

export const MainContent = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.background};
  height: ${metrics.hp(67)}px;
  width: 100%;
  border-top-right-radius: ${metrics.base * 12.5}px;
  border-top-left-radius: ${metrics.base * 12.5}px;
`;
export const ButtonsContainer = styled.View`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled(Ripple)`
  width: 100%;
  height: ${metrics.base * 12}px;
  border-bottom-width: 1px;
  border-bottom-color: ${colors.gray};
  background-color: transparent;
  ${(props: Props) =>
    props.theme.type == `top`
      ? `border-top-right-radius: ${metrics.base * 12.5}px; 
        border-top-left-radius: ${metrics.base * 12.5}px;`
      : props.theme.type == `bottom`
      ? `border-top-width: 1px; 
        border-top-color: ${colors.gray}; 
        border-bottom-width: 0px;
        height: ${metrics.base * 15}px;`
      : ''};
  display: flex;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-size: ${metrics.base * 5}px;
  font-family: ${fontFamily.regular};
  color: ${colors.text};
  margin-left: ${metrics.base * 15}px;
`;
