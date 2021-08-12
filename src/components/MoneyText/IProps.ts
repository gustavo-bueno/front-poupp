import { TextProps, TextStyle } from 'react-native';

export interface IProps extends TextProps {
  value: number;
  fontSize: 'h0' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
  style?: TextStyle;
  bold?: boolean;
}
