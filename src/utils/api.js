// services/api.js
import axios from 'axios';

const client = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  // withCredentials: true,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

client.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );



const csrf = ()=> client.get('/sanctum/csrf-cookie');



export const login = (credentials) => {
  csrf();
  client.post('/login', credentials);
}

export const logout = () => {
  csrf();
  client.post('/logout');
}

export const register = (user) => {
  csrf();
  client.post('/register', user);
}

export const packages = () => client.get('/api/v1/packages');




