import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import React from 'react';

export type FormProps = {
  text: string;
  count: number;
  onTextChange: Required<TextFieldProps>['onChange'];
  onCountChange: Required<TextFieldProps>['onChange'];
};

const Form: React.FC<FormProps> = ({
  text,
  count,
  onTextChange,
  onCountChange,
}) => {
  return (
    <Box component="form" noValidate autoComplete="off">
      <Grid container spacing={2}>
        <Grid item sm={10}>
          <TextField
            id="text"
            label="Text"
            fullWidth
            value={text}
            onChange={onTextChange}
          />
        </Grid>
        <Grid item sm={2}>
          <TextField
            id="count"
            label="Count"
            type="number"
            value={count}
            onChange={onCountChange}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
export default Form;
