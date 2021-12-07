import { IExtraIncomeGoalsCategory } from "./extraIncomeGoalsCategory";

export interface IExtraIncomeGoal {
  _id: string;
  title: string;
  user: string;
  totalValue: number;
  reachedValue: number;
  category: IExtraIncomeGoalsCategory;
  createdAt: Date;
  updatedAt: Date;
}
