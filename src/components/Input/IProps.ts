import { StyleProp, TextInputProps, TextStyle } from 'react-native';
import {
  TextInputMaskOptionProp,
  TextInputMaskTypeProp,
} from 'react-native-masked-text';

export interface IProps extends TextInputProps {
  name: string;
  mask?: boolean;
  style?: StyleProp<TextStyle>;
  options?: TextInputMaskOptionProp;
  type?: TextInputMaskTypeProp;
}
