import {
  ActionTypes,
  AccountListResponse,
  FETCH_ACCOUNT_LIST_REQUEST,
  FETCH_ACCOUNT_LIST_SUCCESS,
  FETCH_ACCOUNT_LIST_FAILURE,
  FETCH_ACCOUNT_REQUEST,
  FETCH_ACCOUNT_SUCCESS,
  FETCH_ACCOUNT_FAILURE,
  SET_ACCOUNT_MODAL_VISIBLE,
} from './types';
import { Account } from '../reducers/types';

const fetchAccountListRequest = (): ActionTypes => ({
  type: FETCH_ACCOUNT_LIST_REQUEST,
});

const fetchAccountListSuccess = (
  accountList: AccountListResponse,
): ActionTypes => ({
  type: FETCH_ACCOUNT_LIST_SUCCESS,
  payload: {
    accountList,
  },
});

const fetchAccountListFailure = (error: object): ActionTypes => ({
  type: FETCH_ACCOUNT_LIST_FAILURE,
  payload: {
    error,
  },
});

export const fetchAccountList = (
  { limit, offset }: { limit: number; offset: number } = {
    limit: 10,
    offset: 0,
  },
) => {
  return (dispatch: (action: ActionTypes) => {}): void => {
    dispatch(fetchAccountListRequest());

    fetch(
      `https://api.leeloo.ai/api/v1/accounts?limit=${limit}&offset=${offset}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'X-Leeloo-AuthToken':
            'cmpc3hcajyh3e5ksz6xho9t77flp4pesa300js9y8w9v6xptzj0vlk0halesk27hgqslukjxpepzkmaz6jpfj8zw0x5fwsajezvb',
        },
      },
    )
      .then((response) => response.json())
      .then((responseJson) => dispatch(fetchAccountListSuccess(responseJson)))
      .catch((error) => dispatch(fetchAccountListFailure(error)));
  };
};

const fetchAccountRequest = (): ActionTypes => ({
  type: FETCH_ACCOUNT_REQUEST,
});

const fetchAccountSuccess = (account: Account): ActionTypes => ({
  type: FETCH_ACCOUNT_SUCCESS,
  payload: {
    account,
  },
});

const fetchAccountFailure = (error: object): ActionTypes => ({
  type: FETCH_ACCOUNT_FAILURE,
  payload: {
    error,
  },
});

export const fetchAccount = (id: string) => {
  return (dispatch: (action: ActionTypes) => {}): void => {
    dispatch(fetchAccountRequest());

    fetch(`https://api.leeloo.ai/api/v1/accounts/${id}?include=orders`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-Leeloo-AuthToken':
          'cmpc3hcajyh3e5ksz6xho9t77flp4pesa300js9y8w9v6xptzj0vlk0halesk27hgqslukjxpepzkmaz6jpfj8zw0x5fwsajezvb',
      },
    })
      .then((response) => response.json())
      .then((responseJson) => dispatch(fetchAccountSuccess(responseJson)))
      .catch((error) => dispatch(fetchAccountFailure(error)));
  };
};

export const setAccountModalVisible = (value: boolean): ActionTypes => ({
  type: SET_ACCOUNT_MODAL_VISIBLE,
  payload: {
    value,
  },
});
