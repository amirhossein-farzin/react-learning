import { useContext } from "react";
import { TestContext } from "./TestContext";

const Item = (props) => {
  const context = useContext(TestContext);
  const handleDeleteItem = (element) => {
    context.setTimeArr(
      context.timeArr.filter((t) => t != element.target.innerHTML)
    );
  };
  return (
    <div className="time-item" onClick={handleDeleteItem}>
      {props.children}
    </div>
  );
};

export default Item;
