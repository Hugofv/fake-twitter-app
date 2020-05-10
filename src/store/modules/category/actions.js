import * as AlertActions from '../alert/actions';

import {
  ADD_CATEGORY_FAILED,
  ADD_CATEGORY_REQUEST,
  ADD_CATEGORY_SUCCESS,
  DELETE_CATEGORY_FAILED,
  DELETE_CATEGORY_REQUEST,
  DELETE_CATEGORY_SUCCESS,
  FETCH_CATEGORY_FAILED,
  FETCH_CATEGORY_REQUEST,
  FETCH_CATEGORY_SUCCESS,
  UPDATE_CATEGORY_FAILED,
  UPDATE_CATEGORY_REQUEST,
  UPDATE_CATEGORY_SUCCESS,
} from './types';

import api from '../../../services/api';

export const save = category => dispatch => {
  dispatch({
    type: ADD_CATEGORY_REQUEST,
  });

  api
    .post('/api/category', category)
    .then(({ data }) => {
      dispatch(
        AlertActions.success({
          message: 'message.new_category_success',
          title: 'message.success',
        })
      );

      dispatch({
        type: ADD_CATEGORY_SUCCESS,
        response: data,
      });
    })
    .catch(error => {
      dispatch(
        AlertActions.error({
          message: 'message.new_category_error',
          title: 'message.failed',
        })
      );

      dispatch({
        type: ADD_CATEGORY_FAILED,
      });
    });
};

export const edit = (category, id) => dispatch => {
  dispatch({
    type: UPDATE_CATEGORY_REQUEST,
  });

  api
    .put(`/api/category/${id}`, category)
    .then(({ data }) => {
      dispatch(
        AlertActions.success({
          message: 'message.update_category_success',
          title: 'message.success',
        })
      );

      dispatch({
        type: UPDATE_CATEGORY_SUCCESS,
        response: data,
      });
    })
    .catch(() => {
      dispatch(
        AlertActions.error({
          message: 'message.update_category_error',
          title: 'message.failed',
        })
      );

      dispatch({
        type: UPDATE_CATEGORY_FAILED,
      });
    });
};

export const delet = id => dispatch => {
  dispatch({
    type: DELETE_CATEGORY_REQUEST,
  });

  api
    .delete(`/api/category/${id}`)
    .then(() => {
      dispatch(
        AlertActions.success({
          message: 'message.delete_category_success',
          title: 'message.success',
        })
      );

      dispatch({
        type: DELETE_CATEGORY_SUCCESS,
        response: { id },
      });
    })
    .catch(() => {
      dispatch(
        AlertActions.error({
          message: 'message.delete_category_error',
          title: 'message.failed',
        })
      );

      dispatch({
        type: DELETE_CATEGORY_FAILED,
      });
    });
};

export const list = () => dispatch => {
  dispatch({
    type: FETCH_CATEGORY_REQUEST,
  });

  api
    .get('/api/category')
    .then(({ data }) => {
      dispatch({
        type: FETCH_CATEGORY_SUCCESS,
        response: data,
      });
    })
    .catch(() => {
      dispatch({
        type: FETCH_CATEGORY_FAILED,
      });
    });
};
