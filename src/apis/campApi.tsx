import axios from 'axios';

const serverApi = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

//캠프 API
export const getCamps = async () => {
  const res = await serverApi.get(`/camps`);
  return res.data.data;
};
