import React from "react";
import { useMachine } from "@xstate/react";

import { temperatureMachine } from "./temperatureMachine";

const Temperature = () => {
  const [state, send] = useMachine(temperatureMachine, { devTools: true });
  return (
    <div>
      <h2>Temperature</h2>
      <form>
        <label>
          <div>C</div>
          <input
            name="tempC"
            value={state.context.C}
            type="number"
            onChange={(e) => send("CELCIUS", { value: e.target.value })}
          />
        </label>
        <label>
          <div>F</div>
          <input
            name="tempF"
            value={state.context.F}
            type="number"
            onChange={(e) => send("FAHRENHEIT", { value: e.target.value })}
          />
        </label>
      </form>
    </div>
  );
};

export default Temperature;
