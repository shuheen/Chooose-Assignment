import apiClient from './base';

const dataList = async () => {
  return await apiClient().get(`data`);
};

export default {dataList};
