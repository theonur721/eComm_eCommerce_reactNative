import axios from 'axios';
import URLS from './Urls';

const instance = axios.create({
  baseURL: URLS.BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

export default instance;
