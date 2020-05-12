import alert from './alert/reducer';
import tweet from './tweet/reducer';
import user from './user/reducer';
import { combineReducers } from 'redux';

export default combineReducers({
  tweet,
  user,
  alert,
});
