import React from "react";
import { Status } from "./Components/Status";
import "./App.css";

import { Heading } from "./Components/heading";
import { Oscar } from "./Components/oscar";

function App() {
  return (
    <div className="App">
      <Status status="loading" />
      <Heading>wellcome to typescript</Heading>
      <Oscar>
        <Heading>oscar children data</Heading>
      </Oscar>
    </div>
  );
}

export default App;
