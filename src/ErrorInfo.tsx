import Typography from '@mui/material/Typography';
import React from 'react';

export type ErrorInfoProps = {
  text: string;
  error: number;
};

const ErrorInfo: React.FC<ErrorInfoProps> = ({ text, error }) => {
  const info = [...new Array(error)].map(() => '\u00A0').concat('^');
  return (
    <>
      <Typography variant="h5">Error</Typography>
      <Typography sx={{ marginTop: 1, paddingLeft: 2 }} data-testid="text">
        {text}
      </Typography>
      <Typography color="error" sx={{ paddingLeft: 2 }} data-testid="error">
        {info}
      </Typography>
    </>
  );
};

export default ErrorInfo;
