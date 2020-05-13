import { ADD_TWEET_SUCCESS, FETCH_TWEET_SUCCESS } from './types';

import produce from 'immer';

const InitialState = {
  collection: [  ],
};

export default function tweet(state = InitialState, action) {
  switch (action.type) {
    case ADD_TWEET_SUCCESS:
      return produce(state, draft => {
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
