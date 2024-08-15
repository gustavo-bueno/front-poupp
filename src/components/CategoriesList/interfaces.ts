import { FlatListProps } from 'react-native';
import { ICategory } from '../../models/category';

export interface IProps extends Omit<FlatListProps<ICategory>, 'renderItem'> {
  income: boolean;
  onSelect: (id: string) => void;
}
