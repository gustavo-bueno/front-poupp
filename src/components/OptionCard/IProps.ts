import { RippleProps } from 'react-native-material-ripple';

export interface IProps extends RippleProps {
  title: string;
  icon: JSX.Element;
  route: string;
}
