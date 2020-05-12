import { UPDATE_PROFILE_IMAGE_SUCCESS, UPDATE_COVER_IMAGE_SUCCESS, UPDATE_PROFILE_IMAGE_REQUEST, UPDATE_COVER_IMAGE_REQUEST } from './types';

import produce from 'immer';

const InitialState = {
  me: {
    imageProfile:
      'https://upload.wikimedia.org/wikipedia/pt/thumb/3/3d/Twitter_logo_2012.svg/1200px-Twitter_logo_2012.svg.png',
    imageCover: 'https://i.pinimg.com/originals/2f/84/5b/2f845b8ef378f3084dc006e84c8bfcc3.jpg',
    name: 'Twitter',
    bio: 'Your official source for news, updates, and tips from twitter, Inc.',
    nickname: '@twitter',
    address: 'San Francisco, CA',
    link: 'blog.twitter.com',
    joined: '2019-02-01',
    loading: false,
    success: false,
  },
};

export default function user(state = InitialState, action) {
  switch (action.type) {
    case UPDATE_PROFILE_IMAGE_REQUEST:
    case UPDATE_COVER_IMAGE_REQUEST:
      return produce(state, draft => {
        draft.me.loading = true;
        draft.me.success = false;
      });

    case UPDATE_PROFILE_IMAGE_SUCCESS:
      return produce(state, draft => {
        draft.me.imageProfile = action.response;
        draft.me.loading = false;
        draft.me.success = true;
      });

    case UPDATE_COVER_IMAGE_SUCCESS:
      return produce(state, draft => {
        draft.me.imageCover = action.response;
        draft.me.loading = false;
        draft.me.success = true;
      });
    default:
      return state;
  }
}
