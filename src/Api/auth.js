import axios from 'axios';
import client from './client.js';


const register = data => {
  return client.post('register', data);
};

const login = data => {
  return client.post('login', data);
};



const authService = {
  register,
  login,
};

export default authService;
