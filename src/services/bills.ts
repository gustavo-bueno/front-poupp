import axiosApi from './apiRequest';
import { IBill } from '../models/bill';

export const getAllBills = async (token: string) => {
  const { data } = await axiosApi.get<IBill[]>('/bills', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const createBill = async (billData: IBill, token: string) => {
  await axiosApi.post('/bills/create', billData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
