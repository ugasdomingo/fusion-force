import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://oyster-app-r3lt9.ondigitalocean.app/api',
    withCredentials: true
});

export default axiosInstance;
