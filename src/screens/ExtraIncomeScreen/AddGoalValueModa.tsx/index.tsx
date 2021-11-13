import React, { useRef } from 'react';
import { Modal, ModalProps, View } from 'react-native';
import { Form } from '@unform/mobile';
import Ripple from 'react-native-material-ripple';
import { FormHandles } from '@unform/core';

import { Ionicons } from '@expo/vector-icons';

import { H1, H2, H3 } from '../../../components/Text';
import {
  ModalContainer,
  ModalContent,
  TitleContainer,
} from '../AddExtraIncomeGoalModal/styles';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import { metrics } from '../../../styles';
import MoneyText from '../../../components/MoneyText';
import { ProgressBar } from '../../../components/ProgressBar';

const AddValueGoalModal: React.FC<ModalProps> = ({
  onRequestClose,
  visible,
  ...rest
}) => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = async (data: any) => {};

  return (
    <Modal animationType="fade" transparent visible={visible} {...rest}>
      <ModalContainer>
        <ModalContent>
          <TitleContainer>
            <H1>Adicionar valor</H1>
            <Ripple onPress={onRequestClose}>
              <Ionicons name="close" size={24} color="black" />
            </Ripple>
          </TitleContainer>
          <H2 style={{ marginVertical: metrics.base }} fontWeight="medium">
            Informações sobre a meta
          </H2>
          <MoneyText fontSize="h1" value={200000} />
          <ProgressBar progress={0.7} />
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: 'row',
              marginBottom: metrics.base * 2,
            }}
          >
            <H3 color="text">
              <MoneyText fontSize="h2" value={2700} />
              {' arrecadado'}
            </H3>
            <H2 color="text">{20}% concluído</H2>
          </View>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input placeholder="Título da meta" name="title" />
            <H3>Novo valor</H3>
            <Input mask name="totalValue" type="money" />
            <Button
              style={{ marginTop: metrics.base * 4 }}
              title="Adicionar"
              onPress={() => formRef.current?.submitForm()}
            />
          </Form>
        </ModalContent>
      </ModalContainer>
    </Modal>
  );
};

export default AddValueGoalModal;
