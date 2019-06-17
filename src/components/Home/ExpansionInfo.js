import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Avatars from './Avatars'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  avatars: {
    marginTop: '35%',
  }
}))

export default function ControlledExpansionPanels() {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false)

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
    <div className={classes.root}>
      <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>TICE</Typography>
          <Typography className={classes.secondaryHeading}>Ing. Yehudy Ch B</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Nuestros profesionales ponen nuestra alta experiencia al servicio del Cliente para 
            asistirle con las mejores opciones a implantar. El fin es conseguir una perfecta 
            alineación entre los objetivos de la organización y las capacidades de sus sistemas 
            informáticos.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>Mecatrónica</Typography>
          <Typography className={classes.secondaryHeading}>
            Ing. Jouser V V
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Nuestro objetivo es que el cliente encuentre una soluciones óptimas y logre procesos 
            productivos ágiles y fiables mediante proyectos de automatización que permitan crear 
            productos inteligentes, que respondan a las necesidades de hoy en día y tengan una 
            perfecto equilibrio entre componentes mecánicos y electrónicos.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}>Industrial</Typography>
          <Typography className={classes.secondaryHeading}>
            Ing Manuel M
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Especializada en ayudar a las empresas a mejorar la eficiencia productiva a través de las 
            áreas de mantenimiento fiabilidad y gestión de activos. Para ello contamos con servicios de 
            consultoría formación y diagnosis que adaptamos a cada particularidad de nuestros clientes. 
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>Agronomía</Typography>
          <Typography className={classes.secondaryHeading}>
            Ing Deiver A S
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          Servicios diseñados con el fin de ayudar a que las empresas logren prevenir o mitigar 
          efectivamente los impactos ambientales generados por su su actividad, en apego a la 
          legislación nacional y de la mano de las mejoras prácticas ambientales.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <div className={classes.avatars}>
        <Avatars/>
      </div>
    </div>
  )
}
