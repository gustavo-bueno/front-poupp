import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { colors } from '../../styles';

export const Container = styled.View`
  flex: 1;
  position: relative;
  background-color: ${colors.green};
`;

export const styles = StyleSheet.create({
  svg: { position: 'absolute', bottom: 5, right: -30 },
});
