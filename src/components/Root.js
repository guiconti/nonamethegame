import React from 'react';
import configureStore, { history } from '../store';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
const store = configureStore();
import App from './App';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../plugins/theme';

const Root = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </ConnectedRouter>
    </Provider>
  );
}

export default Root;
