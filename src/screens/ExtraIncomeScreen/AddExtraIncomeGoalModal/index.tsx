import React, { useState, useRef, useEffect } from "react";
import { Modal, ModalProps } from "react-native";
import { Form } from "@unform/mobile";
import Ripple from "react-native-material-ripple";
import { FormHandles } from "@unform/core";

import { Ionicons } from "@expo/vector-icons";

import { H1, H3 } from "../../../components/Text";
import { ModalContainer, ModalContent, TitleContainer } from "./styles";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import CollapsibleList from "../../../components/CollapsibleList";
import { colors, metrics } from "../../../styles";
import apiRequest from "../../../services/apiRequest";
import { AxiosResponse } from "axios";
import { IExtraIncomeGoalsCategory } from "../../../models/extraIncomeGoalsCategory";
import useUserData from "../../../hooks/useUserData";

const AddExtraIncomeGoalModal: React.FC<ModalProps> = ({
  onRequestClose,
  visible,
  ...rest
}) => {
  const formRef = useRef<FormHandles>(null);
  const [categories, setCategories] = useState<IExtraIncomeGoalsCategory[]>([]);
  const [category, setCategory] = useState<IExtraIncomeGoalsCategory>();

  const { user, refreshData } = useUserData();

  useEffect(() => {
    const options = {
      headers: { authorization: `Bearer ${user.token}` },
    };

    apiRequest
      .get("/extraincomecategories", options)
      .then((response: AxiosResponse) => {
        if (response.status === 200) {
          setCategories(response.data);
          setCategory(response.data[0]);
        }
      });
  }, []);

  const handleSubmit = async ({
    title,
    totalValue,
  }: {
    title: string;
    totalValue: number;
  }) => {
    if (title && totalValue && category) {
      const data = {
        title,
        totalValue,
        extraIncomeCategory: category._id,
      };

      const options = {
        headers: { authorization: `Bearer ${user.token}` },
      };

      apiRequest
        .post("/extraincomegoals/create", data, options)
        .then((response: AxiosResponse) => {
          if (response.status === 201) {
            refreshData();
            if (onRequestClose) {
              onRequestClose();
            }
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <Modal animationType="fade" transparent visible={visible} {...rest}>
      <ModalContainer>
        <ModalContent>
          <TitleContainer>
            <H1>Adicionar meta</H1>
            <Ripple onPress={onRequestClose}>
              <Ionicons name="close" size={24} color="black" />
            </Ripple>
          </TitleContainer>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input name="title" placeholder="Título" />
            <H3>Tipo da meta</H3>
            <CollapsibleList
              style={{
                marginVertical: metrics.base * 2,
                borderColor: colors.gray,
                borderWidth: 1,
                borderRadius: 8,
              }}
              collapsibleTitle={category?.name || ""}
              data={categories}
              onPressItem={(item) => setCategory(item)}
            />
            <H3>Valor</H3>
            <Input mask name="totalValue" type="money" />
            <Button
              style={{ marginTop: metrics.base * 4 }}
              title="Adicionar meta"
              onPress={() => formRef.current?.submitForm()}
            />
          </Form>
        </ModalContent>
      </ModalContainer>
    </Modal>
  );
};

export default AddExtraIncomeGoalModal;
