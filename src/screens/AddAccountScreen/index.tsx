import React, { useRef, useState, useEffect } from "react";
import { Form } from "@unform/mobile";
import * as Yup from "yup";

import { FormHandles } from "@unform/core";

import { BorderRadiusContainer } from "../../components/Container";
import Input from "../../components/Input";
import CollapsibleList from "../../components/CollapsibleList";
import Button from "../../components/Button";
import axiosApi from "../../services/apiRequest";
import { AxiosResponse } from "axios";
import { useNavigation } from "@react-navigation/native";
import { ROUTES } from "../../constants/routes";
import { metrics } from "../../styles";
import { AddAccountLabel } from "./styles";
import { IBank } from "../../models/bank";
import useUserData from "../../hooks/useUserData";

const schema = Yup.object().shape({
  name: Yup.string().required("O nome da conta é obrigatório."),
  number: Yup.number(),
});

const AddAccountScreen: React.FC = () => {
  const [banks, setBanks] = useState<IBank[]>([]);
  const [bank, setBank] = useState<IBank>();
  const formRef = useRef<FormHandles>(null);

  const { navigate } = useNavigation();
  const { user, refreshData } = useUserData();

  useEffect(() => {
    const options = {
      headers: { authorization: `Bearer ${user.token}` },
    };

    axiosApi
      .get("/banks", options)
      .then((response: AxiosResponse) => {
        if (response.status === 200) {
          setBanks(response.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSubmit = async ({
    name,
    value = 0,
  }: {
    name: string;
    value: number;
  }) => {
    try {
      await schema.validate(
        { name, value },
        {
          abortEarly: false,
        }
      );
      if (bank) {
        const accountData = {
          name,
          value,
          bank: bank._id,
        };

        const options = {
          headers: { authorization: `Bearer ${user.token}` },
        };

        axiosApi
          .post("/accounts/create", accountData, options)
          .then((response: AxiosResponse) => {
            if (response.status === 201) {
              refreshData();
              navigate(ROUTES.ACCOUNT_LIST);
            }
          })
          .catch((err) => console.log(err.message));
      }
    } catch (error) {
      const validationErrors: Record<string, any> = {};
      if (error instanceof Yup.ValidationError) {
        error.inner.forEach((error) => {
          validationErrors[error.path!] = error.message;
        });
        formRef.current?.setErrors(validationErrors);
      }
    }
  };

  return (
    <BorderRadiusContainer>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome da conta" />
        <AddAccountLabel>Banco da conta</AddAccountLabel>
        <CollapsibleList
          data={banks}
          collapsibleTitle={bank ? bank.name : ""}
          onPressItem={(item) => setBank(item)}
        />
        <Input
          keyboardType="numeric"
          name="value"
          placeholder="Saldo da conta"
          mask
          type="money"
        />
      </Form>
      <Button
        style={{ marginTop: metrics.base * 2 }}
        title="Adicionar conta"
        onPress={() => formRef.current?.submitForm()}
      />
    </BorderRadiusContainer>
  );
};

export default AddAccountScreen;
