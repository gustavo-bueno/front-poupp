import React, { useRef } from 'react';
import { View } from 'react-native';
import { Form } from '@unform/mobile';
import * as Yup from 'yup';

import { FormHandles } from '@unform/core';

import Input from '../../components/Input';
import { H1, H2, H3 } from '../../components/Text';
import Button from '../../components/Button';

const SetIncomeScreen: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = async (data: { income: number }) => {
    const schema = Yup.object().shape({
      income: Yup.number().required('O valor total de entradas é obrigatório.'),
    });

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
    <View>
      <H1 fontWeight="bold">Olá! Seja bem vind@ ao poupp!</H1>
      <H3>
        Para começarmos nos planejar, diz aí pra gente, qual o valor total de
        entradas no seu mês?
      </H3>
      <H2 fontWeight="medium">Qual o total de dinheiro que entra por mês?</H2>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input mask type="money" name="income" />
      </Form>
      <Button title="Pronto!" onPress={() => formRef.current?.submitForm()} />
    </View>
  );
};

export default SetIncomeScreen;
