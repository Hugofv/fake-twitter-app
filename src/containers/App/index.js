import * as UserActions from './../../store/modules/user/actions';

import { GlobalStyle } from './styles';
import { Provider, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { Router } from 'react-router-dom';
import Routes from './routes';
import { ThemeProvider } from '@material-ui/core';
import history from '../../services/history';
import theme from './theme';
import JavascriptTimeAgo from 'javascript-time-ago';

import en from 'javascript-time-ago/locale/en';
import pt from 'javascript-time-ago/locale/pt';

JavascriptTimeAgo.addLocale(en);
JavascriptTimeAgo.addLocale(pt);

JavascriptTimeAgo.setDefaultLocale('pt-br');

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(UserActions.getMe('868a67dc-df50-4fe8-aa07-7190f6537936'));
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <GlobalStyle />
        <Routes />
      </Router>
    </ThemeProvider>
  );
};

export default App;
