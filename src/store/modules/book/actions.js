import * as AlertActions from '../alert/actions';

import {
  ADD_BOOK_FAILED,
  ADD_BOOK_REQUEST,
  ADD_BOOK_SUCCESS,
  ADD_COMMENT_SUCCESS,
  DELETE_BOOK_FAILED,
  DELETE_BOOK_REQUEST,
  DELETE_BOOK_SUCCESS,
  FETCH_BOOK_FAILED,
  FETCH_BOOK_REQUEST,
  FETCH_BOOK_SUCCESS,
  UPDATE_BOOK_FAILED,
  UPDATE_BOOK_REQUEST,
  UPDATE_BOOK_SUCCESS,
} from './types';

import api from '../../../services/api';

export const save = book => dispatch => {
  dispatch({
    type: ADD_BOOK_REQUEST,
  });

  api
    .post('/api/book', book)
    .then(({ data }) => {
      dispatch(
        AlertActions.success({
          message: 'message.new_book_success',
          title: 'message.success',
        })
      );

      dispatch({
        type: ADD_BOOK_SUCCESS,
        response: data,
      });
    })
    .catch(error => {
      dispatch(
        AlertActions.error({
          message: 'message.new_book_error',
          title: 'message.failed',
        })
      );

      dispatch({
        type: ADD_BOOK_FAILED,
      });
    });
};

export const addComment = (id, comment) => dispatch => {
  api
    .post(`/api/book/${id}/comment`, { description: comment })
    .then(({ data }) => {
      dispatch(
        AlertActions.success({
          message: 'message.new_comment_success',
          title: 'message.success',
        })
      );

      dispatch({
        type: ADD_COMMENT_SUCCESS,
        response: data,
      });
    })
    .catch(error => {
      dispatch(
        AlertActions.error({
          message: 'message.new_comment_error',
          title: 'message.failed',
        })
      );

      dispatch({
        type: ADD_BOOK_FAILED,
      });
    });
};

export const edit = (book, id) => dispatch => {
  dispatch({
    type: UPDATE_BOOK_REQUEST,
  });

  api
    .put(`/api/book/${id}`, book)
    .then(({ data }) => {
      dispatch(
        AlertActions.success({
          message: 'message.update_book_success',
          title: 'message.success',
        })
      );

      dispatch({
        type: UPDATE_BOOK_SUCCESS,
        response: data,
      });
    })
    .catch(error => {
      dispatch(
        AlertActions.error({
          message: 'message.update_book_error',
          title: 'message.failed',
        })
      );

      dispatch({
        type: UPDATE_BOOK_FAILED,
      });
    });
};

export const delet = id => dispatch => {
  dispatch({
    type: DELETE_BOOK_REQUEST,
  });

  api
    .delete(`/api/book/${id}`)
    .then(() => {
      dispatch(
        AlertActions.success({
          message: 'message.delete_book_success',
          title: 'message.success',
        })
      );

      dispatch({
        type: DELETE_BOOK_SUCCESS,
        response: { id },
      });
    })
    .catch(() => {
      dispatch(
        AlertActions.error({
          message: 'message.delete_book_error',
          title: 'message.failed',
        })
      );

      dispatch({
        type: DELETE_BOOK_FAILED,
      });
    });
};

export const list = () => dispatch => {
  dispatch({
    type: FETCH_BOOK_REQUEST,
  });

  api
    .get('/api/book')
    .then(({ data }) => {
      dispatch({
        type: FETCH_BOOK_SUCCESS,
        response: data,
      });
    })
    .catch(error => {
      dispatch({
        type: FETCH_BOOK_FAILED,
      });
    });
};
