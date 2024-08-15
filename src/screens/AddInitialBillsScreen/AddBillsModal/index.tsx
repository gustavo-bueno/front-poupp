import React, { useState, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/mobile';
import { ModalProps, View } from 'react-native';

import * as Yup from 'yup';

import Modal from '../../../components/Modal';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import { H3, H4 } from '../../../components/Text';
import RadioButton from '../../../components/RadioButton';
import { metrics } from '../../../styles';
import { createBill } from '../../../services/bills';
import useUserData from '../../../hooks/useUserData';

const BillSchema = Yup.object().shape({
  title: Yup.string().required('O título da dívida é obrigatório.'),
  remainingValue: Yup.number().required('O título da dívida é obrigatório.'),
  interest: Yup.number()
    .typeError('O juro é obrigatório')
    .required('O juro é obrigatório.'),
});

const AddBillsModal: React.FC<ModalProps> = ({
  onRequestClose,
  visible,
  ...rest
}) => {
  const formRef = useRef<FormHandles>(null);
  const { user } = useUserData();
  const [interestType, setInterestType] = useState<'simple' | 'composed'>(
    'simple'
  );

  const handleSubmit = async (data: any) => {
    formRef.current?.setErrors({});

    try {
      await BillSchema.validate(data, {
        abortEarly: false,
      });
      await createBill({ ...data, interestType, dueDay: 10 }, user.token);
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
      title="Adicionar dívidas"
      visible={visible}
      onRequestClose={onRequestClose}
      {...rest}
    >
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input placeholder="Nome da dívida" name="title" />
        <Input placeholder="Valor" name="remainingValue" mask type="money" />
        <H3>Tipo dos juros</H3>
        <View style={{ flexDirection: 'row' }}>
          <RadioButton
            active={interestType === 'composed'}
            onPress={() => setInterestType('composed')}
            title="Juros compostos"
          />
          <RadioButton
            style={{ marginLeft: metrics.base * 2 }}
            active={interestType === 'simple'}
            onPress={() => setInterestType('simple')}
            title="Juros simples"
          />
        </View>
        <Input
          name="interest"
          placeholder="Porcentagem de juros"
          keyboardType="number-pad"
        />
      </Form>
      <Button
        style={{ marginTop: metrics.base }}
        title="Adicionar"
        onPress={() => formRef.current?.submitForm()}
      />
      <H4 style={{ marginTop: metrics.base }}>
        Caso a dívida não tenha juros, coloque a porcentagem de juros como zero!
        😉
      </H4>
    </Modal>
  );
};

export default AddBillsModal;
