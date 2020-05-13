import { ContainerApp, BoxContent } from './styles';
import PropTypes from 'prop-types';
import React from 'react';
import Sidebar from './../Sidebar';
import { makeStyles, Grid } from '@material-ui/core';
import Header from '../Header';
import SideOption from '../SideOption';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    marginTop: '5.5em',
    overflow: 'auto',
    height: '60em',
  },
}));

/**
 * Common Page
 */
const Page = ({ children, title }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <BoxContent container spacing={2}>
        <Grid item sm={12} md={12} lg={3} xs={12}>
          <Sidebar />
        </Grid>

        <Grid item sm={12} md={12} lg={6} xs={12}>
          <ContainerApp data-testid="app">{children}</ContainerApp>
        </Grid>

        <Grid item sm={12} md={12} lg={3} xs={12}>
          <SideOption />
        </Grid>
      </BoxContent>
    </div>
  );
};

Page.prototype = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Page;
