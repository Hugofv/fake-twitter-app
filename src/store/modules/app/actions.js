import { CHANGE_TAB } from './types';

/**
 * Change tab in home.
 *
 * @param {Number} tab
 */
export const changeTab = tab => dispatch => {
  dispatch({
    type: CHANGE_TAB,
    response: tab,
  });
};
