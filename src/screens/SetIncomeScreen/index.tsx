import React, { useRef, useContext } from 'react';
import { View } from 'react-native';
import { Form } from '@unform/mobile';
import * as Yup from 'yup';

import { FormHandles } from '@unform/core';

import Input from '../../components/Input';
import { H1, H2, H3 } from '../../components/Text';
import Button from '../../components/Button';
import { BorderRadiusContainer } from '../../components/Container';
import { metrics } from '../../styles';
import { ROUTES } from '../../constants/routes';
import { useNavigation } from '@react-navigation/core';
import { RegisterUserContext } from '../../contexts/registerUser';

const SetIncomeScreen: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { setIncomeValue } = useContext(RegisterUserContext);
  const { navigate } = useNavigation();

  const handleSubmit = async (data: { income: number }) => {
    const schema = Yup.object().shape({
      income: Yup.number().required('O valor total de entradas é obrigatório.'),
    });

    try {
      await schema.validate(data, {
        abortEarly: false,
      });
      setIncomeValue(data.income);
      navigate(ROUTES.SET_MOTIVATION);
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
    <BorderRadiusContainer style={{ justifyContent: 'space-between' }}>
      <View>
        <H3>
          Para começarmos nos planejar, diz aí pra gente, qual é a média do
          valor total de entradas no seu mês?
        </H3>
        <H2 style={{ marginTop: metrics.base * 2 }} fontWeight="medium">
          Qual o total de dinheiro que entra por mês?
        </H2>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input mask type="money" name="income" />
        </Form>
      </View>
      <Button
        style={{ marginBottom: metrics.base * 12 }}
        title="Pronto!"
        onPress={() => formRef.current?.submitForm()}
      />
    </BorderRadiusContainer>
  );
};

export default SetIncomeScreen;
