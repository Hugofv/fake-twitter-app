import {
  UPDATE_PROFILE_IMAGE_SUCCESS,
  UPDATE_COVER_IMAGE_SUCCESS,
  UPDATE_COVER_IMAGE_REQUEST,
  UPDATE_PROFILE_IMAGE_REQUEST,
  UPDATE_NAME_SUCCESS,
  UPDATE_NAME_REQUEST,
  ADD_FOLLOWING_SUCCESS,
  ADD_FOLLOWING_REQUEST,
} from './types';

export const changeProfileImage = image => dispatch => {
  dispatch({
    type: UPDATE_PROFILE_IMAGE_REQUEST,
  });

  dispatch({
    type: UPDATE_PROFILE_IMAGE_SUCCESS,
    response: image,
  });
};

export const changeCoverImage = image => dispatch => {
  dispatch({
    type: UPDATE_COVER_IMAGE_REQUEST
  });

  dispatch({
    type: UPDATE_COVER_IMAGE_SUCCESS,
    response: image,
  });
};

export const changeName = name => dispatch => {
  dispatch({
    type: UPDATE_NAME_REQUEST
  });

  dispatch({
    type: UPDATE_NAME_SUCCESS,
    response: name,
  });
};

export const addFollowing = user => dispatch => {
  dispatch({
    type: ADD_FOLLOWING_REQUEST
  });

  dispatch({
    type: ADD_FOLLOWING_SUCCESS,
    response: user,
  });
};
