import React, { Fragment, useContext } from "react";
import { TaskContext } from "./TaskContext";
const TaskItems = () => {
  const { taskItems, setTaskItems } = useContext(TaskContext);
  console.log(TaskItems);
  return (
    <Fragment>
      <ul className="list-group m-0 p-0 mt-2">
        {taskItems.map((t) => (
          <li
            className={`list-group-item d-flex justify-content-between ${
              t.done ? "list-group-item-success" : ""
            }`}
          >
            {t.title}
            <span>
              {t.done ? (
                <i className="mx-1 me-3 pointer text-warning transition-200 text-hover-shadow fas fa-times"></i>
              ) : (
                <i className="mx-1 me-3 pointer text-success transition-200 text-hover-shadow fas fa-check"></i>
              )}
              <i className="mx-1 me-3 pointer text-danger transition-200 text-hover-shadow fas fa-trash"></i>
            </span>
          </li>
        ))}
      </ul>
    </Fragment>
  );
};
export default TaskItems;
