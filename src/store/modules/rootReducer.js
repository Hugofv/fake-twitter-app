import alert from './alert/reducer';
import tweet from './tweet/reducer';
import { combineReducers } from 'redux';

export default combineReducers({
  tweet,
  alert,
});
