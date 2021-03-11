import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function CheckboxLabels(props) {
  const { getBlacklist } = props;

  const [state, setState] = React.useState({
    checkNSFW: true,
    checkReligious: true,
    checkPolitical: true,
    checkRacist: true,
    checkSexist: true,
    checkExplicit: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    getBlacklist({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <FormGroup row>
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkNSFW}
            onChange={handleChange}
            name='checkNSFW'
          />
        }
        label='NSFW'
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkReligious}
            onChange={handleChange}
            name='checkReligious'
          />
        }
        label='Religious'
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkPolitical}
            onChange={handleChange}
            name='checkPolitical'
          />
        }
        label='Political'
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkRacist}
            onChange={handleChange}
            name='checkRacist'
          />
        }
        label='Racist'
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkSexist}
            onChange={handleChange}
            name='checkSexist'
          />
        }
        label='Sexist'
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkExplicit}
            onChange={handleChange}
            name='checkExplicit'
          />
        }
        label='Explicit'
      />
    </FormGroup>
  );
}
