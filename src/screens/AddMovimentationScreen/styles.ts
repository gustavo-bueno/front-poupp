import Ripple from 'react-native-material-ripple';
import styled from 'styled-components/native';
import { Container as UnstyledContainer } from '../../components/Container';
import { H2 } from '../../components/Text';
import { colors, metrics } from '../../styles';

export const InputContainer = styled.View`
  height: 30%;
  background-color: ${colors.green};
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  padding-left: ${metrics.base * 3}px;
  padding-right: ${metrics.base * 3}px;
  padding-bottom: ${metrics.base * 4}px;
`;

export const MovimentationInfosContainer = styled(UnstyledContainer)`
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

export const Container = styled.SafeAreaView`
  height: 100%;
  width: 100%;
  position: relative;

  background: ${colors.background};
`;

export const FrequencyButton = styled(Ripple).attrs({
  rippleContainerBorderRadius: metrics.borderRadius / 2,
})`
  width: ${metrics.wp(13)}px;
  height: ${metrics.wp(13)}px;

  border: 1px solid ${colors.gray};

  justify-content: center;
  align-items: center;

  border-radius: ${metrics.borderRadius / 2}px;

  background-color: ${colors.white};
`;

export const FrequencyContainer = styled.View`
  width: ${metrics.wp(13)}px;
  height: ${metrics.wp(13)}px;

  border: 1px solid ${colors.gray};

  justify-content: center;
  align-items: center;

  border-radius: ${metrics.borderRadius / 2}px;

  background-color: ${colors.white};
`;

export const TransactionTypeContainer = styled.View`
  background-color: ${colors.background};
`;
