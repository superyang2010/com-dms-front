import { stringify } from 'qs';
import request from '@/utils/request';

/**
 * 用户列表查询
 * @param {*} params 
 */
export async function queryUsers(params) {
  return request(`${window.webRoot }/dms-admin/user/list`, {
    method: 'POST',
    body: {
      ...params
    },
  });
}

/**
 * 角色列表查询
 * @param {*} params 
 */
export async function queryRoles(params) {
  return request(`${window.webRoot }/dms-admin/role/list`, {
    method: 'POST',
    body: {
      ...params
    },
  });
}

/**
 * 添加用户
 */
export async function addUser(params) {
  return request(`${window.webRoot }/dms-admin/user/add`, {
    method: 'POST',
    body: {
      ...params
    },
  });
}

/**
 * 修改用户
 * @param {*} params 
 */
export async function modifyUser(params) {
  return request(`${window.webRoot }/dms-admin/user/modify`, {
    method: 'POST',
    body: {
      ...params
    },
  });
}

/**
 * 删除用户
 */
export async function deleteUser(params) {
  return request(`${window.webRoot }/dms-admin/user/delete`, {
    method: 'DELETE',
    body: {
      ...params
    },
  });
}