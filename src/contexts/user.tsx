import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios, { AxiosResponse } from "axios";

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
  logout: () => void;
}

const initalState: UserInterface = {
  token: "",
  user: {
    name: "",
    createdAt: new Date(Date.now()),
    admin: false,
    hasInitialData: false,
  },
};

const UserContext = createContext({} as UserContextInterface);

const UserProvider: React.FC<{}> = ({ children }) => {
  const [user, setUser] = useState<UserInterface>(initalState);

  useEffect(() => {
    const getData = async () => {
      if (!user.token) {
        const token = await AsyncStorage.getItem("POUPP_USER_TOKEN");

        const options = {
          headers: { Authorization: `Bearer ${token}` },
        };

        if (token) {
          axios
            .get("https://eb4a-2804-4ec-10d8-1500-1840-695a-30e6-7c8b.ngrok.io/getdata", options)
            .then((response: AxiosResponse) => {
              if (response.status === 200) {''
                setUser(response.data);
              }
            })
            .catch((err) => {
              console.log(err);
            });
        }
      }
    };

    getData();
  }, [user]);

  const logout = async () => {
    await AsyncStorage.removeItem("POUPP_USER_TOKEN");
    setUser(initalState);
  };

  return (
    <UserContext.Provider value={{ user, setUser, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
