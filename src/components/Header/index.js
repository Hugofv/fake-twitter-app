import * as UserActions from '../../store/modules/user/actions';

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
import React, { useRef, useState, useEffect } from 'react';

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
import { useSelector, useDispatch } from 'react-redux';

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
  const user = useSelector(state => state.user);
  const tweet = useSelector(state => state.tweet);
  const dispatch = useDispatch();

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

    dispatch(UserActions.changeCoverImage(dataURL));
  };

  /**
   * Effect to close modal when the upload image is concluded.
   */
  useEffect(() => {
    if ((!user.me.loading, user.me.success)) {
      setOpen(false);
    }
  }, [user.me.loading, user.me.success]);

  return (
    <HeaderContainer>
      <Grid container>
        <CoverPicture xs={12} img={user.me.imageCover}>
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
                  secondary={tweet.collection.length}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primaryTypographyProps={TextPrimary}
                  secondaryTypographyProps={TextSecondary}
                  primary={t('common.photos_videos')}
                  secondary={user.photosVideos.length}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primaryTypographyProps={TextPrimary}
                  secondaryTypographyProps={TextSecondary}
                  primary={t('common.following')}
                  secondary={user.following.length}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primaryTypographyProps={TextPrimary}
                  secondaryTypographyProps={TextSecondary}
                  primary={t('common.followers')}
                  secondary={user.followers.length}
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
