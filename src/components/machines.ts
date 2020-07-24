import { Machine, assign, interpret } from 'xstate';

interface CFGStateSchema {
  states: {
    cheap_good: {};
    cheap_fast: {};
    good_fast: {};
  };
}

type CFGContext = {
  cheap: boolean;
  good: boolean;
  fast: boolean;
};

type CFGEvent = { type: 'GOOD' } | { type: 'FAST' } | { type: 'CHEAP' };

export const cfgMachine = Machine<CFGContext, CFGStateSchema, CFGEvent>(
  {
    id: 'cfg',
    initial: 'cheap_good',
    context: {
      cheap: true,
      good: true,
      fast: false,
    },
    states: {
      cheap_good: {
        on: {
          FAST: {
            actions: assign({ cheap: false, fast: true, good: true }),
            target: 'good_fast',
          },
        },
      },
      cheap_fast: {
        on: {
          GOOD: {
            actions: assign({ cheap: true, fast: false, good: true }),
            target: 'cheap_good',
          },
        },
      },
      good_fast: {
        on: {
          CHEAP: {
            actions: assign({ cheap: true, fast: true, good: false }),
            target: 'cheap_fast',
          },
        },
      },
    },
  },
  {
    actions: {
      onSuccess: (context, event) => {},
    },
  }
);
