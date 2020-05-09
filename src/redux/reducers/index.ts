import {
  ActionTypes,
  FETCH_ACCOUNT_LIST_REQUEST,
  FETCH_ACCOUNT_LIST_SUCCESS,
  FETCH_ACCOUNT_LIST_FAILURE,
  FETCH_ACCOUNT_REQUEST,
  FETCH_ACCOUNT_SUCCESS,
  FETCH_ACCOUNT_FAILURE,
  SET_ACCOUNT_MODAL_VISIBLE,
} from '../actions/types';
import { State } from './types';

const initialState: State = {
  accountList: {
    data: null,
    pagination: {
      current: 0,
      pageSize: 0,
      total: 0,
    },
    loading: false,
    error: null,
  },
  account: {
    included: {
      orders: null,
    },
    loading: false,
    error: null,
  },
  accountModalVisible: false,
};

const rootReducer = (
  state: State = initialState,
  action: ActionTypes,
): State => {
  switch (action.type) {
    case FETCH_ACCOUNT_LIST_REQUEST:
      return {
        ...state,
        accountList: {
          ...state.accountList,
          loading: true,
        },
      };
    case FETCH_ACCOUNT_LIST_SUCCESS:
      const {
        payload: { accountList },
      } = action;
      const { error } = accountList;

      if (error) {
        return {
          ...state,
          accountList: {
            ...state.accountList,
            loading: false,
            error,
          },
        };
      }

      const {
        meta: { offset, limit, totalCount },
      } = accountList;

      return {
        ...state,
        accountList: {
          ...state.accountList,
          data: accountList.data,
          pagination: {
            current: offset / limit + 1,
            pageSize: limit,
            total: totalCount,
          },
          loading: false,
        },
      };
    case FETCH_ACCOUNT_LIST_FAILURE:
      return {
        ...state,
        accountList: {
          ...state.accountList,
          loading: false,
          error: action.payload.error,
        },
      };
    case FETCH_ACCOUNT_REQUEST:
      return {
        ...state,
        account: {
          ...state.account,
          loading: true,
        },
      };
    case FETCH_ACCOUNT_SUCCESS:
      return {
        ...state,
        account: {
          ...action.payload.account,
          loading: false,
        },
      };
    case FETCH_ACCOUNT_FAILURE:
      return {
        ...state,
        account: {
          ...state.account,
          loading: false,
          error: action.payload.error,
        },
      };
    case SET_ACCOUNT_MODAL_VISIBLE:
      return {
        ...state,
        accountModalVisible: action.payload.value,
      };
    default:
      return state;
  }
};

export default rootReducer;
