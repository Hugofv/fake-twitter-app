import * as UserActions from './../../../../store/modules/user/actions';

import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import ListProfile from '../../../ListProfile';

const WhoToFollow = () => {
  const { t } = useTranslation();
  const suggestions = useSelector(state => state.user.suggestions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(UserActions.fetchSuggestions())
  }, [])

  return (
    <>
      <h2>{t('common.who_to_follow')}</h2>

      <ListProfile users={suggestions} />
    </>
  );
};

export default WhoToFollow;
