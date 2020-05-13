import {
  UPDATE_PROFILE_IMAGE_SUCCESS,
  UPDATE_COVER_IMAGE_SUCCESS,
  UPDATE_PROFILE_IMAGE_REQUEST,
  UPDATE_COVER_IMAGE_REQUEST,
  UPDATE_NAME_REQUEST,
  UPDATE_NAME_SUCCESS,
  ADD_FOLLOWING_REQUEST,
  ADD_FOLLOWING_SUCCESS,
  GET_ME_SUCCESS,
} from './types';

import produce from 'immer';

const InitialState = {
  me: {
    id: '868a67dc-df50-4fe8-aa07-7190f6537936',
    imageProfile: '',
    imageCover: '',
    name: '',
    bio: '',
    nickname: '',
    address: '',
    link: '',
    joined: '',
  },
  loading: false,
  success: false,
  followers: [],
  following: [],
  photosVideos: [],
  suggestions: [
    {
      id: 'dc91a780-13e8-4f9a-a3e2-77c5950fac11',
      imageProfile:
        'https://upload.wikimedia.org/wikipedia/pt/thumb/3/3d/Twitter_logo_2012.svg/1200px-Twitter_logo_2012.svg.png',
      imageCover:
        'https://i.pinimg.com/originals/2f/84/5b/2f845b8ef378f3084dc006e84c8bfcc3.jpg',
      name: 'Hugo Fernandes',
      bio:
        'Your official source for news, updates, and tips from twitter, Inc.',
      nickname: '@twitter',
      address: 'San Francisco, CA',
      link: 'blog.twitter.com',
      joined: '2019-02-01',
    },
    {
      id: '231066c3-de60-45a2-91fd-077615845aaa',
      imageProfile:
        'https://upload.wikimedia.org/wikipedia/pt/thumb/3/3d/Twitter_logo_2012.svg/1200px-Twitter_logo_2012.svg.png',
      imageCover:
        'https://i.pinimg.com/originals/2f/84/5b/2f845b8ef378f3084dc006e84c8bfcc3.jpg',
      name: 'Hugo Fernandes',
      bio:
        'Your official source for news, updates, and tips from twitter, Inc.',
      nickname: '@twitter',
      address: 'San Francisco, CA',
      link: 'blog.twitter.com',
      joined: '2019-02-01',
    },
  ],
};

export default function user(state = InitialState, action) {
  switch (action.type) {
    case UPDATE_PROFILE_IMAGE_REQUEST:
    case UPDATE_COVER_IMAGE_REQUEST:
    case UPDATE_NAME_REQUEST:
    case ADD_FOLLOWING_REQUEST:
      return produce(state, draft => {
        draft.loading = true;
        draft.success = false;
      });

    case GET_ME_SUCCESS:
      return produce(state, draft => {
        draft.me = action.response;
      });

    case UPDATE_PROFILE_IMAGE_SUCCESS:
      return produce(state, draft => {
        draft.me.imageProfile = action.response;
        draft.loading = false;
        draft.success = true;
      });

    case UPDATE_COVER_IMAGE_SUCCESS:
      return produce(state, draft => {
        draft.me.imageCover = action.response;
        draft.loading = false;
        draft.success = true;
      });

    case UPDATE_NAME_SUCCESS:
      return produce(state, draft => {
        draft.me.name = action.response;
        draft.loading = false;
        draft.success = true;
      });

    case ADD_FOLLOWING_SUCCESS:
      let newSuggestion = state.suggestions.filter(
        suggestion => suggestion.id !== action.response.id
      );

      return produce(state, draft => {
        draft.following.push(action.response);
        draft.suggestions = newSuggestion;
      });

    default:
      return state;
  }
}
