import { queryMenuTree, addMenu, modifyMenu, deleteMenu, queryRoles } from '@/services/system';

export default {
  namespace: 'orgMgt',

  state: {
    menus: [],
    roles: []
  },

  effects: {
    *queryMenuTree({ payload }, { call, put }) {
      const response = yield call(queryMenuTree, payload);
      yield put({
        type: 'save',
        payload: {
          menus: response.data
        },
      });
    },

    *add({ payload, callback }, { call, put }) {
      const response = yield call(addMenu, payload);
      yield put({
        type: 'save',
        payload: response,
      });
      if (callback) callback();
      yield put({
        type: 'queryMenuTree',
        payload: {}
      });
    },

    *modify({ payload, callback }, { call, put }) {
      const response = yield call(modifyMenu, payload);
      yield put({
        type: 'save',
        payload: response,
      });
      if (callback) callback();
      yield put({
        type: 'queryMenuTree',
        payload: {}
      });
    },

    *remove({ payload, callback }, { call, put }) {
      const response = yield call(deleteMenu, payload);
      yield put({
        type: 'save',
        payload: response,
      });
      if (callback) callback();
      yield put({
        type: 'queryMenuTree',
        payload: {}
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
