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

import produce from 'immer';

const InitialState = {
  collection: [],
  loading: false,
  success: false,
};

export default function author(state = InitialState, action) {
  switch (action.type) {
    case ADD_AUTHOR_REQUEST:
    case UPDATE_AUTHOR_REQUEST:
    case FETCH_AUTHOR_REQUEST:
    case DELETE_AUTHOR_REQUEST:
      return produce(state, draft => {
        draft.loading = true;
        draft.success = false;
      });

    case ADD_AUTHOR_SUCCESS:
      return produce(state, draft => {
        draft.loading = false;
        draft.success = true;
        draft.collection.push(action.response);
      });

    case UPDATE_AUTHOR_SUCCESS:
      return produce(state, draft => {
        draft.loading = false;
        draft.success = true;

        var index = draft.collection.findIndex(
          e => e.id === action.response.id
        );

        draft.collection[index] = action.response;
      });

    case DELETE_AUTHOR_SUCCESS:
      return produce(state, draft => {
        draft.loading = false;
        draft.success = true;

        var index = draft.collection.findIndex(
          e => e.id === action.response.id
        );

        draft.collection.splice(index, 1);
      });

    case FETCH_AUTHOR_FAILED:
    case ADD_AUTHOR_FAILED:
    case UPDATE_AUTHOR_FAILED:
    case DELETE_AUTHOR_FAILED:
      return produce(state, draft => {
        draft.loading = false;
        draft.success = false;
      });

    case FETCH_AUTHOR_SUCCESS:
      return produce(state, draft => {
        draft.loading = false;
        draft.collection = action.response;
      });

    default:
      return state;
  }
}
