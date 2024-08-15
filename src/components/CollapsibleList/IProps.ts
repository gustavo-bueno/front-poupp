import { StyleProp, ViewStyle } from 'react-native';

export interface IProps {
  collapsibleTitle: string;
  data: any[];
  itemProp?: string;
  style?: StyleProp<ViewStyle>;
  onPressItem: (item: any) => void | any;
}
