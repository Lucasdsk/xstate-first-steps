import React from "react";
import { useMachine } from "@xstate/react";

import { counterMachine } from "./counterMachine";

const Counter = () => {
  const [state, send] = useMachine(counterMachine, { devTools: true });

  return (
    <div>
      <h2>Counter</h2>
      <div>
        <strong>{state.context.count}</strong>
      </div>
      <button onClick={() => send("INCREMENT")}>Count</button>
      <button onClick={() => send("RESET")}>Reset</button>
    </div>
  );
};

export default Counter;
