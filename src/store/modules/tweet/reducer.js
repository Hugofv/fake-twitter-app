import { ADD_TWEET_SUCCESS, FETCH_TWEET_SUCCESS, ADD_TWEET_REQUEST } from './types';

import produce from 'immer';

const InitialState = {
  collection: [],
  loading: false,
  success: false,
};

export default function tweet(state = InitialState, action) {
  switch (action.type) {
    case ADD_TWEET_REQUEST:
      return produce(state, draft => {
        draft.loading = true;
        draft.success = false;
      });

    case ADD_TWEET_SUCCESS:
      return produce(state, draft => {
        draft.loading = false;
        draft.success = true;
        draft.collection.unshift(action.response);
      });

    case FETCH_TWEET_SUCCESS:
      return produce(state, draft => {
        draft.collection = action.response;
      });

    default:
      return state;
  }
}
