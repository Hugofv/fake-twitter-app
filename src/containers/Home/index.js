import React, { useState, useEffect } from 'react';
import * as TweetActions from './../../store/modules/tweet/actions';

import Page from '../../components/Page';
import {
  Grid,
  CircularProgress,
  Button,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Box,
  Typography,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import {
  TAB_TWEETS,
  TAB_PHOTOS_VIDEOS,
  TAB_FOLLOWERS,
  TAB_FOLLOWING,
} from '../../contants';
import Tweets from './components/Tweets';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const Home = () => {
  const { t } = useTranslation();

  const user = useSelector(state => state.user);
  const tweet = useSelector(state => state.tweet);
  const app = useSelector(state => state.app);
  const dispatch = useDispatch();

  const tweetar = tweetText => {
    dispatch(TweetActions.tweetar(tweetText));
  };

  useEffect(() => {
    dispatch(TweetActions.fetchTweets());
  }, []);

  return (
    <Page>
      <TabPanel value={app.currentTab} index={TAB_TWEETS}>
        <Tweets tweetar={tweetar} tweet={tweet} user={user} />
      </TabPanel>
      <TabPanel value={app.currentTab} index={TAB_PHOTOS_VIDEOS}>
        Item Two
      </TabPanel>
      <TabPanel value={app.currentTab} index={TAB_FOLLOWING}>
        Item Three
      </TabPanel>
      <TabPanel value={app.currentTab} index={TAB_FOLLOWERS}>
        Item Three
      </TabPanel>
    </Page>
  );
};

export default Home;
