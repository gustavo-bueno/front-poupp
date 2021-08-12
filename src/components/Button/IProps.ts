import { ReactNode } from 'react';
import { StyleProp, TextStyle } from 'react-native';
import { RippleProps } from 'react-native-material-ripple';

export interface IProps extends RippleProps {
  titleStyle?: StyleProp<TextStyle>;
  title?: string;
  titleWeight?: 'bold' | 'medium';
  type?: 'outline' | 'primary' | 'link' | 'rounded';
  children?: ReactNode;
}
