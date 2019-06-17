import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));

export default function PaperSheet() {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
          Historia:
        </Typography>
        <Typography component="p">
          Consultores de alquiler S.A. nació como un proyecto de emprendimiento a partir de la detección de una necesidad
          en la región Chorotega.
          Al estar dicha zona muy alejada de la meceta central, requería que las personas y distintas micro, medianas y
          grandes empresas que necesitaran un servicio de consultoría, se trasladaran hasta el GAM.
          Consultores de alquiler viene a presentarse como una opción para estos empresarios, poniendo a disposición su
          amplio conocimiento y experiencia para asegurarles un desarrollo y seguimiento efectivo de sus proyectos.
        </Typography>
      </Paper>
    </div>
  );
}
