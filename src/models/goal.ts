export interface IGoal {
  _id: number;
  totalValue: number;
  category: {
    _id: string;
    name: string;
    type: "car" | "house" | "travel" | "other";
    __v: number;
  };
  expirationDate: Date;
  user: string;
  title: string;
}
