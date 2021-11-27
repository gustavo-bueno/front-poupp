import { StackHeaderProps } from '@react-navigation/stack';
import { StyleProp, TextStyle } from 'react-native';

export interface IProps extends StackHeaderProps {
  title?: string;
  subtitle?: string;
  backButton?: boolean;
  titleStyle?: StyleProp<TextStyle>;
}
