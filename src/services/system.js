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
export async function addRole(params) {
  return request(`${window.webRoot }/dms-admin/role/add`, {
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
export async function modifyRole(params) {
  return request(`${window.webRoot }/dms-admin/role/modify`, {
    method: 'POST',
    body: {
      ...params
    },
  });
}

/**
 * 删除用户
 */
export async function deleteRole(params) {
  return request(`${window.webRoot }/dms-admin/role/delete`, {
    method: 'DELETE',
    body: {
      ...params
    },
  });
}

/**
 *  菜单查询(树状)
 * @param {*} params 
 */
export async function queryMenuTree(params) {
  return request(`${window.webRoot }/dms-admin/menu/query?${stringify(params)}`);
}

/**
 * 添加菜单
 */
export async function addMenu(params) {
  return request(`${window.webRoot }/dms-admin/menu/add`, {
    method: 'POST',
    body: {
      ...params
    },
  });
}

/**
 * 修改菜单
 * @param {*} params 
 */
export async function modifyMenu(params) {
  return request(`${window.webRoot }/dms-admin/menu/modify`, {
    method: 'POST',
    body: {
      ...params
    },
  });
}

/**
 * 删除菜单
 */
export async function deleteMenu(params) {
  return request(`${window.webRoot }/dms-admin/menu/delete`, {
    method: 'DELETE',
    body: {
      ...params
    },
  });
}