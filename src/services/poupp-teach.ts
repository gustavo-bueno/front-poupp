import { IPost } from '../models/post';
import axiosApi from './apiRequest';

export interface IYoutuber {
  title: string;
  picture: string;
  channelId: string;
}

export const getYoutubers = async (token: string) => {
  const { data } = await axiosApi.get<IYoutuber[]>('/youtubers', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const getPouppTeachPosts = async (token: string) => {
  const { data } = await axiosApi.get<IPost[]>('/posts?topic=pouppeducate', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};
