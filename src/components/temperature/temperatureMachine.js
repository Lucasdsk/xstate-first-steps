import { createMachine, assign } from "xstate";

export const temperatureMachine = createMachine({
  initial: "active",
  context: {
    C: undefined,
    F: undefined,
  },
  states: {
    active: {
      on: {
        CELCIUS: {
          actions: assign({
            C: (ctx, event) => event.value,
            F: (ctx, event) => ctx.C * (9 / 5) + 32,
          }),
        },
        FAHRENHEIT: {
          actions: assign({
            F: (ctx, event) => event.value,
            C: (ctx, event) => (ctx.f - 32) * (5 / 9),
          }),
        },
      },
    },
  },
});
