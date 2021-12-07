import React, { useState, useEffect, useContext } from 'react';

import CategoriesList from '../../../components/CategoriesList';
import CollapsibleList from '../../../components/CollapsibleList';
import { CenteredContainer } from '../../../components/Container';
import { H1 } from '../../../components/Text';
import { TransactionContext } from '../../../contexts/transaction';
import useUserData from '../../../hooks/useUserData';
import { getTransactionsCategories } from '../../../services/transactions';

import {
  FrequencyButton,
  FrequencyContainer,
  SecondaryTitle,
  TextAreaInput,
  TransactionTypeContainer,
} from '../styles';

const Outcome: React.FC = () => {
  const [frequency, setFrequency] = useState(0);
  const [categories, setCategories] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState<any>();
  const { accounts, user } = useUserData();
  const { setTransaction } = useContext(TransactionContext);

  useEffect(() => {
    const getCategories = async () => {
      const transactionsCategories = await getTransactionsCategories(
        user.token
      );
      setCategories(transactionsCategories);
    };
    getCategories();
  }, []);

  return (
    <TransactionTypeContainer>
      <SecondaryTitle>Selecione uma categoria:</SecondaryTitle>
      <CategoriesList
        onSelect={(categoryId) =>
          setTransaction((currentTransaction) => ({
            ...currentTransaction,
            categoryId,
          }))
        }
        data={categories}
        income={false}
      />
      <SecondaryTitle>Descrição:</SecondaryTitle>
      <TextAreaInput
        onChangeText={(text) =>
          setTransaction((currentTransaction) => ({
            ...currentTransaction,
            description: text,
          }))
        }
      />
      <SecondaryTitle>Pagar com:</SecondaryTitle>
      <CollapsibleList
        onPressItem={(account) => {
          setPaymentMethod(account);
          setTransaction((currentTransaction) => ({
            ...currentTransaction,
            account: account.id,
          }));
        }}
        data={accounts}
        collapsibleTitle={paymentMethod.name}
      />
      <SecondaryTitle>Quantas parcelas mensais?</SecondaryTitle>
      <CenteredContainer style={{ flexDirection: 'row' }}>
        <FrequencyButton
          onPress={() =>
            setFrequency((currentFrequency) => currentFrequency + 1)
          }
        >
          <H1 fontWeight="bold">+</H1>
        </FrequencyButton>
        <FrequencyContainer>
          <H1 fontWeight="bold">{frequency}</H1>
        </FrequencyContainer>
        <FrequencyButton
          disabled={frequency === 1}
          onPress={() =>
            setFrequency((currentFrequency) => currentFrequency - 1)
          }
        >
          <H1 fontWeight="bold">-</H1>
        </FrequencyButton>
      </CenteredContainer>
    </TransactionTypeContainer>
  );
};

export default Outcome;
