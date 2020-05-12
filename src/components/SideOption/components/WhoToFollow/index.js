import * as UserActions from './../../../../store/modules/user/actions';

import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import { useTranslation } from 'react-i18next';
import { AvatarStyled, BoxFollow } from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@material-ui/core';
import { PersonAdd } from '@material-ui/icons';

const WhoToFollow = () => {
  const { t } = useTranslation();
  const suggestions = useSelector(state => state.user.suggestions);
  const dispatch = useDispatch();

  const addFollowing = user => {
    dispatch(UserActions.addFollowing(user));
  }

  return (
    <>
      <h2>{t('common.who_to_follow')}</h2>

      <List>
        {suggestions.map(suggestion => (
          <>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <AvatarStyled
                  alt="Remy Sharp"
                  img={suggestion.imageProfile || require('./../../../../assets/img/avatar-default.png')}
                />
              </ListItemAvatar>
              <ListItemText
                primary={suggestion.name}
                secondary={
                  <BoxFollow>
                    <Button onClick={() => addFollowing(suggestion)} startIcon={<PersonAdd />}>
                      {t('action.follow')}
                    </Button>
                  </BoxFollow>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </>
        ))}
      </List>
    </>
  );
};

export default WhoToFollow;
