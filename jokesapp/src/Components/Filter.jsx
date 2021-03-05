import React from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

export default function CheckboxLabels() {
  const [state, setState] = React.useState({
    checkedA: true, //change "checkedA" and "checkedB" to names of what the filter is (like "Dark" or "Spooky")
    checkedB: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <FormGroup row>
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkedA}
            onChange={handleChange}
            name="checkedA"
          />
        }
        label="Filter 1" //this is the name of the box, change it to appropriate filter name (like "dark" or "spooky")
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkedB}
            onChange={handleChange}
            name="checkedB"
          />
        }
        label="Filter 2" //this is the name of the box, change it to appropriate filter name (like "dark" or "spooky")
      />
    </FormGroup> //add more checkboxes inside the FormGroup later
  );
}
