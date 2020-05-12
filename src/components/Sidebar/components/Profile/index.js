import React, { useRef, useState } from 'react';
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

const Profile = () => {
  const profile = {
    imageProfile: 'https://upload.wikimedia.org/wikipedia/pt/thumb/3/3d/Twitter_logo_2012.svg/1200px-Twitter_logo_2012.svg.png',
    name: 'Twitter',
    bio: 'Your official source for news, updates, and tips from twitter, Inc.',
    nickname: '@twitter',
    address: 'San Francisco, CA',
    link: 'blog.twitter.com',
    joined: '2019-02-01',
  };
  const { t } = useTranslation();
  const refPicture = useRef();
  const [open, setOpen] = useState(false);

  const handleUpload = () => {
    const editor = refPicture.current;
    const canvas = editor.getImageScaledToCanvas();
    var dataURL = canvas.toDataURL();

    console.log('DataUrl', dataURL);
  };

  return (
    <>
      <BoxImage>
        <ProfileImage img={profile.imageProfile} />

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
          <h2>{profile.name}</h2>
          <span>{profile.nickname}</span>
        </InfoName>

        <InfoBio>{profile.bio}</InfoBio>

        <BoxIconInfo>
          <Room /> {profile.address}
        </BoxIconInfo>

        <BoxIconInfo>
          <Link /> {profile.link}
        </BoxIconInfo>

        <BoxIconInfo>
          <QueryBuilder /> {profile.joined}
        </BoxIconInfo>
      </BoxDetail>
    </>
  );
};

export default Profile;
