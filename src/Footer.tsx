import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <Container component="footer">
      <Typography variant="body2" textAlign="center">
        {'Copyright © kobanyan 2021.'}
      </Typography>
    </Container>
  );
};

export default Footer;
