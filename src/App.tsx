import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from 'react';

import Footer from './Footer';
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
      <Footer />
    </ThemeProvider>
  );
};

export default App;
