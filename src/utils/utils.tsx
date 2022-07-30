import axios from 'axios';

export const fetchAdvice = () =>
  axios.get('https://api.adviceslip.com/advice').then((res) => res.data);
