import React from "react";
import { colors } from "../../styles";
import { IProps } from "./IProps";

import NumberToMoney from "../../functions/NumberToMoney";

import {
  CardConatiner,
  TitleContainer,
  Title,
  ValueContainer,
  ValueDescription,
  Value,
} from "./styles";
import { Colors } from "react-native/Libraries/NewAppScreen";

const MovementCard = ({ isCard = false, title, value, type }: IProps) => {
  return (
    <CardConatiner>
      <TitleContainer>
        <Title>{title}</Title>
      </TitleContainer>
      <ValueContainer>
        <ValueDescription
          theme={{
            color:
              type === "income"
                ? colors.green
                : type === "outcome"
                ? isCard
                  ? colors.orange
                  : colors.red
                : colors.lightBlue,
          }}
        >
          {type === "income"
            ? "+R$"
            : type === "outcome"
            ? isCard
              ? "R$"
              : "-R$"
            : "R$"}
        </ValueDescription>
        <Value>{NumberToMoney(value)}</Value>
      </ValueContainer>
    </CardConatiner>
  );
};

export default MovementCard;
