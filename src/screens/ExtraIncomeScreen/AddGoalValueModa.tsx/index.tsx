import React, { useRef } from "react";
import { Modal, ModalProps, View } from "react-native";
import { Form } from "@unform/mobile";
import Ripple from "react-native-material-ripple";
import { FormHandles } from "@unform/core";

import { Ionicons } from "@expo/vector-icons";

import { H1, H2, H3 } from "../../../components/Text";
import {
  ModalContainer,
  ModalContent,
  TitleContainer,
} from "../AddExtraIncomeGoalModal/styles";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { metrics } from "../../../styles";
import { ProgressBar } from "../../../components/ProgressBar";
import { IExtraIncomeGoal } from "../../../models/extraIncomeGoal";
import NumberToMoney from "../../../functions/NumberToMoney";
import useUserData from "../../../hooks/useUserData";
import apiRequest from "../../../services/apiRequest";
import { AxiosResponse } from "axios";

interface AddValueGoalModalProps extends ModalProps {
  extraIncome: IExtraIncomeGoal;
}

const AddValueGoalModal: React.FC<AddValueGoalModalProps> = ({
  onRequestClose,
  visible,
  extraIncome,
  ...rest
}) => {
  const formRef = useRef<FormHandles>(null);
  const { user, refreshData } = useUserData();

  const handleSubmit = async ({ value }: { value: number }) => {
    if (value !== 0 || value !== undefined) {
      const options = {
        headers: { authorization: `Bearer ${user.token}` },
        params: { extraIncomeGoalId: extraIncome._id },
      };

      const data = {
        value,
      };

      apiRequest
        .put("/extraincomegoals/income", data, options)
        .then((response: AxiosResponse) => {
          if (response.status === 200) {
            refreshData();
            if(onRequestClose) {
              onRequestClose()
            }
          }
        });
    }
  };

  const percentage = extraIncome.reachedValue / extraIncome.totalValue;

  return (
    <Modal animationType="fade" transparent visible={visible} {...rest}>
      <ModalContainer>
        <ModalContent>
          <TitleContainer>
            <H1>Adicionar valor</H1>
            <Ripple onPress={onRequestClose}>
              <Ionicons name="close" size={24} color="black" />
            </Ripple>
          </TitleContainer>
          <H2 style={{ marginVertical: metrics.base }} fontWeight="medium">
            Informações sobre a meta
          </H2>
          <H1>R$ {NumberToMoney(extraIncome.totalValue)}</H1>
          <ProgressBar progress={percentage} />
          <View
            style={{
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection: "row",
              marginBottom: metrics.base * 2,
            }}
          >
            <H3 color="text">
              <H2>R$ {NumberToMoney(extraIncome.reachedValue)}</H2>
              {" arrecadado"}
            </H3>
            <H2 color="text">{Math.ceil(percentage * 100)}% concluído</H2>
          </View>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <H3>Novo valor</H3>
            <Input mask name="value" type="money" />
            <Button
              style={{ marginTop: metrics.base * 4 }}
              title="Adicionar"
              onPress={() => formRef.current?.submitForm()}
            />
          </Form>
        </ModalContent>
      </ModalContainer>
    </Modal>
  );
};

export default AddValueGoalModal;
