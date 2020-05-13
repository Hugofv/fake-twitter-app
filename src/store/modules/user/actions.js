import {
  GET_ME_REQUEST,
  GET_ME_SUCCESS,
  UPDATE_PROFILE_IMAGE_SUCCESS,
  UPDATE_COVER_IMAGE_SUCCESS,
  UPDATE_COVER_IMAGE_REQUEST,
  UPDATE_PROFILE_IMAGE_REQUEST,
  UPDATE_NAME_SUCCESS,
  UPDATE_NAME_REQUEST,
  ADD_FOLLOWING_SUCCESS,
  ADD_FOLLOWING_REQUEST,
  FETCH_SUGGESTION_SUCCESS,
  FETCH_FOLLOWING_SUCCESS,
  FETCH_FOLLOWER_SUCCESS,
} from './types';
import api from '../../../services/api';
import _ from 'lodash';

export const getMe = userId => (dispatch, getState) => {
  dispatch({
    type: GET_ME_REQUEST,
  });

  api.get(`/users/${userId}`).then(({ data }) => {
    dispatch({
      type: GET_ME_SUCCESS,
      response: data,
    });
  });
};

export const changeProfileImage = image => (dispatch, getState) => {
  dispatch({
    type: UPDATE_PROFILE_IMAGE_REQUEST,
  });

  const me = getState().user.me;

  api.put(`/users/${me.id}`, { ...me, imageProfile: image }).then(() => {
    dispatch({
      type: UPDATE_PROFILE_IMAGE_SUCCESS,
      response: image,
    });
  });
};

export const changeCoverImage = image => (dispatch, getState) => {
  dispatch({
    type: UPDATE_COVER_IMAGE_REQUEST,
  });

  const me = getState().user.me;

  api.put(`/users/${me.id}`, { ...me, imageCover: image }).then(() => {
    dispatch({
      type: UPDATE_COVER_IMAGE_SUCCESS,
      response: image,
    });
  });
};

export const changeName = name => (dispatch, getState) => {
  dispatch({
    type: UPDATE_NAME_REQUEST,
  });

  const me = getState().user.me;

  api.put(`/users/${me.id}`, { ...me, name }).then(() => {
    dispatch({
      type: UPDATE_NAME_SUCCESS,
      response: name,
    });
  });
};

export const addFollowing = user => (dispatch, getState) => {
  dispatch({
    type: ADD_FOLLOWING_REQUEST,
  });

  api.put(`/users/${user.id}`, { ...user, following: true }).then(() => {
    dispatch({
      type: ADD_FOLLOWING_SUCCESS,
      response: user,
    });

    dispatch(fetchSuggestions())
    dispatch(fetchFollower())
  });
};

export const fetchSuggestions = () => dispatch => {
  api.get(`users?_limit=4&following=false`).then(({ data }) => {
    dispatch({
      type: FETCH_SUGGESTION_SUCCESS,
      response: data,
    });
  });
};

export const fetchFollowing = () => dispatch => {
  api.get(`users?following=true`).then(({ data }) => {
    dispatch({
      type: FETCH_FOLLOWING_SUCCESS,
      response: data,
    });
  });
};

export const fetchFollower = () => dispatch => {
  api.get(`users?follower=true`).then(({ data }) => {
    dispatch({
      type: FETCH_FOLLOWER_SUCCESS,
      response: data,
    });
  });
};
