import React from "react";
import "./App.css";
import Recipe1 from "./Recipe1";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return <Recipe1 />;
  }
}

export default App;