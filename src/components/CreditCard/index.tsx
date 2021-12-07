import React from "react";

import { CardContainer, styles } from "./styles";

import Poupp from "../../../assets/images/poupp.svg";
import { IProps } from "./IProps";
import { LinearGradient } from "expo-linear-gradient";
import { SpaceBetweenContainer } from "../Container";
import { H0, H1, H4, H5 } from "../Text";
import { View } from "react-native";
import NumberToMoney from "../../functions/NumberToMoney";

const CreditCard: React.FC<IProps> = ({
  username,
  balance,
  day,
  bank,
  limit
}: IProps) => {
  const stringDay = String(day).padStart(2, "0");
  return (
    <CardContainer color="#234873">
      <LinearGradient
        start={[0, 0]}
        end={[1, 0]}
        style={styles.background}
        colors={["#5486BF", "#234873"]}
      />
      <SpaceBetweenContainer flexDirection="column">
        <SpaceBetweenContainer style={{ width: "100%" }}>
          <Poupp />
          <H1 color="white" fontWeight="medium">
            {bank}
          </H1>
        </SpaceBetweenContainer>
        <H0 fontWeight="medium" style={{ color: "white", alignSelf: "flex-start" }}>
          R$ {NumberToMoney(balance)}
        </H0>
        <SpaceBetweenContainer>
          <View>
            <H5 color="white">NOME DO TITULAR</H5>
            <H4 color="white">{username}</H4>
          </View>
          <View>
            <H5 color="white">LIMITE</H5>
            <H4 color="white">R$ {NumberToMoney(limit)}</H4>
          </View>
          <View>
            <H5 color="white">FECHAMENTO DA FATURA</H5>
            <H4 color="white">{stringDay}/mês</H4>
          </View>
        </SpaceBetweenContainer>
      </SpaceBetweenContainer>
    </CardContainer>
  );
};

export default CreditCard;
