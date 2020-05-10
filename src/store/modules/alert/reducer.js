import { ADD_ALERT, DELETE_ALERT } from './types';

import produce from 'immer';

const InitialState = {
  collection: [],
};

export default function alert(state = InitialState, action) {
  switch (action.type) {
    case ADD_ALERT:
      return produce(state, draft => {
        draft.collection.push(action.response);
      });

    case DELETE_ALERT:
      return produce(state, draft => {
        var index = draft.collection.findIndex(e => e.key === action.response);
        draft.collection.splice(index, 1);
      });

    default:
      return state;
  }
}
