import axios from "axios";
import { onFulfilledRequest, onRejectedRequest } from "./request";

const baseURL = import.meta.env.VITE_BASE_URL;

// Creating Instance of axios
const axiosData = axios.create({ baseURL });

axiosData.interceptors.request.use(onFulfilledRequest, onRejectedRequest);

export default axiosData;
