import axios from 'axios';

const axiosPriceApi = axios.create({
    baseURL: 'https://api.preciodelaluz.org/v1/prices/',
    withCredentials: true
});

export default axiosPriceApi;
