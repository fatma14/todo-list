import React from "react";

import AddElements from "./components/AddElement";
import "./app.css";

function App() {
  return (
    <div className="appContainer">
      <h1>My ToDo List</h1>
      <AddElements />
    </div>
  );
}

export default App;
