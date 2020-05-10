import { applyMiddleware, compose, createStore } from 'redux';

import thunk from 'redux-thunk';
import rootReducer from './modules/rootReducer';

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose();

const enhancer = composeEnhancers(applyMiddleware(thunk));

const Store = createStore(rootReducer, enhancer);

export default Store;
