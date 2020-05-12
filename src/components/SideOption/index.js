import { makeStyles, useTheme } from '@material-ui/core';
import React from 'react';

import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { BoxSidebar } from './styles';
import WhoToFollow from './components/WhoToFollow';

const SideOption = () => {
  const { t } = useTranslation();

  return (
    <BoxSidebar>
      <WhoToFollow />
    </BoxSidebar>
  );
};

SideOption.prototype = {};

export default SideOption;
