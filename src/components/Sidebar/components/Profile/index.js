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
} from './styles';
import { Room, Link, QueryBuilder, Edit } from '@material-ui/icons';
import {
  Dialog,
  DialogActions,
  Button,
  DialogContent,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import ProfilePicture from '../../../ProfilePicture';
import { useDispatch, useSelector } from 'react-redux';

const Profile = () => {
  const { t } = useTranslation();

  const me = useSelector(state => state.user.me);
  const dispatch = useDispatch();

  const refPicture = useRef();
  const [open, setOpen] = useState(false);

  const handleUpload = () => {
    const editor = refPicture.current;
    const canvas = editor.getImageScaledToCanvas();
    var dataURL = canvas.toDataURL();

    dispatch(UserActions.changeProfileImage(dataURL));
  };

  /**
   * Effect to close modal when the upload image is concluded.
   */
  useEffect(() => {
    if ((!me.loading, me.success)) {
      setOpen(false);
    }
  }, [me]);

  return (
    <>
      <BoxImage>
        <ProfileImage img={me.imageProfile} />

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
          <h2>{me.name}</h2>
          <span>{me.nickname}</span>
        </InfoName>

        <InfoBio>{me.bio}</InfoBio>

        <BoxIconInfo>
          <Room /> {me.address}
        </BoxIconInfo>

        <BoxIconInfo>
          <Link /> {me.link}
        </BoxIconInfo>

        <BoxIconInfo>
          <QueryBuilder /> {me.joined}
        </BoxIconInfo>
      </BoxDetail>
    </>
  );
};

export default Profile;
