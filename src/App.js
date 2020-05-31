import React from "react";
import "./App.css";

import { Counter, Temperature, FlightBooker } from "./components";

function App() {
  return (
    <div className="App">
      <Counter />
      <hr />
      <Temperature />
      <hr />
      <FlightBooker />
    </div>
  );
}

export default App;
