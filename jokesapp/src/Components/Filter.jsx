import React, { useState } from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function CheckboxLabels(props) {
  const { getFilters } = props;

  const [state, setState] = useState({
    checkProgramming: true,
    checkMisc: true,
    checkDark: true,
    checkPun: true,
    checkSpooky: true,
    checkChrist: true,
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
            checked={state.checkProgramming}
            onChange={handleChange}
            name='checkProgramming'
          />
        }
        label='Programming'
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkMisc}
            onChange={handleChange}
            name='checkMisc'
          />
        }
        label='Miscellaneous'
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkDark}
            onChange={handleChange}
            name='checkDark'
          />
        }
        label='Dark'
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkPun}
            onChange={handleChange}
            name='checkPun'
          />
        }
        label='Pun'
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkSpooky}
            onChange={handleChange}
            name='checkSpooky'
          />
        }
        label='Spooky'
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkChrist}
            onChange={handleChange}
            name='checkChrist'
          />
        }
        label='Christmas'
      />
    </FormGroup>
  );
}
