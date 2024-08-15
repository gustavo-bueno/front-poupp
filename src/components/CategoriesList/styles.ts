import Ripple from 'react-native-material-ripple';
import styled from 'styled-components/native';
import { metrics, colors } from '../../styles';

export const CategoryIconContainer = styled.View<{ color: string }>`
  background-color: ${(props) => props.color};
  border-radius: ${metrics.borderRadius / 2}px;
  height: ${metrics.wp(15)}px;
  width: ${metrics.wp(15)}px;
  justify-content: center;
  align-items: center;
`;

export const CategoryItemContainer = styled(Ripple)<{ active: boolean }>`
  padding: ${metrics.base / 4}px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.active ? '#D9D7D7' : colors.background};
  border-radius: ${metrics.borderRadius / 2}px;
`;
