import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function CheckboxLabels(props) {
  const { getBlacklist } = props;

  const [state, setState] = React.useState({
    nsfw: true,
    religious: true,
    political: true,
    racist: true,
    sexist: true,
    explicit: true,
  },);

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    getBlacklist({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <FormGroup row>
      <FormControlLabel
        control={
          <Checkbox checked={state.nsfw} onChange={handleChange} name='nsfw' />
        }
        label='NSFW'
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.religious}
            onChange={handleChange}
            name='religious'
          />
        }
        label='Religious'
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.political}
            onChange={handleChange}
            name='political'
          />
        }
        label='Political'
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.racist}
            onChange={handleChange}
            name='racist'
          />
        }
        label='Racist'
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.sexist}
            onChange={handleChange}
            name='sexist'
          />
        }
        label='Sexist'
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.explicit}
            onChange={handleChange}
            name='explicit'
          />
        }
        label='Explicit'
      />
    </FormGroup>
  );
}
