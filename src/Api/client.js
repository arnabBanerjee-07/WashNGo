import axios from 'axios';
import mmkv from '../Storage/mmkv.js';

const client = axios.create({
  baseURL: 'https://tor.appdevelopers.mobi/api/',
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

//client.defaults.headers.post['Content-Type'] = 'application/json';

export default client;

// // Set the AUTH token for any request
client.interceptors.request.use(function (config) {
  const token = mmkv.get('userToken');
  console.log(' token ', token);
  config.headers.Authorization = token ? `${token}` : '';
  return config;
});
