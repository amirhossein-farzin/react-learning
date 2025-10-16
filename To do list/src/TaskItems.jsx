import React, { Fragment, useContext } from "react";
import { TaskContext } from "./TaskContext";
const TaskItems = () => {
  const { taskItems, setTaskItems } = useContext(TaskContext);

  if (taskItems.length) {
    const handleSetDoneTask = (id) => {
      const index = taskItems.findIndex((t) => t.id === id);
      let newTaskItems = [...taskItems]; //! Copying taskItems and puting that in this variable
      newTaskItems[index].done = !newTaskItems[index].done;
      setTaskItems(newTaskItems); //! Paste the copy of tasksItems
    };

    const handleDeleteTask = (id) => {
      let newTasks = taskItems.filter((t) => t.id !== id);
      setTaskItems(newTasks);
    };

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
                <i
                  className={`mx-1 me-3 pointer text-warning transition-200 text-hover-shadow fas fa-${
                    t.done ? "times" : "check"
                  }`}
                  onClick={() => handleSetDoneTask(t.id)} //! using function in onClick method because, we want to get that an element => t.id
                ></i>

                <i
                  className="mx-1 me-3 pointer text-danger transition-200 text-hover-shadow fas fa-trash"
                  onClick={() => handleDeleteTask(t.id)}
                ></i>
              </span>
            </li>
          ))}
        </ul>
      </Fragment>
    );
  } else {
    return <h4 className="text-center text-warning">هیچ کاری ثبت نشده❗</h4>;
  }
};
export default TaskItems;
