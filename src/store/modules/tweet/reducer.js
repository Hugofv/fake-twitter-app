import {
  ADD_TWEET_SUCCESS, ADD_TWEET_REQUEST,
} from './types';

import produce from 'immer';

const InitialState = {
  collection: [
    {
      user: {
        imageProfile:
          'https://upload.wikimedia.org/wikipedia/pt/thumb/3/3d/Twitter_logo_2012.svg/1200px-Twitter_logo_2012.svg.png',
        name: 'Twitter',
        bio:
          'Your official source for news, updates, and tips from twitter, Inc.',
        nickname: '@twitter',
        address: 'San Francisco, CA',
        link: 'blog.twitter.com',
        joined: '2019-02-01',
      },
      tweet:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever sinc",
      createdAt: '2020-01-01 02:00:50',
    },
  ],
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
        draft.collection.unshift(action.response);
      });
    default:
      return state;
  }
}
