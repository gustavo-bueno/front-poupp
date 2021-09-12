export interface IProps {
  collapsibleTitle: string;
  data: any[];
  itemProp?: string;
  onPressItem: (item: any) => void | any;
}
