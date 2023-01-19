import axios, {  AxiosInstance } from 'axios';

import isClient from "@utils/isClient";


const Repository: AxiosInstance = axios.create({
  baseURL: isClient()
    ? `${process.env.NEXT_PUBLIC_API_URL}/api`
    : `${process.env.API_URL}/api`,
  responseType: 'json',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});
export default Repository;
