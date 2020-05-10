import {
  Grid,
  Dialog,
  DialogContent,
  Button,
  DialogActions,
} from '@material-ui/core';
import React, { useRef, useState } from 'react';
import ProfilePicture from 'profile-picture';

import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { CoverPicture, BoxEdit } from './styles';
import { Edit } from '@material-ui/icons';

const Header = () => {
  const { t } = useTranslation();
  const profilePictureRef = useRef();
  const [open, setOpen] = useState(false);

  const handleUpload = () => {
    const PP = profilePictureRef.current;
    const imageData = PP.getData();
    const file = imageData.file;
    const imageAsDataURL = PP.getImageAsDataUrl();

    console.log('PP', PP);
    console.log('imageData', imageData);
    console.log('file', file);
    console.log('imageAsDataURL', imageAsDataURL);
  };

  return (
    <>
      <Grid container xs={12}>
        <CoverPicture
          xs={12}
          img="https://i.pinimg.com/originals/2f/84/5b/2f845b8ef378f3084dc006e84c8bfcc3.jpg"
        >
          <BoxEdit onClick={() => setOpen(true)}>
            <Edit />
          </BoxEdit>
        </CoverPicture>
      </Grid>

      <Dialog open={open} fullWidth>
        <DialogContent>
          <ProfilePicture
            ref={profilePictureRef}
            useHelper={true}
            debug={true}
          />
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
    </>
  );
};

Header.prototype = {
  title: PropTypes.string.isRequired,
};

export default Header;
