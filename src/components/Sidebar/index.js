import React from 'react';

import Profile from './components/Profile';
import { BoxSidebar } from './styles';

/**
 * Componets for sidebar screnn.
 */
const Sidebar = () => {

  return (
    <BoxSidebar>
      <Profile />
    </BoxSidebar>
  );
};

export default Sidebar;
