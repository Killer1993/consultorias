import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Login from './LoginForm'
import LoginButton from './LoginButton'
import RegisterDialog from './RegisterDialog'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    display: 'flex',
    flexFlow: 'column nowrap',
    marginTop: 120,
    
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center'
  },
  actions: {
    display: 'flex',
    displayFlow: 'row wrap'
  }
}));

export default function PaperSheet() {
  const classes = useStyles();

  return (
      <Paper className={classes.root}>
        <Login/>
        <div className={classes.actions}>
          <RegisterDialog/>
          <LoginButton/>
        </div>
      </Paper>
  );
}
