import {
  Grid,
  Dialog,
  DialogContent,
  Button,
  DialogActions,
  Paper,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import React, { useRef, useState } from 'react';

import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import {
  CoverPicture,
  BoxEdit,
  HeaderContainer,
  PaperActions,
  ListStyled,
} from './styles';
import { Edit } from '@material-ui/icons';
import ProfilePicture from '../ProfilePicture';

const TextPrimary = {
  style: {
    color: 'rgba(0, 0, 0, 0.6)',
    fontSize: '.8em',
    textTransform: 'uppercase',
  },
};

const TextSecondary = {
  style: {
    color: '#555554',
    fontSize: '1.3em',
  },
};

const Header = () => {
  const { t } = useTranslation();
  const refPicture = useRef();
  const [open, setOpen] = useState(false);

  /**
   * Function for get image file to upload.
   */
  const handleUpload = () => {
    const editor = refPicture.current;
    const canvas = editor.getImageScaledToCanvas();
    var dataURL = canvas.toDataURL();

    console.log('DataUrl', dataURL);
  };

  return (
    <HeaderContainer>
      <Grid container>
        <CoverPicture
          xs={12}
          img="https://i.pinimg.com/originals/2f/84/5b/2f845b8ef378f3084dc006e84c8bfcc3.jpg"
        >
          <BoxEdit onClick={() => setOpen(true)}>
            <Edit />
          </BoxEdit>
        </CoverPicture>
        <Grid xs={12}>
          <PaperActions>
            <ListStyled>
              <ListItem>
                <ListItemText
                  primaryTypographyProps={TextPrimary}
                  secondaryTypographyProps={TextSecondary}
                  primary={t('common.tweets')}
                  secondary="1,755"
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primaryTypographyProps={TextPrimary}
                  secondaryTypographyProps={TextSecondary}
                  primary={t('common.photos_videos')}
                  secondary="1,755"
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primaryTypographyProps={TextPrimary}
                  secondaryTypographyProps={TextSecondary}
                  primary={t('common.following')}
                  secondary="1,755"
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primaryTypographyProps={TextPrimary}
                  secondaryTypographyProps={TextSecondary}
                  primary={t('common.followers')}
                  secondary="1,755"
                />
              </ListItem>
            </ListStyled>
          </PaperActions>
        </Grid>
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
    </HeaderContainer>
  );
};

Header.prototype = {};

export default Header;
