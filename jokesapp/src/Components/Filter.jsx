import React, { useState } from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function CheckboxLabels(props) {
  const { getFilters } = props;

  const [state, setState] = useState({
    Programming: true,
    Miscellaneous: true,
    Dark: true,
    Pun: true,
    Spooky: true,
    Christmas: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    getFilters({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <FormGroup row>
      <FormControlLabel
        control={
          <Checkbox
            checked={state.Programming}
            onChange={handleChange}
            name='Programming'
          />
        }
        label='Programming'
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.Miscellaneous}
            onChange={handleChange}
            name='Miscellaneous'
          />
        }
        label='Miscellaneous'
      />
      <FormControlLabel
        control={
          <Checkbox checked={state.Dark} onChange={handleChange} name='Dark' />
        }
        label='Dark'
      />
      <FormControlLabel
        control={
          <Checkbox checked={state.Pun} onChange={handleChange} name='Pun' />
        }
        label='Pun'
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.Spooky}
            onChange={handleChange}
            name='Spooky'
          />
        }
        label='Spooky'
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.Christmas}
            onChange={handleChange}
            name='Christmas'
          />
        }
        label='Christmas'
      />
    </FormGroup>
  );
}
