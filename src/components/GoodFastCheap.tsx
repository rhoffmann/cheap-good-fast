import React from 'react';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import { PinkSwitch, TealSwitch, OrangeSwitch } from './Switches';

import { useMachine } from '@xstate/react';

import { cfgMachine } from './machines';

export default function SwitchesGroup() {
  const [state, send] = useMachine(cfgMachine);

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">How do you want it?</FormLabel>
      <FormGroup>
        <FormControlLabel
          control={
            <PinkSwitch
              checked={state.context.cheap}
              onChange={() => send('CHEAP')}
              name="cheap"
            />
          }
          label="Cheap"
        />
        <FormControlLabel
          control={
            <TealSwitch
              checked={state.context.good}
              onChange={() => send('GOOD')}
              name="good"
            />
          }
          label="Good"
        />
        <FormControlLabel
          control={
            <OrangeSwitch
              checked={state.context.fast}
              onChange={() => send('FAST')}
              name="fast"
            />
          }
          label="Fast"
        />
      </FormGroup>
      <FormHelperText>
        {Object.keys(state.context)
          .filter((key) => state.context[key])
          .join(' & ')}
      </FormHelperText>
    </FormControl>
  );
}
