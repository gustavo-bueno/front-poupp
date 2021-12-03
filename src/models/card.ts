import { IAccount } from "./account";
import { IBank } from "./bank";
import { ITransaction } from "./transaction";

export interface ICard {
  _id: string;
  username: string;
  value: number;
  limit: number;
  closeDay: number;
  account: IAccount;
  bank: IBank;
  user: string;
  transactions: ITransaction[];
  __v: number;
}
