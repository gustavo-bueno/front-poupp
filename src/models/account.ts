import { ITransaction } from "./transaction";

export interface IAccount {
  _id: string;
  name: string;
  bank?: {
    _id: string;
    name: string;
    picture: string;
    __v: number;
  };
  transactions: ITransaction[];
  value: number;
  card?: string;
  type: string;
}