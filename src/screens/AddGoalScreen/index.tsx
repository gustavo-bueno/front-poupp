import React, { useRef, useState, useEffect } from "react";
import { Form } from "@unform/mobile";
import DateTimePicker from "@react-native-community/datetimepicker";
import dayjs from "dayjs";
import * as Yup from "yup";

import { FormHandles } from "@unform/core";
import { MaterialCommunityIcons, SimpleLineIcons } from "@expo/vector-icons";

import { BorderRadiusContainer } from "../../components/Container";
import Input from "../../components/Input";
import CollapsibleList from "../../components/CollapsibleList";
import { H3 } from "../../components/Text";
import Button from "../../components/Button";
import axiosApi from "../../services/apiRequest";
import { AxiosResponse } from "axios";
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../../constants/routes';
import { colors, metrics } from "../../styles";
import { AddCardLabel, DateContainer } from "./styles";
import Ripple from "react-native-material-ripple";
import { IGoalCategory } from "../../models/goalCategory";
import useUserData from "../../hooks/useUserData";

const schema = Yup.object().shape({
  title: Yup.string().required("O título da meta é obrigatório."),
  totalValue: Yup.number().required("O valor da meta é obrigatório."),
});

const AddGoalScreen: React.FC = () => {
  const [goalCategories, setGoalCategories] = useState<IGoalCategory[]>([]);
  const [category, setCategory] = useState<IGoalCategory>();
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const formRef = useRef<FormHandles>(null);

  const { navigate } = useNavigation()
  const { user, refreshData } = useUserData();

  useEffect(() => {
    const options = {
      headers: { authorization: `Bearer ${user.token}` },
    };

    axiosApi
      .get("/goalscategories", options)
      .then((response: AxiosResponse) => {
        if (response.status === 200) {
          setGoalCategories(response.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSubmit = async ({
    totalValue,
    title,
  }: {
    title: string;
    totalValue: number;
  }) => {
    try {
      await schema.validate(
        { totalValue, title },
        {
          abortEarly: false,
        }
      );
      if (category && date) {
        const goalData = {
          totalValue,
          title,
          goalCategoryId: category._id,
          expirationDate: date.getTime(),
        };

        const options = {
          headers: { authorization: `Bearer ${user.token}` },
        };

        axiosApi
          .post("/goals/create", goalData, options)
          .then((response: AxiosResponse) => {
            if (response.status === 201) {
              refreshData()
              navigate(ROUTES.GOALS_LIST)
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
        <Input name="title" placeholder="Título da meta" />
        <AddCardLabel>Tipo da meta</AddCardLabel>
        <CollapsibleList
          data={goalCategories}
          collapsibleTitle={category ? category.name : ""}
          onPressItem={(item) => setCategory(item)}
        />
        <Input
          keyboardType="numeric"
          name="totalValue"
          placeholder="Valor total da meta"
          mask
          type="money"
        />
        <AddCardLabel>Data prevista para o fim da meta</AddCardLabel>
        <DateContainer>
          <MaterialCommunityIcons
            name="calendar-clock"
            size={24}
            color={colors.darkBlue}
          />
          <H3 style={{ marginHorizontal: metrics.base * 2 }}>
            {dayjs(date).format("DD/MM/YYYY")}
          </H3>
          <Ripple onPress={() => setShow(true)}>
            <SimpleLineIcons name="pencil" size={18} color={colors.lightBlue} />
          </Ripple>
        </DateContainer>
        {show && (
          <DateTimePicker
            onTouchEnd={() => setShow(false)}
            onChange={(_, goalDate) => {
              setDate(goalDate ?? date);
              setShow(false);
            }}
            value={date}
            testID="dateTimePicker"
            mode="date"
            display="calendar"
          />
        )}
      </Form>
      <Button
        style={{ marginTop: metrics.base * 2 }}
        title="Adicionar meta"
        onPress={() => formRef.current?.submitForm()}
      />
    </BorderRadiusContainer>
  );
};

export default AddGoalScreen;
