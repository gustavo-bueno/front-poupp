import {
  TextInputMaskProps,
  TextInputMaskTypeProp,
} from 'react-native-masked-text';

export interface IProps extends TextInputMaskProps {
  type: TextInputMaskTypeProp;
  name: string;
}
