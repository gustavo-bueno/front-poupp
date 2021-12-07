import React, { createContext, useState, useContext } from 'react';
import { postInitialConfig } from '../services/user';
import { UserContext } from './user';

interface RegisterUserContext {
  setIncomeValue: React.Dispatch<React.SetStateAction<number>>;
  sendInitialData: (
    categories: { id: string; maxValue: number }[]
  ) => Promise<void>;
  incomeValue: number;
}

export interface UserData {
  incomeValue: number;
  categories: any[];
}

const RegisterUserContext = createContext({} as RegisterUserContext);

const RegisterUserProvider: React.FC<{}> = ({ children }) => {
  const [incomeValue, setIncomeValue] = useState(0);
  const { user, setUser } = useContext(UserContext);

  const sendInitialData = async (
    categories: { id: string; maxValue: number }[]
  ) => {
    await postInitialConfig({ incomeValue, categories }, user.token);
    setUser((userData) => ({
      token: userData.token,
      user: {
        ...userData.user,
        hasInitialData: true,
      },
    }));
  };

  return (
    <RegisterUserContext.Provider
      value={{ setIncomeValue, sendInitialData, incomeValue }}
    >
      {children}
    </RegisterUserContext.Provider>
  );
};

export { RegisterUserContext, RegisterUserProvider };
