import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { metrics } from '../../styles';

interface CardContainerProps {
  color: string;
}

export const CardContainer = styled.View<CardContainerProps>`
  width: ${metrics.wp(90)}px;
  height: ${metrics.hp(26)}px;

  padding: 0 ${metrics.base * 2}px;

  position: relative;

  border-radius: ${metrics.borderRadius * 2}px;

  background-color: ${(props) => props.color};

  justify-content: flex-start;
`;

export const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    width: '100%',
    height: metrics.hp(26),
    borderTopLeftRadius: metrics.base * 5,
    borderBottomLeftRadius: metrics.base * 5,
  },
});
