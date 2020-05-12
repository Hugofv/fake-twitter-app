import styled from 'styled-components';
import { TextField, Divider } from '@material-ui/core';

export const TweetInput = styled(TextField)`

  > div {
    align-items: flex-end;
  }
`

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
