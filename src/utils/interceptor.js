import axios from 'axios';

axios.interceptors.request.use((config) => {
    config.headers.authorization = localStorage.getItem('authorization');
    return config;
    },
    (error) => {
        console.log(error);
    return Promise.reject(error);
    }
);

  export default axios;