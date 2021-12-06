import axiosApi from './apiRequest';

export const getTransactionsCategories = async (token: string) => {
  const { data } = await axiosApi.get('/transactionscategories', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};
