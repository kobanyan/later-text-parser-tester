import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import React from 'react';

import ErrorInfo from './ErrorInfo';
import Form, { FormProps } from './Form';
import { reducer, initialState } from './later';
import Occurrences from './Occurrences';

const Main: React.FC = () => {
  const [{ text, count, error, occurrences }, dispatch] = React.useReducer(
    reducer,
    initialState
  );
  const handleTextChange = React.useCallback<FormProps['onTextChange']>(
    (event) => {
      dispatch({ type: 'changeText', payload: event.target.value });
    },
    []
  );
  const handleCountChange = React.useCallback<FormProps['onCountChange']>(
    (event) => {
      dispatch({ type: 'changeCount', payload: Number(event.target.value) });
    },
    []
  );
  return (
    <Grid
      component="main"
      container
      justifyContent="center"
      alignItems="center"
      rowSpacing={2}
      margin={2}
    >
      <Grid item xs={8}>
        <Paper
          sx={{
            padding: 2,
          }}
        >
          <Form
            text={text}
            count={count}
            onTextChange={handleTextChange}
            onCountChange={handleCountChange}
          />
        </Paper>
      </Grid>
      <Grid item xs={8}>
        <Paper
          sx={{
            padding: 2,
          }}
        >
          {error > -1 ? (
            <ErrorInfo text={text} error={error} />
          ) : (
            <Occurrences occurrences={occurrences} />
          )}
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Main;
