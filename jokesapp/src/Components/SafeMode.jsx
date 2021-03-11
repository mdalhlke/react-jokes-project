import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function CheckboxLabels(props) {
  const { getSafe } = props;

  const [safe, setSafe] = React.useState(true);

  const handleChange = (event) => {
    setSafe(event.target.checked);
    getSafe(event.target.checked)
  };

  return (
      <FormGroup row>
        <FormControlLabel
          control={
            <Checkbox checked={safe} onChange={handleChange}/>
          }
          label='Safe Mode'
        />
      </FormGroup>
  );
}
