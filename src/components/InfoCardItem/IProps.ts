import { ReactNode } from 'react';

export interface IProps {
  title: string;
  price: number;
  bottomInfo?: ReactNode;
  image: any;
}
