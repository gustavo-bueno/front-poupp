import { FlatListProps } from 'react-native';
import { ICategory } from '../../models/category.model';

export interface IProps
  extends Omit<FlatListProps<ICategory>, 'renderItem' | 'data'> {}
