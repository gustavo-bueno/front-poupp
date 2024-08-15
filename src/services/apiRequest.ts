import axios from 'axios';

const axiosApi = axios.create({
  baseURL: 'https://d29d-2804-4ec-108e-9000-8935-6bcc-f519-17ae.ngrok.io',
});

export default axiosApi;
