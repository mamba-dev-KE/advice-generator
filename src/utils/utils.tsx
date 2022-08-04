import axios from 'axios';

const API_URL = import.meta.env.VITE_ADVICE_API_URL;

console.log(API_URL);

export const fetchAdvice = () =>
  axios.get(API_URL).then((res) => res.data);
