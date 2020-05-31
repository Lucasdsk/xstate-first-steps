import { createMachine, assign } from "xstate";

export const flightBookerMachine = createMachine({
  initial: "editing",
  context: {
    flightType: "oneway",
    startDate: undefined,
    returnDate: undefined,
  },
  states: {
    editing: {
      on: {
        SELECT_FIGHT: {
          actions: assign({
            flightType: (ctx, evt) => evt.flightType,
          }),
          cond: (ctx, evt) =>
            evt.flightType === "oneway" || evt.flightType === "return",
        },
        "startDate.SELECT_DATE": {
          actions: assign({
            startDate: (ctx, evt) => evt.value,
          }),
        },
        "returnDate.SELECT_DATE": {
          actions: assign({
            returnDate: (ctx, evt) => evt.value,
          }),
        },
        SUBMIT: {
          target: "submitted",
          cond: (context) => {
            if (context.flightType === "oneway") {
              return !!context.startDate;
            } else {
              return (
                !!context.startDate &&
                !!context.returnDate &&
                context.returnDate > context.startDate
              );
            }
          },
        },
      },
    },
    submitted: {
      type: "final",
    },
  },
});
