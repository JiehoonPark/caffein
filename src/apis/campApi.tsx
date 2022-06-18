import axios from 'axios';

const serverApi = axios.create({
  baseURL: 'https://efba8a2d-337c-4526-98db-805834a8c36b.mock.pstmn.io',
});

//캠프 API
export const getCamps = async () => {
  const res = await serverApi.get(`/camps`);
  return res.data;
};
