import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Main from './components/WelcomeView/Main'
import './App.css'

function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Main/>
      </Container>
    </React.Fragment>
  );
}

export default SimpleContainer;
