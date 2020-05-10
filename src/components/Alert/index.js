import * as AlertActions from '../../store/modules/alert/actions';

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AlertTitle from '@material-ui/lab/AlertTitle';
import MuiAlert from '@material-ui/lab/Alert';
import { Snackbar } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

function AlertStyled(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Alert = () => {
  const dispatch = useDispatch();
  const alert = useSelector(state => state.alert);
  const { t } = useTranslation();

  const [snackBar, setSnackBar] = useState({ open: false, alert: {} });

  const processQueue = () => {
    if (alert.collection.length > 0) {
      dispatch(AlertActions.deleteAlert(alert.collection[0].key));
      setSnackBar({ open: true, alert: alert.collection[0] });
    }
  };

  useEffect(() => {
    processQueue();
  }, [alert.collection]);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackBar({ open: false, alert: {} });
  };

  return (
    <Snackbar
      open={snackBar.open}
      autoHideDuration={4000}
      onClose={handleClose}
      anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
    >
      <AlertStyled
        onClose={() => setSnackBar({ open: false, alert: {} })}
        severity={snackBar.alert.type}
      >
        <AlertTitle>{t(snackBar.alert.title)}</AlertTitle>
        {t(snackBar.alert.message)}
      </AlertStyled>
    </Snackbar>
  );
};

export default Alert;
