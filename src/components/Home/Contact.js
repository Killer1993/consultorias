import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MultiSelect from './MultiSelect'
import DialogAlert from './DialogAlert'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexFlow: 'column nowrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
}));

export default function OutlinedTextFields() {
  const classes = useStyles();
  const [number, setNumber] = useState()

  return (
    <form className={classes.container} noValidate autoComplete="off">

        <TextField
            id="outlined-with-placeholder"
            label="Nombre"
            placeholder="Nombre"
            className={classes.textField}
            margin="normal"
            variant="outlined"
        />
        <TextField
            id="outlined-email-input"
            label="Correo"
            className={classes.textField}
            type="email"
            name="email"
            autoComplete="email"
            margin="normal"
            variant="outlined"
        />
        <TextField
            id="outlined-number"
            label="Número de teléfono"
            value={number}
            onChange={e => setNumber(e.target.value)}
            type="number"
            className={classes.textField}
            InputLabelProps={{
            shrink: true,
            }}
            margin="normal"
            variant="outlined"
        />
        <MultiSelect/>
        <TextField
            id="outlined-multiline-static"
            label="Información extra"
            placeholder="Especifique"
            multiline
            rows="4"
            className={classes.textField}
            margin="normal"
            variant="outlined"
        />

        <DialogAlert/>
    </form>
  );
}
