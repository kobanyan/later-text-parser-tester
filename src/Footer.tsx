import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <Container component="footer" sx={{ marginBottom: 2 }}>
      <Typography variant="body2" textAlign="center">
        {'Copyright © kobanyan 2021.'}
      </Typography>
      <Typography variant="body2" textAlign="center">
        {`@breejs/later version: ${process.env.REACT_APP_BREEJS_LATER_VERSION}`}
      </Typography>
    </Container>
  );
};

export default Footer;
