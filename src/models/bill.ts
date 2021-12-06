export interface IBill {
  title: string;
  remainingValue: number;
  interest: number;
  paidValue: number;
  dueDay: number;
  interestType: string;
}
