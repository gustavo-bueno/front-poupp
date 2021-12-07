import React, { useRef, useState, useEffect } from "react";
import { Form } from "@unform/mobile";
import { FormHandles } from "@unform/core";
import * as Yup from "yup";

import Input from "../../components/Input";
import Button from "../../components/Button";
import { BorderRadiusContainer } from "../../components/Container";
import CollapsibleList from "../../components/CollapsibleList";
import axiosApi from "../../services/apiRequest";
import axios, { AxiosResponse } from "axios";
import { useNavigation } from "@react-navigation/native";
import { ROUTES } from "../../constants/routes";
import { IAccount } from "../../models/account";
import useUserData from "../../hooks/useUserData";
import { SmallInputContainer, SmallInputsContainer } from "./styles";
import { H3 } from "../../components/Text";
import { metrics } from "../../styles";

const schema = Yup.object().shape({
  username: Yup.string().required("O campo nome do titular é obrigatório"),
  closeDay: Yup.number()
    .min(1, "Digite um valor entre 1 e 31")
    .max(31, "Digite um valor entre 1 e 31")
    .required("O campo dia de vencimento é obrigatório."),
  limit: Yup.number().required("O campo limite do cartão é obrigatório."),
});

const AddCreditCardScreen: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [accounts, setAccounts] = useState<IAccount[]>([]);
  const [account, setAccount] = useState<IAccount>();

  const { user, refreshData } = useUserData();

  const { navigate } = useNavigation();

  useEffect(() => {
    const options = {
      headers: { authorization: `Bearer ${user.token}` },
    };

    axiosApi
      .get("/accounts", options)
      .then((response: AxiosResponse) => {
        if (response.status === 200) {
          const accountsList = response.data;

          setAccounts(
            accountsList.filter(
              (account: IAccount) => account.type === "normal" && !account.card
            )
          );
        }
      })
      .catch((err) => console.log(err.message));
  }, []);

  const handleSubmit = async ({
    closeDay,
    username,
    limit,
  }: {
    closeDay: number;
    username: string;
    limit: number;
  }) => {
    try {
      await schema.validate(
        { closeDay, username, limit },
        {
          abortEarly: false,
        }
      );
      if (account) {
        const cardData = {
          username,
          limit,
          closeDay,
          accountId: account._id,
        };

        const options = {
          headers: { authorization: `Bearer ${user.token}` },
        };

        axiosApi.post("/cards/create", cardData, options).then((response: AxiosResponse) => {
          if(response.status === 201) {
            refreshData()
            navigate(ROUTES.CARD_LIST)
          }
        }).catch((err) => console.log(err.message))
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
        <Input name="username" placeholder="Nome do titular" />
        <H3 style={{ marginBottom: metrics.base * 2 }} fontWeight="medium">
          Conta relacionada:
        </H3>
        <CollapsibleList
          data={accounts}
          collapsibleTitle={account ? account.name : ""}
          onPressItem={(accountSelected) => setAccount(accountSelected)}
        />
        <SmallInputsContainer>
          <SmallInputContainer>
            <Input
              placeholder="Dia do vencimento"
              keyboardType="numeric"
              name="closeDay"
            />
          </SmallInputContainer>
          <SmallInputContainer>
            <Input
              placeholder="Limite do cartão"
              type="money"
              mask
              keyboardType="numeric"
              name="limit"
            />
          </SmallInputContainer>
        </SmallInputsContainer>
      </Form>
      <Button
        style={{ marginTop: metrics.base * 2 }}
        title="Adicionar cartão"
        onPress={() => formRef.current?.submitForm()}
      />
    </BorderRadiusContainer>
  );
};

export default AddCreditCardScreen;
