import Item from "./Item";

const TimeList = (props) => {
  return (
    <div className="main-time-list">
      {props.children.map((eachItem) => (
        <Item key={Math.random()}>{eachItem}</Item>
      ))}
    </div>
  );
};

export default TimeList;
