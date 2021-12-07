import { IGoalCategory } from "./goalCategory";

export interface IGoal {
  _id: number;
  totalValue: number;
  category: IGoalCategory;
  expirationDate: Date;
  user: string;
  title: string;
}
