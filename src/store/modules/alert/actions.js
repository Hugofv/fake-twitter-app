import { ADD_ALERT, DELETE_ALERT } from './types';

import uuidv4 from 'uuid/v4';

const Type = {
  SUCCESS: 'success',
  ERROR: 'error',
  WARNING: 'warning',
  INFO: 'info',
};

export const success = item => dispatch => {
  dispatch({
    type: ADD_ALERT,
    response: {
      key: uuidv4(),
      type: Type.SUCCESS,
      message: item.message,
      title: item.title,
    },
  });
};

export const error = item => dispatch => {
  dispatch({
    type: ADD_ALERT,
    response: {
      key: uuidv4(),
      type: Type.ERROR,
      message: item.message,
      title: item.title,
    },
  });
};

export const deleteAlert = key => dispatch => {
  dispatch({
    type: DELETE_ALERT,
    response: key,
  });
};
