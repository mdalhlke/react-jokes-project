import React from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

export default function CheckboxLabels() {
  const [state, setState] = React.useState({
    checkProgramming: true,
    checkMisc: true,
    checkDark: true,
    checkPun: true,
    checkSpooky: true,
    checkChrist: true,
    checkNSFW: true,
    checkReligious: true,
    checkPolitical: true,
    checkRacist: true,
    checkSexist: true,
    checkExplicit: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <FormGroup row>
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkProgramming}
            onChange={handleChange}
            name="checkProgramming"
          />
        }
        label="Programming"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkMisc}
            onChange={handleChange}
            name="checkMisc"
          />
        }
        label="Miscellaneous"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkDark}
            onChange={handleChange}
            name="checkDark"
          />
        }
        label="Dark"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkPun}
            onChange={handleChange}
            name="checkPun"
          />
        }
        label="Pun"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkSpooky}
            onChange={handleChange}
            name="checkSpooky"
          />
        }
        label="Spooky"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkChrist}
            onChange={handleChange}
            name="checkChrist"
          />
        }
        label="Christmas"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkNSFW}
            onChange={handleChange}
            name="checkNSFW"
          />
        }
        label="NSFW"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkReligious}
            onChange={handleChange}
            name="checkReligious"
          />
        }
        label="Religious"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkPolitical}
            onChange={handleChange}
            name="checkPolitical"
          />
        }
        label="Political"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkRacist}
            onChange={handleChange}
            name="checkRacist"
          />
        }
        label="Racist"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkSexist}
            onChange={handleChange}
            name="checkSexist"
          />
        }
        label="Sexist"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkExplicit}
            onChange={handleChange}
            name="checkExplicit"
          />
        }
        label="Explicit"
      />
    </FormGroup>
  );
}
