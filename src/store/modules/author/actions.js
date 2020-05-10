import * as AlertActions from '../alert/actions';

import {
  ADD_AUTHOR_FAILED,
  ADD_AUTHOR_REQUEST,
  ADD_AUTHOR_SUCCESS,
  DELETE_AUTHOR_FAILED,
  DELETE_AUTHOR_REQUEST,
  DELETE_AUTHOR_SUCCESS,
  FETCH_AUTHOR_FAILED,
  FETCH_AUTHOR_REQUEST,
  FETCH_AUTHOR_SUCCESS,
  UPDATE_AUTHOR_FAILED,
  UPDATE_AUTHOR_REQUEST,
  UPDATE_AUTHOR_SUCCESS,
} from './types';

import api from '../../../services/api';

export const save = author => dispatch => {
  dispatch({
    type: ADD_AUTHOR_REQUEST,
  });

  api
    .post('/api/author', author)
    .then(({ data }) => {
      dispatch(
        AlertActions.success({
          message: 'message.new_author_success',
          title: 'message.success',
        })
      );

      dispatch({
        type: ADD_AUTHOR_SUCCESS,
        response: data,
      });
    })
    .catch(error => {
      dispatch(
        AlertActions.error({
          message: 'message.new_author_error',
          title: 'message.failed',
        })
      );

      dispatch({
        type: ADD_AUTHOR_FAILED,
      });
    });
};

export const edit = (author, id) => dispatch => {
  dispatch({
    type: UPDATE_AUTHOR_REQUEST,
  });

  api
    .put(`/api/author/${id}`, author)
    .then(({ data }) => {
      dispatch(
        AlertActions.success({
          message: 'message.update_author_success',
          title: 'message.success',
        })
      );

      dispatch({
        type: UPDATE_AUTHOR_SUCCESS,
        response: data,
      });
    })
    .catch(error => {
      dispatch(
        AlertActions.error({
          message: 'message.update_author_error',
          title: 'message.failed',
        })
      );

      dispatch({
        type: UPDATE_AUTHOR_FAILED,
      });
    });
};

export const delet = id => dispatch => {
  dispatch({
    type: DELETE_AUTHOR_REQUEST,
  });

  api
    .delete(`/api/author/${id}`)
    .then(() => {
      dispatch(
        AlertActions.success({
          message: 'message.delete_author_success',
          title: 'message.success',
        })
      );

      dispatch({
        type: DELETE_AUTHOR_SUCCESS,
        response: { id },
      });
    })
    .catch(() => {
      dispatch(
        AlertActions.error({
          message: 'message.delete_author_error',
          title: 'message.failed',
        })
      );

      dispatch({
        type: DELETE_AUTHOR_FAILED,
      });
    });
};

export const list = () => dispatch => {
  dispatch({
    type: FETCH_AUTHOR_REQUEST,
  });

  api
    .get('/api/author')
    .then(({ data }) => {
      dispatch({
        type: FETCH_AUTHOR_SUCCESS,
        response: data,
      });
    })
    .catch(error => {
      dispatch({
        type: FETCH_AUTHOR_FAILED,
      });
    });
};
