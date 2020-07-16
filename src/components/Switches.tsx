import React from 'react';
import Switch from '@material-ui/core/Switch';

import pink from '@material-ui/core/colors/pink';
import teal from '@material-ui/core/colors/teal';
import orange from '@material-ui/core/colors/orange';
import { withStyles } from '@material-ui/core';

const colorSwitch = (hue) =>
  withStyles({
    switchBase: {
      color: hue[300],
      '&$checked': {
        color: hue[500],
      },
      '&$checked + $track': {
        backgroundColor: hue[500],
      },
    },
    checked: {},
    track: {},
  })(Switch);

export const PinkSwitch = colorSwitch(pink);
export const TealSwitch = colorSwitch(teal);
export const OrangeSwitch = colorSwitch(orange);

export default Switch;
