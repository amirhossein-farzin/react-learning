import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
const root = document.getElementById("root");

class Timer extends React.Component {
  constructor() {
    super();
    this.state = {
      time: new Date().toLocaleTimeString(),
    };
  }
  render() {
    setInterval(() => {
      this.setState({
        time: new Date().toLocaleTimeString()
      });
    }, 1000);
    return <h2 className="timer">it is {this.state.time}</h2>;
  }
}

class Hello extends React.Component {
  render() {
    return <h1>Hello World!</h1>;
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="main">
        <Hello />
        <Timer />
      </div>
    );
  }
}

// const tick = () => {
createRoot(root).render(<App />);
// };
// setInterval(() => {
//   tick();
// }, 1000);
