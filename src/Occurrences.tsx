import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import React from 'react';

export type OccurrencesProps = {
  occurrences: Date[];
};

const Occurrences: React.FC<OccurrencesProps> = ({ occurrences }) => {
  return (
    <>
      <Typography variant="h5">Occurrences</Typography>
      <List dense>
        {occurrences.map((occurrence, index) => (
          <ListItem key={index}>
            <ListItemText primary={occurrence.toLocaleString()} />
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default Occurrences;
