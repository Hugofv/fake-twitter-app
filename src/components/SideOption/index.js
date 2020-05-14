import React from 'react';

import { BoxSidebar } from './styles';
import WhoToFollow from './components/WhoToFollow';

const SideOption = () => {

  return (
    <BoxSidebar>
      <WhoToFollow />
    </BoxSidebar>
  );
};

SideOption.prototype = {};

export default SideOption;
