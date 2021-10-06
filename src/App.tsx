import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from 'react';

import Header from './Header';
import Main from './Main';

const theme = createTheme({
  typography: {
    fontFamily: ['Roboto Mono'].join(', '),
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Main />
    </ThemeProvider>
  );
};

export default App;
