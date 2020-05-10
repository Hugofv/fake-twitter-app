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

import produce from 'immer';

const InitialState = {
  collection: [],
  filter: '',
};

export default function book(state = InitialState, action) {
  switch (action.type) {
    case ADD_BOOK_REQUEST:
    case UPDATE_BOOK_REQUEST:
    case FETCH_BOOK_REQUEST:
    case DELETE_BOOK_REQUEST:
      return produce(state, draft => {
        draft.loading = true;
        draft.success = false;
      });

    case ADD_BOOK_SUCCESS:
      return produce(state, draft => {
        draft.loading = false;
        draft.success = true;
        draft.collection.push(action.response);
      });

    case UPDATE_BOOK_SUCCESS:
    case ADD_COMMENT_SUCCESS:
      return produce(state, draft => {
        draft.loading = false;
        draft.success = true;

        var index = draft.collection.findIndex(
          e => e.id === action.response.id
        );

        draft.collection[index] = action.response;
      });

    case DELETE_BOOK_SUCCESS:
      return produce(state, draft => {
        draft.loading = false;
        draft.success = true;

        var index = draft.collection.findIndex(
          e => e.id === action.response.id
        );

        draft.collection.splice(index, 1);
      });

    case FETCH_BOOK_FAILED:
    case ADD_BOOK_FAILED:
    case UPDATE_BOOK_FAILED:
    case DELETE_BOOK_FAILED:
      return produce(state, draft => {
        draft.loading = false;
        draft.success = false;
      });

    case FETCH_BOOK_SUCCESS:
      return produce(state, draft => {
        draft.loading = false;
        draft.collection = action.response;
      });

    default:
      return state;
  }
}
