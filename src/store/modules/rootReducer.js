import alert from './alert/reducer';
import author from './author/reducer';
import book from './book/reducer';
import category from './category/reducer';
import { combineReducers } from 'redux';

export default combineReducers({
  book,
  author,
  category,
  alert,
});
