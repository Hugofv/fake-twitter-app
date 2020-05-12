import React, { useState, useEffect } from 'react';
import * as TweetActions from './../../store/modules/tweet/actions';

import Page from '../../components/Page';
import {
  TextField,
  Grid,
  CircularProgress,
  Button,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import {
  BoxProgressTweet,
  DividerStyled,
  BoxAdornment,
  TweetInput,
} from './styles';
import { useSelector, useDispatch } from 'react-redux';
import ReactTimeAgo from 'react-time-ago'
import JavascriptTimeAgo from 'javascript-time-ago'

import en from 'javascript-time-ago/locale/en'
import pt from 'javascript-time-ago/locale/pt'

JavascriptTimeAgo.locale(pt)
JavascriptTimeAgo.locale(en)

const Home = () => {
  const { t } = useTranslation();
  const [tweetText, setTweetText] = useState('');
  const tweet = useSelector(state => state.tweet);
  const dispatch = useDispatch();

  const tweetar = () => {
    dispatch(
      TweetActions.tweetar({
        tweet: tweetText,
        user: {
          imageProfile:
            'https://upload.wikimedia.org/wikipedia/pt/thumb/3/3d/Twitter_logo_2012.svg/1200px-Twitter_logo_2012.svg.png',
          name: 'Twitter',
          bio:
            'Your official source for news, updates, and tips from twitter, Inc.',
          nickname: '@twitter',
          address: 'San Francisco, CA',
          link: 'blog.twitter.com',
          joined: '2019-02-01',
        },
        createdAt: '2020-01-01 02:00:50',
      })
    );
  };

  return (
    <Page>
      <Grid>
        <TweetInput
          variant="outlined"
          placeholder={t('message.whats_happening')}
          inputProps={{
            maxLength: 140,
          }}
          fullWidth
          multiline
          rows={4}
          value={tweetText}
          onChange={event => setTweetText(event.target.value)}
          InputProps={{
            endAdornment: (
              <BoxAdornment>
                <BoxProgressTweet>
                  <CircularProgress
                    variant="static"
                    size={25}
                    thickness={5}
                    value={(tweetText.length * 100) / 140}
                  />
                  {tweetText.length}/140
                  <DividerStyled orientation="vertical" flexItem />
                  <Button onClick={tweetar} variant="contained" color="primary">
                    {t('common.tweetar')}
                  </Button>
                </BoxProgressTweet>
              </BoxAdornment>
            ),
          }}
        />
      </Grid>

      <List>
        {tweet.collection.map(item => (
          <>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  variant="rounded"
                  alt="Image"
                  src={item.user.imageProfile}
                />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      color="textPrimary"
                    >
                      {item.user.name}
                    </Typography>
                    <ReactTimeAgo date={item.createdAt} format='twitter'/>
                  </React.Fragment>
                }
                secondary={item.tweet}
              />
            </ListItem>
            <Divider component="li" />
          </>
        ))}
      </List>
    </Page>
  );
};

export default Home;
