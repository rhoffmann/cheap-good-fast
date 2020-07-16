// this is our main react entry point for our app

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

import theme from './theme';

const Main = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  );
};

ReactDOM.render(<Main />, document.getElementById('app'));
