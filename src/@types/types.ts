export interface TransactionInterface {
  _id: string;
  title: string;
  value: number;
  description: string;
  category?: {
    _id: string;
    name: string;
    necessary?: number;
    __v: number;
  };
  account: string;
  user: string;
  transferAccount?: string;
  isCard: boolean;
  type: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface AccountInterface {
  _id: string;
  name: string;
  bank?: {
    _id: string;
    name: string;
    picture: string;
    __v: number;
  };
  transactions: TransactionInterface[];
  value: number;
  card?: string;
  type: string;
}
