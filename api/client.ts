import axios from 'axios';
import { IP } from '@env';

const client = axios.create({
  baseURL: `http://${IP}:8000/api`
});

export default client;
