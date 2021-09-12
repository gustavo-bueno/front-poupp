import React, { useRef, useState } from 'react';
import { Form } from '@unform/mobile';
import DateTimePicker from '@react-native-community/datetimepicker';
import dayjs from 'dayjs';
import * as Yup from 'yup';

import { FormHandles } from '@unform/core';
import { MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';

import { BorderRadiusContainer } from '../../components/Container';
import { IGoal } from '../../models/goal.model';
import Input from '../../components/Input';
import CollapsibleList from '../../components/CollapsibleList';
import { H3 } from '../../components/Text';
import Button from '../../components/Button';

import { colors, metrics } from '../../styles';
import { AddCardLabel, DateContainer } from './styles';
import Ripple from 'react-native-material-ripple';

const categories = [
  { name: 'car', pt: 'Carro' },
  { name: 'house', pt: 'Casa' },
  { name: 'travel', pt: 'Viagem' },
  { name: 'other', pt: 'Outro' },
];

const schema = Yup.object().shape({
  title: Yup.string().required('O título da meta é obrigatório.'),
  totalValue: Yup.number().required('O valor da meta é obrigatório.'),
});

const AddGoalScreen: React.FC = () => {
  const [categoryType, setCategoryType] = useState({
    name: 'car',
    pt: 'Carro',
  });
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = async (data: IGoal) => {
    try {
      await schema.validate(data, {
        abortEarly: false,
      });
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
          data={categories}
          itemProp="pt"
          collapsibleTitle={categoryType.pt}
          onPressItem={(item) => setCategoryType(item)}
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
            {dayjs(date).format('DD/MM/YYYY')}
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
