import * as React from 'react';
import { Provider } from 'react-redux';
import Router from './router';
import store from './redux/store';

const App: React.FC = () => (
  <Provider store={store}>
    <Router />
  </Provider>
);

export default App;
