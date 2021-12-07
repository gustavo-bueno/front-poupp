import React, { createContext, useState } from 'react';
import useUserData from '../hooks/useUserData';
import { ITransaction } from '../models/transaction';
import { createTransaction } from '../services/transactions';

interface TransactionContext {
  setTransaction: React.Dispatch<React.SetStateAction<Partial<ITransaction>>>;
  addTransaction: () => Promise<void>;
  transaction: Partial<ITransaction>;
}

const TransactionContext = createContext({} as TransactionContext);

const TransactionProvider: React.FC<{}> = ({ children }) => {
  const [transaction, setTransaction] = useState<Partial<ITransaction>>(
    {} as Partial<ITransaction>
  );
  const { user } = useUserData();

  const addTransaction = async () => {
    await createTransaction(transaction, user.token);
  };
  return (
    <TransactionContext.Provider
      value={{ setTransaction, addTransaction, transaction }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

export { TransactionContext, TransactionProvider };
