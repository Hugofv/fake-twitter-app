import {
  Grid,
  Dialog,
  DialogContent,
  Button,
  DialogActions,
} from '@material-ui/core';
import React, { useRef, useState } from 'react';

import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { CoverPicture, BoxEdit } from './styles';
import { Edit } from '@material-ui/icons';
import ProfilePicture from '../ProfilePicture';

const Header = () => {
  const { t } = useTranslation();
  const refPicture = useRef();
  const [open, setOpen] = useState(false);

  /**
   * Function for get image file to upload.
   */
  const handleUpload = () => {
    const editor = refPicture.current;
    const canvas = editor.getImageScaledToCanvas()
    var dataURL = canvas.toDataURL();

    console.log('DataUrl', dataURL)
  };

  return (
    <>
      <Grid container>
        <CoverPicture
          xs={12}
          img="https://i.pinimg.com/originals/2f/84/5b/2f845b8ef378f3084dc006e84c8bfcc3.jpg"
        >
          <BoxEdit onClick={() => setOpen(true)}>
            <Edit />
          </BoxEdit>
        </CoverPicture>
      </Grid>

      <Dialog open={open} fullWidth maxWidth="lg">
        <DialogContent>
          <ProfilePicture width={1200} height={300} refPicture={refPicture} />
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
