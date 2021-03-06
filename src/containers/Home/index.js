import React, { useEffect } from 'react';
import * as TweetActions from './../../store/modules/tweet/actions';

import Page from '../../components/Page';
import { Box, Typography } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import {
  TAB_TWEETS,
  TAB_PHOTOS_VIDEOS,
  TAB_FOLLOWERS,
  TAB_FOLLOWING,
} from '../../contants';
import Tweets from './components/Tweets';
import ListProfile from '../../components/ListProfile';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
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

/**
 * Cotainer's Home
 */
const Home = () => {
  const user = useSelector(state => state.user);
  const tweet = useSelector(state => state.tweet);
  const app = useSelector(state => state.app);
  const dispatch = useDispatch();

  /**
   * Function for dispatch new tweet post.
   *
   * @param {String} tweetText
   */
  const tweetar = tweetText => {
    dispatch(TweetActions.tweetar(tweetText));
  };

  /**
   * Effect for get all tweets's user logged.
   */
  useEffect(() => {
    dispatch(TweetActions.fetchTweets());
  }, []);

  return (
    <Page>
      <TabPanel value={app.currentTab} index={TAB_TWEETS}>
        <Tweets
          tweetar={tweetar}
          tweet={tweet}
          user={user}
          loading={tweet.loading}
          success={tweet.success}
        />
      </TabPanel>
      <TabPanel value={app.currentTab} index={TAB_PHOTOS_VIDEOS}></TabPanel>
      <TabPanel value={app.currentTab} index={TAB_FOLLOWING}>
        <ListProfile users={user.following} />
      </TabPanel>
      <TabPanel value={app.currentTab} index={TAB_FOLLOWERS}>
        <ListProfile users={user.followers} />
      </TabPanel>
    </Page>
  );
};

export default Home;
