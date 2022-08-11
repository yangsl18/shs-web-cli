import service from '@/utils/request';

export const loginApi = (params) => {
  return service.post('/user/login', params);
};

