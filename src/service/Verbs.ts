import { AxiosRequestConfig } from 'axios';
import instance from './Instance';

const get = async <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
  const response = await instance.get<T>(url, config);
  return response.data;
};

const post = async <T>(
  url: string,
  data?: object,
  config?: AxiosRequestConfig,
): Promise<T> => {
  const response = await instance.post<T>(url, data, config);
  return response.data;
};

const put = async <T>(
  url: string,
  data?: object,
  config?: AxiosRequestConfig,
): Promise<T> => {
  const response = await instance.put<T>(url, data, config);
  return response.data;
};

const del = async <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
  const response = await instance.delete<T>(url, config);
  return response.data;
};

export default {
  get,
  post,
  put,
  del,
};
