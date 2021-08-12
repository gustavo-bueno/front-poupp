import { ViewProps } from 'react-native';

export interface IProps extends ViewProps {
  image: string;
  title?: string;
  content?: JSX.Element;
}
