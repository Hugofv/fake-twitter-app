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

import produce from 'immer';

const InitialState = {
  collection: [],
  loading: false,
  success: false,
};

export default function category(state = InitialState, action) {
  switch (action.type) {
    case ADD_CATEGORY_REQUEST:
    case UPDATE_CATEGORY_REQUEST:
    case FETCH_CATEGORY_REQUEST:
    case DELETE_CATEGORY_REQUEST:
      return produce(state, draft => {
        draft.loading = true;
        draft.success = false;
      });

    case ADD_CATEGORY_SUCCESS:
      return produce(state, draft => {
        draft.loading = false;
        draft.success = true;
        draft.collection.push(action.response);
      });

    case UPDATE_CATEGORY_SUCCESS:
      return produce(state, draft => {
        draft.loading = false;
        draft.success = true;

        var index = draft.collection.findIndex(
          e => e.id === action.response.id
        );

        draft.collection[index] = action.response;
      });

    case DELETE_CATEGORY_SUCCESS:
      return produce(state, draft => {
        draft.loading = false;
        draft.success = true;

        var index = draft.collection.findIndex(
          e => e.id === action.response.id
        );

        draft.collection.splice(index, 1);
      });

    case ADD_CATEGORY_FAILED:
    case UPDATE_CATEGORY_FAILED:
    case DELETE_CATEGORY_FAILED:
    case FETCH_CATEGORY_FAILED:
      return produce(state, draft => {
        draft.loading = false;
      });

    case FETCH_CATEGORY_SUCCESS:
      return produce(state, draft => {
        draft.loading = false;
        draft.collection = action.response;
      });

    default:
      return state;
  }
}
