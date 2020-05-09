import * as React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setAccountModalVisible } from '../../redux/actions';
import { State, Order } from 'redux/reducers/types';
import { Modal, Table } from 'antd';
import { ColumnType } from 'antd/lib/table/interface';
import { ActionTypes } from 'redux/actions/types';

const AccountModal: React.FC = () => {
  const { included, loading, error } = useSelector(
    (state: State) => state.account,
  );
  const visible = useSelector((state: State) => state.accountModalVisible);
  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      Modal.error({
        title: 'Oooops',
        content: 'Something went wrong... Please, try one more time...',
      });
    }
  }, [error]);

  const columns: ColumnType<Order>[] = [
    { title: 'Id', dataIndex: 'id' },
    { title: 'Price', dataIndex: 'price' },
    { title: 'Currency', dataIndex: 'currency' },
    { title: 'Status', dataIndex: 'status' },
  ];

  return (
    <Modal
      width={600}
      visible={visible}
      footer={null}
      maskClosable={false}
      onCancel={(): ActionTypes => dispatch(setAccountModalVisible(false))}
    >
      <Table
        style={{ marginTop: '20px' }}
        rowKey="id"
        columns={columns}
        dataSource={included?.orders}
        loading={loading}
        pagination={false}
      />
    </Modal>
  );
};

export default AccountModal;
