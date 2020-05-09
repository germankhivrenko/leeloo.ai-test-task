export type Pagination = {
  current: number;
  pageSize: number;
  total: number;
};

export type AccountData = {
  id: string;
  name: string;
  from: string;
  lastMessageTime: string;
};

export type AccountList = {
  data: AccountData[];
  pagination: Pagination;
  loading: boolean;
  error: object;
};

export type Order = {
  id: string;
  price: number;
  currency: string;
  status: string;
};

export type Account = {
  included: {
    orders: Order[];
  };
  loading: boolean;
  error: object;
};

export type State = {
  accountList: AccountList;
  account: Account;
  accountModalVisible: boolean;
};
