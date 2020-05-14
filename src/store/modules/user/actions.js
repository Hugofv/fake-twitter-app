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

/**
 * Get user logged.
 *
 * @param {GUID} userId id of the user logged.
 */
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

/**
 * Change image the profile the user logged.
 *
 * @param {String} image
 */
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

/**
 * Change image the cover the user logged.
 *
 * @param {String} image
 */
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

/**
 * Change name the user logged.
 *
 * @param {String} name
 */
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

/**
 * Add Following to user logged.
 *
 * @param {Object} user
 */
export const addFollowing = user => (dispatch) => {
  dispatch({
    type: ADD_FOLLOWING_REQUEST,
  });

  api.put(`/users/${user.id}`, { ...user, following: true }).then(() => {
    dispatch({
      type: ADD_FOLLOWING_SUCCESS,
      response: { ...user, following: true },
    });

    dispatch(fetchSuggestions())
    dispatch(fetchFollower())
  });
};

/**
 * Get users to suggestion to user logged.
 */
export const fetchSuggestions = () => dispatch => {
  api.get(`users?_limit=4&following=false`).then(({ data }) => {
    dispatch({
      type: FETCH_SUGGESTION_SUCCESS,
      response: data,
    });
  });
};

/**
 * Get users following.
 */
export const fetchFollowing = () => dispatch => {
  api.get(`users?following=true`).then(({ data }) => {
    dispatch({
      type: FETCH_FOLLOWING_SUCCESS,
      response: data,
    });
  });
};

/**
 * Get users followers
 */
export const fetchFollower = () => dispatch => {
  api.get(`users?follower=true`).then(({ data }) => {
    dispatch({
      type: FETCH_FOLLOWER_SUCCESS,
      response: data,
    });
  });
};
