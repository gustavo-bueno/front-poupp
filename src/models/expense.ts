export interface IExpense {
  value: number;
  expense: { _id: string; category: string; maxValue: number };
}
