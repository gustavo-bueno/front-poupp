import { ITransactionCategory } from "./transactionCategory";

export interface ITransaction {
  _id: string;
  title: string;
  value: number;
  description: string;
  category?: ITransactionCategory;
  account: string;
  user: string;
  transferAccount?: string;
  isCard: boolean;
  type: "transfer" | "outcome" | "income";
  createdAt: Date;
  updatedAt: Date;
}
