import React, { useRef, useState } from 'react';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import Input from '../../components/Input';
import Button from '../../components/Button';
import { BorderRadiusContainer } from '../../components/Container';
import CollapsibleList from '../../components/CollapsibleList';

import { SmallInputContainer, SmallInputsContainer } from './styles';
import { H3 } from '../../components/Text';
import { metrics } from '../../styles';
import { ICard } from '../../models/credit-card';

const schema = Yup.object().shape({
  ownerName: Yup.string().required('O campo nome do titular é obrigatório'),
  expirationDay: Yup.string().required(
    'O campo dia de vencimento é obrigatório.'
  ),
  cardLimit: Yup.number().required('O campo limite do cartão é obrigatório.'),
});

const AddCreditCardScreen: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [account, setAccount] = useState({ name: 'Carteira' });

  const handleSubmit = async (data: ICard) => {
    console.log(data, account);
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

  const accounts = [{ name: 'Carteira' }, { name: 'Banco do brasil' }];

  return (
    <BorderRadiusContainer>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input name="ownerName" placeholder="Nome do titular" />
        <H3 style={{ marginBottom: metrics.base * 2 }} fontWeight="medium">
          Conta relacionada:
        </H3>
        <CollapsibleList
          data={accounts}
          collapsibleTitle={account.name}
          onPressItem={(accountSelected) => setAccount(accountSelected)}
        />
        <SmallInputsContainer>
          <SmallInputContainer>
            <Input
              placeholder="Dia do vencimento"
              keyboardType="numeric"
              name="expirationDay"
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
