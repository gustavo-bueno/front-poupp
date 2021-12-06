import axios from 'axios';

const axiosApi = axios.create({
  baseURL: 'https://4d07-2804-4ec-108e-9000-7cad-e92c-6659-860d.ngrok.io',
});

export default axiosApi;
