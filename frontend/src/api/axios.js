import axios from 'axios';

const api = axios.create({
    baseURL: 'https://shopora-ge15.onrender.com/api',
});

export default api;