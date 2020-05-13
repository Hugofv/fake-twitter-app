import React, { useState } from 'react';
import {
  Grid,
  CircularProgress,
  Button,
  ListItem,
  ListItemAvatar,
  List,
  ListItemText,
  Divider,
} from '@material-ui/core';
import {
  TweetInput,
  BoxAdornment,
  BoxProgressTweet,
  DividerStyled,
  TweetOwner,
  BoxTweetDetail,
} from '../../styles';
import { AvatarStyled } from '../../../../components/SideOption/components/WhoToFollow/styles';
import { useTranslation } from 'react-i18next';
import ReactTimeAgo from 'react-time-ago/commonjs/ReactTimeAgo';

const TextSecondary = {
  style: {
    color: '#555554',
    fontSize: '15px',
  },
};

const Tweets = ({ tweetar, tweet, user }) => {
  const { t } = useTranslation();
  const [tweetText, setTweetText] = useState('');

  return (
    <>
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
                  <Button
                    onClick={() => tweetar(tweetText)}
                    variant="contained"
                    color="primary"
                  >
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
                <AvatarStyled
                  variant="rounded"
                  alt="Image"
                  img={
                    user.me.imageProfile ||
                    require('./../../../../assets/img/avatar-default.png')
                  }
                />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <>
                    <TweetOwner
                      component="span"
                      variant="body1"
                      color="textPrimary"
                    >
                      {item.user.name}
                    </TweetOwner>
                    <BoxTweetDetail>
                      {item.user.nickname}
                      <ReactTimeAgo date={item.createdAt} format="twitter" />
                    </BoxTweetDetail>
                  </>
                }
                secondaryTypographyProps={TextSecondary}
                secondary={item.tweet}
              />
            </ListItem>
            <Divider component="li" />
          </>
        ))}
      </List>
    </>
  );
};

export default Tweets;
