import apiClient from './base';

const dataList = async () => {
  return await apiClient().get(`data`);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {dataList};
