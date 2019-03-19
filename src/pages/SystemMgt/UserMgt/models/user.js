import { queryRule, removeRule, addRule, updateRule } from '@/services/api';
import { queryUsers, addUser, modifyUser, deleteUser, queryRoles } from '@/services/system';

export default {
  namespace: 'userMgt',

  state: {
    data: {
      list: [],
      pagination: {},
    },
    roles: []
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      const response = yield call(queryUsers, payload);
      yield put({
        type: 'save',
        payload: {
          data: {
            list: response.data,
            pagination: {
              total: response.total,
              pageSize: response.pageSize,
              current: parseInt(response.pageIndex + 1, 10) || 1,
            },
          }
        },
      });
    },

    *fetchRoles({ payload }, { call, put }) {
      const response = yield call(queryRoles, payload);
      yield put({
        type: 'save',
        payload: {
          roles: response.data
        }
      });
    },

    *add({ payload, callback }, { call, put }) {
      const response = yield call(addUser, payload);
      yield put({
        type: 'save',
        payload: response,
      });
      if (callback) callback();
      yield put({
        type: 'fetch',
        payload: {}
      });
    },

    *modify({ payload, callback }, { call, put }) {
      const response = yield call(modifyUser, payload);
      yield put({
        type: 'save',
        payload: response,
      });
      if (callback) callback();
      yield put({
        type: 'fetch',
        payload: {}
      });
    },

    *remove({ payload, callback }, { call, put }) {
      const response = yield call(deleteUser, payload);
      yield put({
        type: 'save',
        payload: response,
      });
      if (callback) callback();
      yield put({
        type: 'fetch',
        payload: {}
      });
    },
    
  },

  reducers: {
    save(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
};
