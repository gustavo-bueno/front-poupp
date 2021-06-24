import Ripple from 'react-native-material-ripple';
import styled from 'styled-components/native';
import { Container } from '../../components/Container';
import { H2 } from '../../components/Text';
import { colors, metrics } from '../../styles';

export const InputContainer = styled.View`
  height: 30%;
  background-color: ${colors.green};
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding-left: ${metrics.base * 3}px;
  padding-right: ${metrics.base * 3}px;
  padding-bottom: ${metrics.base * 4}px;
`;

export const OptionContainer = styled.View<{ active: boolean }>`
  border-color: ${colors.green};
  padding-top: ${metrics.base}px;
  padding-bottom: ${metrics.base}px;
  border-bottom-width: ${(props) => (props.active ? 3 : 0)}px;
`;

export const OptionsContainer = styled.View`
  background-color: ${colors.white};
  border-radius: ${metrics.borderRadius}px;
  margin-top: ${metrics.base * 2}px;
  margin-bottom: ${metrics.base * 2}px;
  height: ${metrics.hp(7)}px;
  align-items: center;
`;

export const MovimentationInfosContainer = styled(Container)`
  width: 100%;
  height: 100%;
  border-top-right-radius: ${metrics.base * 8}px;
  border-top-left-radius: ${metrics.base * 8}px;
  background-color: ${colors.background};
  padding-top: ${metrics.base * 4}px;
  padding-bottom: ${metrics.hp(35)}px;
`;

export const SecondaryTitle = styled(H2).attrs({
  fontWeight: 'medium',
})`
  margin-top: ${metrics.base * 3}px;
  margin-bottom: ${metrics.base * 2}px;
`;

export const TextAreaInput = styled.TextInput.attrs({
  placeholder: 'Descrição',
  multiline: true,
  numberOfLines: 5,
})`
  background-color: ${colors.white};
  border-radius: ${metrics.borderRadius}px;
  align-items: flex-start;
  justify-content: flex-start;
  height: ${metrics.hp(10)}px;
  padding: ${metrics.base * 2}px;
`;

export const ProvisoryCollapsible = styled.View`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  background-color: ${colors.white};
  padding: ${metrics.base * 2}px;
  border-radius: ${metrics.borderRadius}px;
`;

export const ConfirmButton = styled(Ripple).attrs({
  rippleContainerBorderRadius: metrics.hp(10),
})`
  height: ${metrics.wp(20)}px;
  width: ${metrics.wp(20)}px;
  background-color: ${colors.green};
  border-radius: ${metrics.wp(10)}px;
  position: absolute;
  bottom: 10px;
  right: 10px;
  justify-content: center;
  align-items: center;
`;

export const CustomScrollView = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background: ${colors.green};
`;
