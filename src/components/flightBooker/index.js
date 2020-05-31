import React from "react";
import { useMachine } from "@xstate/react";

import { flightBookerMachine } from "./flightBookerMachine";

const FlightBooker = () => {
  const [state, send] = useMachine(flightBookerMachine, { devTools: true });

  const { flightType, startDate, returnDate } = state.context;
  const canSubmit = flightBookerMachine.transition(state, "SUBMIT").changed;

  return (
    <div>
      <h2>Flight Booker - {state.value}</h2>
      <form>
        <div>
          <select
            name="flightType"
            onChange={(evt) =>
              send("SELECT_FIGHT", { flightType: evt.target.value })
            }
          >
            <option value="oneway">One-way flight</option>
            <option value="return">Return flight</option>
          </select>
        </div>
        <div>
          <label htmlFor="startDate">
            <strong>Start date</strong>
            <input
              id="startDate"
              type="date"
              name="start-date"
              value={startDate}
              onChange={(evt) =>
                send("startDate.SELECT_DATE", { value: evt.target.value })
              }
            />
          </label>
        </div>
        <div>
          <label htmlFor="returnDate">
            <strong>Return date</strong>
            <input
              disabled={flightType !== "return"}
              id="returnDate"
              type="date"
              name="return-date"
              value={returnDate}
              onChange={(evt) =>
                send("returnDate.SELECT_DATE", { value: evt.target.value })
              }
            />
          </label>
        </div>

        <button disabled={!canSubmit} onClick={() => send("SUBMIT")}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default FlightBooker;
