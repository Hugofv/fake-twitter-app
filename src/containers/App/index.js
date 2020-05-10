import Alert from './../../components/Alert';
import { GlobalStyle } from './styles';
import { Provider } from 'react-redux';
import React from 'react';
import { Router } from 'react-router-dom';
import Routes from './routes';
import { ThemeProvider } from '@material-ui/core';
import history from '../../services/history';
import store from './../../store';
import theme from './theme';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router history={history}>
          <GlobalStyle />
          <Alert />
          <Routes />
        </Router>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
