import React from "react";
import Greeting from "./greeting.tsx";
import Counter from "./counter.tsx";

function App() {
  return (
    <div style={{ padding: "2rem" }}>
      <Greeting name="John" />
      <Counter />
    </div>
  );
}

export default App;
