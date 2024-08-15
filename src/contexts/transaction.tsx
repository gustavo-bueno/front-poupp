import React, { createContext, useState } from 'react';
import { ITransaction } from '../models/transaction';
import { createTransaction } from '../services/transactions';
import { showMessage } from 'react-native-flash-message';

interface TransactionContext {
  setTransaction: React.Dispatch<React.SetStateAction<Partial<ITransaction>>>;
  addTransaction: (token: string) => Promise<boolean>;
  transaction: Partial<ITransaction>;
}

const TransactionContext = createContext({} as TransactionContext);

const TransactionProvider: React.FC<{}> = ({ children }) => {
  const [transaction, setTransaction] = useState<Partial<ITransaction>>({
    type: 'income',
  } as Partial<ITransaction>);

  const addTransaction = async (token: string) => {
    try {
      if (
        !transaction.accountId ||
        !transaction.value ||
        !transaction.description ||
        !transaction.title
      ) {
        showMessage({
          message: 'Por favor preencha todos os campos!',
          type: 'warning',
          floating: true,
        });
        return false;
      }
      await createTransaction(transaction, token);
      return true;
    } catch (error: any) {
      showMessage({
        message: 'Não foi possível criar a transação!',
        type: 'danger',
        floating: true,
      });
      console.log(error.response.data);
      return false;
    }
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
