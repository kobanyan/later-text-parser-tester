import LaunchIcon from '@mui/icons-material/Launch';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React from 'react';

const Header: React.FC = () => {
  return (
    <Box component="header" sx={{ flexGrow: 1 }}>
      <AppBar component="div" position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            @breejs/later Text Parser Tester
          </Typography>
          <Link
            href="https://breejs.github.io/later/parsers.html#text"
            target="_blank"
            rel="noopener"
            color="inherit"
            underline="none"
          >
            <Typography
              sx={{
                verticalAlign: 'middle',
                display: 'inline-flex',
              }}
            >
              <LaunchIcon fontSize="small" sx={{ marginRight: 1 }} />
              Docs
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
