import { StyleProp, TextInputProps, TextStyle } from 'react-native';

export interface IProps extends TextInputProps {
  name: string;
  style?: StyleProp<TextStyle>;
}
