import React from "react";
import { createRoot } from "react-dom/client";

const root = document.getElementById("root");

class Timer extends React.Component {
  render() {
    return <h2>it is {new Date().toLocaleTimeString()}</h2>;
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
      <div>
        <Hello/>
        <Timer />
      </div>
    );
  }
}

const tick = () => {
  createRoot(root).render(<App />);
};
setInterval(() => {
  tick();
}, 1000);
