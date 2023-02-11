import axios from 'axios';

const apiClient = () => {
  //   const access_token = localStorage.getItem('access_token');
  const instance = axios.create({
    baseURL: `${window.location.protocol}//${window.location.host}/api/`,
    headers: {
      'Content-Type': 'application/json',
    },
    responseType: 'json',
  });
  return instance;
};

export default apiClient;
