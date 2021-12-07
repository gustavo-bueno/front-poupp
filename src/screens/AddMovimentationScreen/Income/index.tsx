import React, { useState, useEffect, useContext } from 'react';
import CategoriesList from '../../../components/CategoriesList';
import CollapsibleList from '../../../components/CollapsibleList';
import { CenteredContainer } from '../../../components/Container';
import { H1 } from '../../../components/Text';
import { TransactionContext } from '../../../contexts/transaction';
import useUserData from '../../../hooks/useUserData';
import { IAccount } from '../../../models/account';
import { getTransactionsCategories } from '../../../services/transactions';

import {
  FrequencyButton,
  FrequencyContainer,
  SecondaryTitle,
  TextAreaInput,
  TransactionTypeContainer,
} from '../styles';

const Income: React.FC = () => {
  const [frequency, setFrequency] = useState(0);
  const [categories, setCategories] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState<IAccount>({} as IAccount);
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

  useEffect(() => {
    setTransaction((currentTransaction) => ({
      ...currentTransaction,
      type: 'income',
    }));
  }, []);

  return (
    <TransactionTypeContainer showsVerticalScrollIndicator={false}>
      <SecondaryTitle>Selecione uma categoria:</SecondaryTitle>
      <CategoriesList
        onSelect={(categoryId) =>
          setTransaction((currentTransaction) => ({
            ...currentTransaction,
            categoryId,
          }))
        }
        data={categories}
        income
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
      <SecondaryTitle>Receber em:</SecondaryTitle>
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

export default Income;
