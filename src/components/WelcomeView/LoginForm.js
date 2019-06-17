import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexFlow: 'column nowrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
}));

export default function TextFields() {
  const classes = useStyles();

  return (
    <form className={classes.container} noValidate autoComplete="off">
      
      <TextField
        id="standard-dense"
        label="Usuario"
        className={clsx(classes.textField, classes.dense)}
        margin="dense"
      />

      <TextField
        id="standard-password-input"
        label="Contraseña"
        className={classes.textField}
        type="password"
        autoComplete="current-password"
        margin="normal"
      />
      
    </form>
  );
}
