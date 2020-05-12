import {
  UPDATE_PROFILE_IMAGE_SUCCESS,
  UPDATE_COVER_IMAGE_SUCCESS,
  UPDATE_COVER_IMAGE_REQUEST,
  UPDATE_PROFILE_IMAGE_REQUEST,
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
