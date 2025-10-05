import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import Hello from "./Hello";
import Timer from "./Timer";

//! Creat component with classes
// class App extends React.Component {
//     constructor(){
//         super();
//         this.state = {
//             title : "Hello World!"
//         }
//     }
//     handleSetTitle = ()=>{
//         this.setState({
//             title: "Enjoy learning!"
//         })
//     }
//   render() {
//     return (
//       <div className="main">
//         <Hello title={this.state.title} />
//         <Timer handleSetTitle={this.handleSetTitle} />
//       </div>
//     );
//   }
// }

//! Creat components with HOOKS
const App = () => {
//  const [title, setTitle] = useState("Hello World!");
  const [isLight, setIsLight] = useState(false);

  const handleSetIsLight = () => {
    setIsLight(!isLight)
  };

  return (
    <div className="main" style={{background:isLight ? "white" : "black"}}>
      <Hello />
      <Timer isLight={isLight} handleSetIsLight={handleSetIsLight}/>
    </div>
  );
};
export default App;
