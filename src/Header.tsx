import DescriptionIcon from '@mui/icons-material/Description';
import GitHubIcon from '@mui/icons-material/GitHub';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React from 'react';

import LinkButton from './LinkButton';

const Header: React.FC = () => {
  return (
    <Box component="header" sx={{ flexGrow: 1 }}>
      <AppBar component="div" position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            @breejs/later Text Parser Tester
          </Typography>
          <LinkButton
            title="Open GitHub"
            url="https://github.com/kobanyan/later-text-parser-tester"
          >
            <GitHubIcon />
          </LinkButton>
          <LinkButton
            title="Open @breejs/later Documents"
            url="https://breejs.github.io/later/parsers.html#text"
          >
            <DescriptionIcon />
          </LinkButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
