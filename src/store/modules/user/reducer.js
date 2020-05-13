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
  FETCH_SUGGESTION_SUCCESS,
  FETCH_FOLLOWING_SUCCESS,
  FETCH_FOLLOWER_SUCCESS,
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
  suggestions: [],
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

    case FETCH_SUGGESTION_SUCCESS:
      return produce(state, draft => {
        draft.suggestions = action.response;
      });

    case FETCH_FOLLOWING_SUCCESS:
      return produce(state, draft => {
        draft.following = action.response;
      });

    case FETCH_FOLLOWER_SUCCESS:
      return produce(state, draft => {
        draft.followers = action.response;
      });

    default:
      return state;
  }
}
