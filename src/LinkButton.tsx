import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import React from 'react';

type LinkButtonProps = {
  title: string;
  url: string;
};

const LinkButton: React.FC<LinkButtonProps> = ({ title, url, children }) => {
  const handleClick = React.useCallback(
    () => window.open(url, '_blank'),
    [url]
  );
  return (
    <Tooltip title={title}>
      <IconButton color="inherit" size="large" onClick={handleClick}>
        {children}
      </IconButton>
    </Tooltip>
  );
};

export default LinkButton;
