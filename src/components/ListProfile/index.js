import * as UserActions from './../../store/modules/user/actions';

import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import { useTranslation } from 'react-i18next';
import { AvatarStyled, BoxFollow } from './styles';
import { useDispatch } from 'react-redux';
import { Button } from '@material-ui/core';
import { PersonAdd } from '@material-ui/icons';

const ListProfile = ({ users }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  /**
   * Function for dispatch to add following.
   *
   * @param {Object} user
   */
  const addFollowing = user => {
    dispatch(UserActions.addFollowing(user));
  };

  return (
    <>
      <List>
        {users.map(user => (
          <>
            <ListItem key={user.id} alignItems="flex-start">
              <ListItemAvatar>
                <AvatarStyled
                  alt="Remy Sharp"
                  img={
                    user.imageProfile ||
                    require('./../../assets/img/avatar-default.png')
                  }
                />
              </ListItemAvatar>
              <ListItemText
                primary={user.name}
                secondary={
                  <>
                    {user.bio}
                    {!user.following && (
                      <BoxFollow>
                        <Button
                          onClick={() => addFollowing(user)}
                          startIcon={<PersonAdd />}
                        >
                          {t('action.follow')}
                        </Button>
                      </BoxFollow>
                    )}
                  </>
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

ListProfile.prototype = {
  users: PropTypes.array.isRequired,
};

export default ListProfile;
