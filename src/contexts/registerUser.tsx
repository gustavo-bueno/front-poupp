import React, { createContext, useState, useContext } from 'react';
import { postInitialConfig } from '../services/user';
import { UserContext } from './user';

interface RegisterUserContext {
  setIncomeValue: React.Dispatch<React.SetStateAction<number>>;
  sendInitialData: (
    categories: { categoryId: string; maxValue: number }[]
  ) => Promise<void>;
}

export interface UserData {
  incomeValue: number;
  categories: any[];
}

const RegisterUserContext = createContext({} as RegisterUserContext);

const RegisterUserProvider: React.FC<{}> = ({ children }) => {
  const [incomeValue, setIncomeValue] = useState(0);
  const { user } = useContext(UserContext);

  const sendInitialData = async (
    categories: { categoryId: string; maxValue: number }[]
  ) => {
    await postInitialConfig({ incomeValue, categories }, user.token);
  };

  return (
    <RegisterUserContext.Provider value={{ setIncomeValue, sendInitialData }}>
      {children}
    </RegisterUserContext.Provider>
  );
};

export { RegisterUserContext, RegisterUserProvider };
