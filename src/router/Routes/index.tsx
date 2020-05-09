import * as React from 'react';
import { Switch } from 'react-router-dom';
import * as Loadable from 'react-loadable';
import PageLoading from 'components/PageLoading';
import EnhancedRoute from '../EnhancedRoute';

const AccountList = Loadable({
  loader: () => import('components/AccountList'),
  loading: PageLoading,
});

const AccountModal = Loadable({
  loader: () => import('components/AccountModal'),
  loading: PageLoading,
});

const Routes: React.FC = () => (
  <>
    <Switch>
      <EnhancedRoute
        path="/"
        documentTitle="Accounts"
        component={AccountList}
      />
    </Switch>
    <AccountModal />
  </>
);

export default Routes;
