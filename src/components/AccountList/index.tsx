import * as React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table, Button, Modal } from 'antd';
import { State, AccountData } from '../../redux/reducers/types';
import {
  fetchAccountList,
  setAccountModalVisible,
  fetchAccount,
} from '../../redux/actions';
import { ColumnType } from 'antd/lib/table/interface';

const AccountList: React.FC = () => {
  const dispatch = useDispatch();
  const { data, pagination, loading, error } = useSelector(
    (state: State) => state.accountList,
  );

  useEffect(() => {
    if (error) {
      Modal.error({
        title: 'Oooops',
        content: 'Something went wrong... Please, try one more time...',
      });
    }
  }, [error]);

  useEffect(() => {
    dispatch(fetchAccountList());
  }, []);

  const { current, pageSize } = pagination;

  const columns: ColumnType<AccountData>[] = [
    {
      title: 'Number',
      render: (text: AccountData, record: AccountData, index: number): number =>
        (current - 1) * pageSize + index + 1,
      align: 'center',
    },
    { title: 'Name', dataIndex: 'name' },
    { title: 'Messanger', dataIndex: 'from' },
    { title: 'Last Message Time', dataIndex: 'lastMessageTime' },
    {
      title: 'Additional',
      render: (text: AccountData, record: AccountData): React.ReactElement => (
        <Button
          type="primary"
          onClick={(): void => {
            dispatch(fetchAccount(record.id));
            dispatch(setAccountModalVisible(true));
          }}
        >
          Orders
        </Button>
      ),
    },
  ];

  return (
    <Table
      style={{ margin: '50px', padding: '10px', border: '1px solid #ccc' }}
      rowKey="id"
      columns={columns}
      dataSource={data}
      loading={loading}
      pagination={pagination}
      onChange={({ current, pageSize }): void => {
        dispatch(
          fetchAccountList({
            offset: (current - 1) * pageSize,
            limit: pageSize,
          }),
        );
      }}
    />
  );
};

export default AccountList;
