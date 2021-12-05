import axios from "axios";

const apiRequest = axios.create()

apiRequest.defaults.baseURL = "http://192.168.1.6:3333"

apiRequest.defaults.timeout = 2000

export default apiRequest