export interface IGoal {
  id: number;
  goalValue: number;
  achieved: number;
  type: 'car' | 'house' | 'travel' | 'other';
  title: string;
  image?: any;
}
