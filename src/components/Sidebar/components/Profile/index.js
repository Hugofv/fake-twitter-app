import * as UserActions from './../../../../store/modules/user/actions';

import React, { useRef, useState, useEffect } from 'react';
import {
  ProfileImage,
  BoxImage,
  BoxDetail,
  BoxIconInfo,
  InfoName,
  InfoBio,
  BoxEdit,
  BoxName,
  CloseIcon,
} from './styles';
import { Room, Link, QueryBuilder, Edit, Close } from '@material-ui/icons';
import {
  Dialog,
  DialogActions,
  Button,
  DialogContent,
  TextField,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import ProfilePicture from '../../../ProfilePicture';
import { useDispatch, useSelector } from 'react-redux';
import ReactTimeAgo from 'react-time-ago/commonjs/ReactTimeAgo';

const Profile = () => {
  const { t } = useTranslation();

  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  const refPicture = useRef();
  const [open, setOpen] = useState(false);
  const [nameText, setNameText] = useState('');
  const [editableName, setEditableName] = useState(false);

  const handleUpload = () => {
    const editor = refPicture.current;
    const canvas = editor.getImageScaledToCanvas();
    var dataURL = canvas.toDataURL();

    dispatch(UserActions.changeProfileImage(dataURL));
  };

  const changeName = () => {
    dispatch(UserActions.changeName(nameText));
  }

  /**
   * Effect to close modal and editable name when the upload image or edit name is concluded.
   */
  useEffect(() => {
    if ((!user.loading, user.success)) {
      setOpen(false);
      setEditableName(false);
    }
  }, [user]);

  console.log(user.me)
  return (
    <>
      <BoxImage>
        <ProfileImage img={(user.me && user.me.imageProfile) || require('../../../../assets/img/avatar-default.png')} />

        <BoxEdit onClick={() => setOpen(true)}>
          <Edit />
        </BoxEdit>
      </BoxImage>

      <Dialog open={open} fullWidth>
        <DialogContent>
          <ProfilePicture width={250} height={300} refPicture={refPicture} />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} variant="contained">
            {t('action.cancel')}
          </Button>
          <Button
            onClick={() => handleUpload()}
            color="primary"
            variant="contained"
          >
            {t('action.upload')}
          </Button>
        </DialogActions>
      </Dialog>

      <BoxDetail>
        <InfoName>
          {editableName ? (
            <TextField
              fullWidth
              defaultValue={user.me.name}
              onChange={event => setNameText(event.target.value)}
              onBlur={changeName}
              InputProps={{
                endAdornment: (
                  <CloseIcon onClick={() => setEditableName(false)} />
                )
              }}
            />
          ) : (
            <BoxName>
              <h2>{user.me && user.me.name}</h2>
              <Edit onClick={() => setEditableName(true)} />
            </BoxName>
          )}
          <span>{user.me.nickname}</span>
        </InfoName>

        <InfoBio>{user.me.bio}</InfoBio>

        <BoxIconInfo>
          <Room /> {user.me.link}
        </BoxIconInfo>

        <BoxIconInfo>
          <Link /> {user.me.link}
        </BoxIconInfo>

        <BoxIconInfo>
          <QueryBuilder /> {user.me.joined && <ReactTimeAgo date={user.me.joined} format="twitter" />}
        </BoxIconInfo>
      </BoxDetail>
    </>
  );
};

export default Profile;
