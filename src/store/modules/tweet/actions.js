import { ADD_TWEET_SUCCESS, FETCH_TWEET_SUCCESS } from './types';

import api from '../../../services/api';
import moment from 'moment';

export const tweetar = tweet => (dispatch, getState) => {
  let me = getState().user.me;
  let post = { user: me, tweet, createdAt: moment() };

  api.post(`/tweets`, post).then(() => {
    dispatch({
      type: ADD_TWEET_SUCCESS,
      response: post,
    });
  });
};

export const fetchTweets = () => (dispatch, getState) => {
  api.get('/tweets').then(({ data }) => {
    dispatch({
      type: FETCH_TWEET_SUCCESS,
      response: data,
    });
  });
};
