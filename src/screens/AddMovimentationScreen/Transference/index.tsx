import React, { useState, useContext } from 'react';
import CollapsibleList from '../../../components/CollapsibleList';
import { TransactionContext } from '../../../contexts/transaction';
import useUserData from '../../../hooks/useUserData';
import {
  SecondaryTitle,
  TextAreaInput,
  TransactionTypeContainer,
} from '../styles';

const Transference: React.FC = () => {
  const [paymentMethod, setPaymentMethod] = useState<any>();
  const [receiveMethod, setReceiveMethod] = useState<any>();
  const { accounts } = useUserData();
  const { setTransaction } = useContext(TransactionContext);

  return (
    <TransactionTypeContainer>
      <SecondaryTitle>Descrição:</SecondaryTitle>
      <TextAreaInput
        onChangeText={(text) =>
          setTransaction((currentTransaction) => ({
            ...currentTransaction,
            description: text,
          }))
        }
      />
      <SecondaryTitle>Transferir de:</SecondaryTitle>
      <CollapsibleList
        onPressItem={(selectedPaymentMethod) => {
          setPaymentMethod(selectedPaymentMethod);
          setTransaction((currentTransaction) => ({
            ...currentTransaction,
            accountId: selectedPaymentMethod._id,
          }));
        }}
        data={accounts}
        collapsibleTitle={paymentMethod?.name ?? 'Selecione uma conta'}
      />
      <SecondaryTitle>Para:</SecondaryTitle>
      <CollapsibleList
        onPressItem={(selectedPaymentMethod) => {
          setReceiveMethod(selectedPaymentMethod);
          setTransaction((currentTransaction) => ({
            ...currentTransaction,
            transferAccountId: selectedPaymentMethod._id,
          }));
        }}
        data={accounts}
        collapsibleTitle={receiveMethod?.name ?? 'Selecione uma conta'}
      />
    </TransactionTypeContainer>
  );
};

export default Transference;
