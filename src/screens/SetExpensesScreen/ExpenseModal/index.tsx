import React, { useState, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/mobile';
import { ModalProps, View } from 'react-native';

import * as Yup from 'yup';

import Modal from '../../../components/Modal';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import { H2, H3, H4 } from '../../../components/Text';
import { metrics } from '../../../styles';
import useUserData from '../../../hooks/useUserData';
import { ICategory } from '../../../models/category';
import { ExpenseImageContainer } from '../../ExpensesListScreen/styles';
import { categoryInfos } from '../../../constants/categoriesTypes';

const ExpenseSchema = Yup.object().shape({
  maxValue: Yup.number().typeError('O valor máximo é obrigatório.'),
});

interface ExpenseModal extends ModalProps {
  data: ICategory;
  updateExpense: (data: { id: string; maxValue: number }) => void;
}

const ExpensesModal: React.FC<ExpenseModal> = ({
  onRequestClose,
  visible,
  updateExpense,
  data,
  ...rest
}) => {
  const formRef = useRef<FormHandles>(null);
  const { user } = useUserData();

  const handleSubmit = async (formData: any) => {
    formRef.current?.setErrors({});

    try {
      await ExpenseSchema.validate(data, {
        abortEarly: false,
      });
      updateExpense({ id: data._id, maxValue: formData.maxValue });
      onRequestClose();
    } catch (error: any) {
      console.log(error?.response.data);
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
    <Modal
      title="Adicionar valor à despesa"
      visible={visible}
      onRequestClose={onRequestClose}
      {...rest}
    >
      <View style={{ alignItems: 'center' }}>
        <ExpenseImageContainer color={categoryInfos[data.type].color ?? 'red'}>
          {categoryInfos[data.type].icon ?? <></>}
        </ExpenseImageContainer>
        <H2>{data.name}</H2>
      </View>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input
          mask
          type="money"
          placeholder="Valor da despesa"
          name="maxValue"
        />
      </Form>
      <Button
        style={{ marginTop: metrics.base }}
        title="Adicionar"
        onPress={() => formRef.current?.submitForm()}
      />
    </Modal>
  );
};

export default ExpensesModal;
