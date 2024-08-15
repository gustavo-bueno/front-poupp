export interface IProps {
    title: string,
    value: number,
    type: "transfer" | "income" | "outcome",
    isCard?: boolean;
}