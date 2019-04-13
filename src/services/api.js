import axios from 'axios';

const api = axios.create({
    baseURL: 'https://gu-omnistack-backend.herokuapp.com', 
});

export default api;