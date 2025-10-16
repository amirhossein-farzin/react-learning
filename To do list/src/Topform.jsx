import React, { Fragment, useContext, useState } from "react";
import { TaskContext } from "./TaskContext";

const TopForm = () => {
  const [task, setTask] = useState("");
  const { taskItems, setTaskItems } = useContext(TaskContext);

  const handleSetTask = (event) => {
    //! input value
    setTask(event.target.value);
  };
  const handleAddTask = (event) => {
    //! add task
    event.preventDefault();
    setTaskItems([
      ...taskItems,
      { id: Math.random(), title: task, done: false },
    ]); //! taskItems is Array / Pasting the taskItems and new item (the items have id, title, and done )
    setTask(""); //! remove input's value
  };
  return (
    <Fragment>
      <h4 className="text-center text-info text-shadow"></h4>
      <form>
        <div className="form-group d-flex">
          <input
            type="text"
            className="form-control"
            value={task}
            onChange={handleSetTask}
          />
          <button
            type="submit"
            className="btn btn-success me-1"
            onClick={handleAddTask}
          >
            ثبت
          </button>
        </div>
      </form>
    </Fragment>
  );
};
export default TopForm;
