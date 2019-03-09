import { stringify } from 'qs';
import request from '@/utils/request';

export async function queryUsers(params) {
  return request(`${window.webRoot }/dms-admin/user/list`, {
    method: 'POST',
    body: {
      ...params
    },
  });
}

export async function addUser(params) {
  return request('/api/users', {
    method: 'POST',
    body: {
      ...params
    },
  });
}