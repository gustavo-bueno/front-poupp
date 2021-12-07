import axios from 'axios';

const axiosApi = axios.create({
  baseURL: 'http://192.168.1.6:3333',
});

export default axiosApi;
