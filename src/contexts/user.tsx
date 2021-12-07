import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AxiosResponse } from 'axios';
import axiosApi from '../services/apiRequest';
import { IAccount } from '../models/account';

export interface UserInterface {
  token: string;
  user: {
    name: string;
    admin: boolean;
    hasInitialData: boolean;
    createdAt: Date;
  };
}

interface UserContextInterface {
  user: UserInterface;
  setUser: React.Dispatch<React.SetStateAction<UserInterface>>;
  refresh: boolean;
  logout: () => void;
  accounts: IAccount[];
  refreshData: () => void;
}

const initalState: UserInterface = {
  token: '',
  user: {
    name: '',
    createdAt: new Date(Date.now()),
    admin: false,
    hasInitialData: false,
  },
};

const UserContext = createContext({} as UserContextInterface);

const UserProvider: React.FC<{}> = ({ children }) => {
  const [user, setUser] = useState<UserInterface>(initalState);
  const [accounts, setAccounts] = useState<IAccount[]>([]);
  const [refresh, setRefresh] = useState<boolean>(false);

  useEffect(() => {
    const getData = async () => {
      if (!user.token) {
        const token = await AsyncStorage.getItem('POUPP_USER_TOKEN');

        const options = {
          headers: { Authorization: `Bearer ${token}` },
        };

        if (token) {
          axiosApi
            .get('/getdata', options)
            .then((response: AxiosResponse) => {
              if (response.status === 200) {
                setUser(response.data);
              }
            })
            .catch((err) => {
              console.log(err);
            });

          axiosApi.get('/accounts', options).then((response: AxiosResponse) => {
            if (response.status === 200) {
              setAccounts(response.data);
            }
          });
        }
      }
    };

    getData();
  }, [user]);

  const logout = async () => {
    await AsyncStorage.removeItem('POUPP_USER_TOKEN');
    setUser(initalState);
  };

  const refreshData = () => {
    setRefresh(!refresh);
  };

  return (
    <UserContext.Provider
      value={{ user, setUser, accounts, logout, refresh, refreshData }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
