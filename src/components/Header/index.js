import * as UserActions from '../../store/modules/user/actions';
import * as AppActions from '../../store/modules/app/actions';

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
  Tabs,
  Tab,
  Menu,
  MenuItem,
} from '@material-ui/core';
import React, { useRef, useState, useEffect } from 'react';

import { useTranslation } from 'react-i18next';
import {
  CoverPicture,
  BoxEdit,
  HeaderContainer,
  PaperActions,
  ListStyled,
  BoxTabs,
  BoxConfig,
} from './styles';
import { Edit, Language } from '@material-ui/icons';
import ProfilePicture from '../ProfilePicture';
import { useSelector, useDispatch } from 'react-redux';
import {
  TAB_TWEETS,
  TAB_PHOTOS_VIDEOS,
  TAB_FOLLOWING,
  TAB_FOLLOWERS,
} from '../../contants';
import JavascriptTimeAgo from 'javascript-time-ago';

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

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Header = () => {
  const user = useSelector(state => state.user);
  const tweet = useSelector(state => state.tweet);
  const app = useSelector(state => state.app);

  const dispatch = useDispatch();

  const { t, i18n } = useTranslation();
  const refPicture = useRef();
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const openPopover = Boolean(anchorEl);

  /**
   * Open menu with options the language
   */
  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  /**
   * Close menu with options the language
   */
  const handleClose = () => {
    setAnchorEl(null);
  };

  /**
   * Change Tab in Menu.
   */
  const handleChangeTab = (event, newValue) => {
    dispatch(AppActions.changeTab(newValue));
  };

  /**
   * Function for get image file to upload.
   */
  const handleUpload = () => {
    const editor = refPicture.current;
    const canvas = editor.getImageScaledToCanvas();
    var dataURL = canvas.toDataURL();

    dispatch(UserActions.changeCoverImage(dataURL));
  };

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  /**
   * Effect to close modal when the upload image is concluded.
   */
  useEffect(() => {
    if ((!user.loading, user.success)) {
      setOpen(false);
    }
  }, [user.loading, user.success]);

  /**
   * Effect to get following and follower.
   */
  useEffect(() => {
    dispatch(UserActions.fetchFollowing());
    dispatch(UserActions.fetchFollower());
  }, []);

  return (
    <HeaderContainer>
      <Grid container>
        <CoverPicture
          xs={12}
          img={
            (user.me && user.me.imageCover) ||
            require('../../assets/img/cover-default.jpg')
          }
        >
          <BoxEdit onClick={() => setOpen(true)}>
            <Edit />
          </BoxEdit>
        </CoverPicture>
        <Grid xs={12}>
          <PaperActions>
            <BoxTabs>
              <Tabs
                value={app.currentTab}
                onChange={handleChangeTab}
                indicatorColor="primary"
                textColor="primary"
                aria-label="simple tabs example"
                centered
              >
                <Tab
                  label={
                    <ListItemText
                      primaryTypographyProps={TextPrimary}
                      secondaryTypographyProps={TextSecondary}
                      primary={t('common.tweets')}
                      secondary={tweet.collection.length}
                    />
                  }
                  {...a11yProps(TAB_TWEETS)}
                />
                <Tab
                  label={
                    <ListItemText
                      primaryTypographyProps={TextPrimary}
                      secondaryTypographyProps={TextSecondary}
                      primary={t('common.photos_videos')}
                      secondary={user.photosVideos.length}
                    />
                  }
                  {...a11yProps(TAB_PHOTOS_VIDEOS)}
                />
                <Tab
                  label={
                    <ListItemText
                      primaryTypographyProps={TextPrimary}
                      secondaryTypographyProps={TextSecondary}
                      primary={t('common.following')}
                      secondary={user.following.length}
                    />
                  }
                  {...a11yProps(TAB_FOLLOWING)}
                />
                <Tab
                  label={
                    <ListItemText
                      primaryTypographyProps={TextPrimary}
                      secondaryTypographyProps={TextSecondary}
                      primary={t('common.followers')}
                      secondary={user.followers.length}
                    />
                  }
                  {...a11yProps(TAB_FOLLOWERS)}
                />
              </Tabs>
            </BoxTabs>
            <BoxConfig>
              <Language
                aria-label="account of current user"
                aria-controls="language"
                aria-haspopup="true"
                onClick={handleMenu}
              />
            </BoxConfig>
          </PaperActions>
        </Grid>
      </Grid>

      <Menu
        id="language"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={openPopover}
        onClose={handleClose}
      >
        <MenuItem onClick={() => changeLanguage('ptBR')}>
          {t('common.portugues_brasil')}
        </MenuItem>
        <MenuItem onClick={() => changeLanguage('enUS')}>
          {t('common.english')}
        </MenuItem>
      </Menu>

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
