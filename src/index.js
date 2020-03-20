import React from "react";
import ReactDom from "react-dom";

function Root() {
  return <h1>To Do</h1>;
}

ReactDom.render(<Root />, document.getElementById("root"));
