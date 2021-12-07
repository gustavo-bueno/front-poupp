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
  const { status } = await axiosApi.post('/transactions/create', data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return status;
};
