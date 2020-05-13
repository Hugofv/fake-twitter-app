import alert from './alert/reducer';
import tweet from './tweet/reducer';
import user from './user/reducer';
import app from './app/reducer';
import { combineReducers } from 'redux';

export default combineReducers({
  tweet,
  user,
  app,
  alert,
});
