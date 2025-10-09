import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import Hello from "./Hello";
import Timer from "./Timer";
import TimeList from "./TimeList";
import { TestContext } from "./TestContext";
//! Creat components with HOOKS
const App = () => {
  //  const [title, setTitle] = useState("Hello World!");
  const [isLight, setIsLight] = useState(false);
  const [timeArr, setTimeArr] = useState(["00:05:31", "00:03:45"]);

  useEffect(() => {
    console.log("useEffect"); //? یکبار موقعی که صفحه باز میشه اجرا میشه
    return () => {
      //? داخل این هر دستوری بنویسیم، هروقت اون کامپوننت بسته شد، مثلا به صفحه دیگه رفتیم، اجرا میشه
    };
  }, [isLight]); //? میگه هرموقع اون چیزی که میخوام اتفاق افتاد، این کار کنه/ مثلا هرموقع اینجا ایز لایت تغییر کرد این لاگ میگیره

  const handleSetIsLight = () => {
    setIsLight(!isLight);
  };

  return (
    <TestContext.Provider value={{ timeArr: timeArr, setTimeArr: setTimeArr }}>
      <div className="main" style={{ background: isLight ? "white" : "black" }}>
        <Hello />
        <Timer
          //timeArr={timeArr}
          //setTimeArr={setTimeArr}
          isLight={isLight}
          handleSetIsLight={handleSetIsLight}
        />
      </div>
    </TestContext.Provider>
  );
};
export default App;
