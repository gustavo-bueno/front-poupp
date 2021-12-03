export interface ITransaction {
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
