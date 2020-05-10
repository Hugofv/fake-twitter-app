import { makeStyles, useTheme } from '@material-ui/core';
import React from 'react';

import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import Profile from './components/Profile';
import { BoxSidebar } from './styles';

const Sidebar = () => {
  const { t } = useTranslation();

  return (
    <BoxSidebar>
      <Profile />
    </BoxSidebar>
  );
};

Sidebar.prototype = {
  title: PropTypes.string.isRequired,
};
export default Sidebar;
