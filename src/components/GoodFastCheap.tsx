import React from 'react';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import { PinkSwitch, TealSwitch, OrangeSwitch } from './Switches';

export default function SwitchesGroup() {
  const [state, setState] = React.useState({
    cheap: false,
    good: false,
    fast: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">How do you want it?</FormLabel>
      <FormGroup>
        <FormControlLabel
          control={
            <PinkSwitch
              checked={state.cheap}
              onChange={handleChange}
              name="cheap"
            />
          }
          label="Cheap"
        />
        <FormControlLabel
          control={
            <TealSwitch
              checked={state.good}
              onChange={handleChange}
              name="good"
            />
          }
          label="Good"
        />
        <FormControlLabel
          control={
            <OrangeSwitch
              checked={state.fast}
              onChange={handleChange}
              name="fast"
            />
          }
          label="Fast"
        />
      </FormGroup>
      <FormHelperText>Ok.</FormHelperText>
    </FormControl>
  );
}
