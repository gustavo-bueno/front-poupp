import { UserData } from '../contexts/registerUser';
import { UserInterface } from '../contexts/user';
import axiosApi from './apiRequest';

export interface SignUp {
  name: string;
  email: string;
  password: string;
}

export const signUp = async (userData: SignUp) => {
  const { data } = await axiosApi.post<UserInterface>('/signup', userData);
  return data;
};

export const postInitialConfig = async (data: UserData, userToken: string) => {
  await axiosApi.post('/initialconfig', data, {
    headers: { Authorization: `Bearer ${userToken}` },
  });
};
