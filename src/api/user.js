import service from '@/utils/request';

export const loginApi = (params) => {
  return service.post('/user/login', params);
};

export const getUserInfo = (params) => {
  return service.get('/profile/info/get?account=' + params.account);
};
