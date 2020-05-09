import { AccountList, Account } from '../reducers/types';

export const FETCH_ACCOUNT_LIST_REQUEST = 'FETCH_ACCOUNT_LIST_REQUEST';
export const FETCH_ACCOUNT_LIST_SUCCESS = 'FETCH_ACCOUNT_LIST_SUCCESS';
export const FETCH_ACCOUNT_LIST_FAILURE = 'FETCH_ACCOUNT_LIST_FAILURE';
export const FETCH_ACCOUNT_REQUEST = 'FETCH_ACCOUNT_REQUEST';
export const FETCH_ACCOUNT_SUCCESS = 'FETCH_ACCOUNT_SUCCESS';
export const FETCH_ACCOUNT_FAILURE = 'FETCH_ACCOUNT_FAILURE';
export const SET_ACCOUNT_MODAL_VISIBLE = 'SET_ACCOUNT_MODAL_VISIBLE';

interface FetchAccountListRequestAction {
  type: typeof FETCH_ACCOUNT_LIST_REQUEST;
}

export interface AccountListResponse extends AccountList {
  meta: {
    offset: number;
    limit: number;
    totalCount: number;
  };
}

interface FetchAccountListSuccessAction {
  type: typeof FETCH_ACCOUNT_LIST_SUCCESS;
  payload: {
    accountList: AccountListResponse;
  };
}

interface FetchAccountListFailureAction {
  type: typeof FETCH_ACCOUNT_LIST_FAILURE;
  payload: {
    error: object;
  };
}

interface FetchAccountRequestAction {
  type: typeof FETCH_ACCOUNT_REQUEST;
}

interface FetchAccountSuccessAction {
  type: typeof FETCH_ACCOUNT_SUCCESS;
  payload: {
    account: Account;
  };
}

interface FetchAccountFailureAction {
  type: typeof FETCH_ACCOUNT_FAILURE;
  payload: {
    error: object;
  };
}

interface SetAccountModalVisibleAction {
  type: typeof SET_ACCOUNT_MODAL_VISIBLE;
  payload: {
    value: boolean;
  };
}

export type ActionTypes =
  | FetchAccountListRequestAction
  | FetchAccountListSuccessAction
  | FetchAccountListFailureAction
  | FetchAccountRequestAction
  | FetchAccountSuccessAction
  | FetchAccountFailureAction
  | SetAccountModalVisibleAction;
