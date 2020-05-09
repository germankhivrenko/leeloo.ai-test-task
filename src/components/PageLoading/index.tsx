import * as React from 'react';
import { Spin } from 'antd';

const PageLoading: React.FC = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'fixed',
      width: '100vw',
      height: '100vh',
    }}
  >
    <Spin size="large" />
  </div>
);

export default PageLoading;
