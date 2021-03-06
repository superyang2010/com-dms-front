import { queryRoles, addRole, modifyRole, deleteRole } from '@/services/system';

export default {
  namespace: 'roleMgt',

  state: {
    data: {
      list: [],
      pagination: {},
    },
    users: []
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      const response = yield call(queryRoles, payload);
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

    *add({ payload, callback }, { call, put }) {
      const response = yield call(addRole, payload);
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
      const response = yield call(modifyRole, payload);
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
      const response = yield call(deleteRole, payload);
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
