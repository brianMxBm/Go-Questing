import axios from 'axios';
import { IP } from '@env';

const client = axios.create({
  baseURL: `http://192.168.1.2:8000/api`
});

export default client;
