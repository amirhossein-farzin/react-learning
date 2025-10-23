import { createRoot } from "react-dom/client";
import PureCompo from "./PureComponent";
import Fcomponent from "./Fcomponent";
import { Component, createRef } from "react";
class ParentCompo extends Component {
  constructor() {
    super();
    this.myInput = createRef();
  }
  componentDidMount() {
    this.myInput.current.focus();
  }
  render() {
    return (
      <div>
        <Fcomponent ref={this.myInput} />
        {/* I linking ref to this component/ when we linking a ref to a component, you have access to all of Fcomponent's functions & states / / وقتی می گویم به فانکشن هاش دسترسی داریم، یعنی به چیزی به نام فوکس یا ولییو دسترسی نداریم  */
        /*من الان می خواهم به تابع فوکوس این اینپوت دسترسی داشته باشم اما رف را اینجا تعریف کردم، پس برای دسترسی بهش الان وارد فایلش میشیم و کارهایی که باید رو انجام میدیم */}
      </div>
    );
  }
}
createRoot(document.getElementById("root")).render(
    <ParentCompo />
)
export default ParentCompo;
//* Create our ref here, but linking to our input in Fcomponent.jsx
//*ما میخواهیم رف را اینجا تعریف کنیم اما متصلش کنیم به اینپوت داخل فایل دیگه 
//! I creating my ref in Fcomponent's parent => ParentComponent
