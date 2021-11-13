import Ripple from 'react-native-material-ripple';
import styled from 'styled-components/native';
import { colors, metrics } from '../../../styles';

export const TitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ModalContent = styled.View`
  width: ${metrics.wp(92)}px;
  height: ${metrics.hp(60)}px;
  border-radius: ${metrics.borderRadius}px;

  padding: ${metrics.base * 4}px;

  background-color: ${colors.white};
`;

export const ModalContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  background-color: rgba(0, 0, 0, 0.3);
`;

export const SheetButton = styled(Ripple)`
  height: ${metrics.hp(10)}px;

  align-items: center;
  justify-content: center;

  border: 0px solid ${colors.gray};
  border-bottom-width: 1px;
  border-top-width: 1px;
`;

export const SheetContainer = styled.View`
  padding-top: ${metrics.base * 4}px;
  border-radius: ${metrics.borderRadius}px;
`;
