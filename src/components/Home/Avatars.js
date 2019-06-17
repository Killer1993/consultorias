import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Yehu from './imgs/yehu.jpg'
import Macho from './imgs/macho.jpg'
import Jou from './imgs/jou.jpg'
import Manuel from './imgs/manuel.jpg'

const useStyles = makeStyles({
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
  },
});

const people = [
    {
        alt: "Yehudy",
        src: Yehu,
    },
    {
        alt: "Macho",
        src: Macho,
    },
    {
        alt: "Jou",
        src: Jou,
    },
    {
        alt: "Manuel",
        src: Manuel,
    },
]

export default function ImageAvatars() {
  const classes = useStyles();

  return (
    <Grid container justify="center" alignItems="center">
      {
          people.map(person => {
            return (<Avatar alt={person.alt} src={person.src} className={classes.bigAvatar} />)
          })
      }
    </Grid>
  );
}

