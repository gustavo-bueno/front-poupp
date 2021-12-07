import { ITransaction } from "./transaction";
import { ICard } from "./card";
import { IBank } from "./bank";

export interface IAccount {
  _id: string;
  name: string;
  bank?: IBank;
  transactions: ITransaction[];
  value: number;
  card?: ICard;
  type: string;
}