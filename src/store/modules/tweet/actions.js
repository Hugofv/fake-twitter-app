import { ADD_TWEET_SUCCESS } from './types';

import api from '../../../services/api';

export const tweetar = tweet => dispatch => {
  dispatch({
    type: ADD_TWEET_SUCCESS,
    response: tweet,
  });
};
