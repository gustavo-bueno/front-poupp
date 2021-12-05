import { LoadingContainer } from "./styles";
import { ActivityIndicator } from "react-native";
import { colors, metrics } from "../../styles/index";
import React from "react";

export const Loading = () => {
  return (
    <LoadingContainer>
      <ActivityIndicator color={colors.green} size={metrics.base * 20} />
    </LoadingContainer>
  );
};
