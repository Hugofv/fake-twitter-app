import App, { App as AppComponent } from '../App';

import { Provider } from 'react-redux';
import React from 'react';
import configureMockStore from 'redux-mock-store';
import { render } from '@testing-library/react';
import thunk from 'redux-thunk';

const mockStore = configureMockStore([thunk]);

const store = mockStore({
  author: {},
  book: {},
  category: {},
  alert: {},
});

describe('App connected', () => {
  test('renders the component', () => {
    const { getByTestId } = render(
      <Provider {...{ store }}>
        <App />
      </Provider>
    );

    expect(getByTestId('app')).toBeInTheDocument();
  });
});
