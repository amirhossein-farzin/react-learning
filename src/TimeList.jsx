import { useContext } from "react";
import Item from "./Item";
import { TestContext } from "./TestContext";

const TimeList = () => {
  const context = useContext(TestContext)
  return (
    <div className="main-time-list">
      {context.timeArr.map((eachItem) => (
        <Item key={Math.random()}>{eachItem}</Item>
      ))}
    </div>
  );
};

export default TimeList;
