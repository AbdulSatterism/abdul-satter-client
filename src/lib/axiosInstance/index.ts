import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.BASE_API as string,
});

export default axiosInstance;
