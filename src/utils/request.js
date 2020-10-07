import axios from 'axios';

const request = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? '/' : '/api',
  timeout: 5000
});

request.interceptors.request.use(
  config => config,
  error => Promise.reject(error)
);

request.interceptors.response.use(
  response => response.data,
  error => Promise.reject(error.response.data)
);

export default request;
