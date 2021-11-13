import React, { useState, useRef } from 'react';
import { Modal, ModalProps } from 'react-native';
import { Form } from '@unform/mobile';
import Ripple from 'react-native-material-ripple';
import { FormHandles } from '@unform/core';

import { Ionicons } from '@expo/vector-icons';

import { H1, H3 } from '../../../components/Text';
import { ModalContainer, ModalContent, TitleContainer } from './styles';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import CollapsibleList from '../../../components/CollapsibleList';
import { colors, metrics } from '../../../styles';

const extraIncomeCategories = [
  { name: 'Brigadeiro' },
  { name: 'Roupas usadas' },
  { name: 'Outra' },
];

const AddExtraIncomeGoalModal: React.FC<ModalProps> = ({
  onRequestClose,
  visible,
  ...rest
}) => {
  const formRef = useRef<FormHandles>(null);
  const [category, setCategory] = useState(extraIncomeCategories[0].name);

  const handleSubmit = async (data: any) => {};

  return (
    <Modal animationType="fade" transparent visible={visible} {...rest}>
      <ModalContainer>
        <ModalContent>
          <TitleContainer>
            <H1>Adicionar meta</H1>
            <Ripple onPress={onRequestClose}>
              <Ionicons name="close" size={24} color="black" />
            </Ripple>
          </TitleContainer>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input name="title" placeholder="Título" />
            <H3>Tipo da meta</H3>
            <CollapsibleList
              style={{
                marginVertical: metrics.base * 2,
                borderColor: colors.gray,
                borderWidth: 1,
                borderRadius: 8,
              }}
              collapsibleTitle={category}
              data={extraIncomeCategories}
              onPressItem={(item) => setCategory(item.name)}
            />
            <H3>Valor</H3>
            <Input mask name="totalValue" type="money" />
            <Button
              style={{ marginTop: metrics.base * 4 }}
              title="Adicionar meta"
              onPress={() => formRef.current?.submitForm()}
            />
          </Form>
        </ModalContent>
      </ModalContainer>
    </Modal>
  );
};

export default AddExtraIncomeGoalModal;
