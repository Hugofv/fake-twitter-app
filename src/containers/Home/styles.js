import styled from 'styled-components';
import { TextField, Divider, Typography, Avatar } from '@material-ui/core';

export const TweetInput = styled(TextField)`
  > div {
    align-items: flex-end;
  }
`;

export const BoxProgressTweet = styled.div`
  display: flex;
  align-items: center;
  font-size: 1em;
  font-weight: bold;
  div {
    margin-right: 0.5em;
  }
`;

export const BoxAdornment = styled.div`
  display: flex;
`;

export const DividerStyled = styled(Divider)`
  height: 2em !important;
  margin: 0 1em !important;
`;

export const BoxTweetDetail = styled.span`
  font-size: 14px;
  margin-left: 0.5em;

  > time {
    margin-left: 0.5em;
  }
`;

export const TweetOwner = styled(Typography)`
  font-weight: bold !important;
`;

export const AvatarStyled = styled.div`
  width: 3em;
  height: 4em;
  background-image: ${props => `url(${props.img})`};
  background-position: center;
  background-size: 100% auto;
  background-repeat: no-repeat;
`;
