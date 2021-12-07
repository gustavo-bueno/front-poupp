import { ITransaction } from '../models/transaction';
import axiosApi from './apiRequest';

export const getTransactionsCategories = async (token: string) => {
  const { data } = await axiosApi.get('/transactionscategories', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const createTransaction = async (
  data: Partial<ITransaction>,
  token: string
) => {
  await axiosApi.post('/transactions', data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
