import React, { Fragment } from "react";
const TaskItems = ()=>{
    return(
        <Fragment>
            <ul className='list-group m-0 p-0 mt-2'>
            <li className='list-group-item d-flex justify-content-between'>
              کار شماره 1
              <span>
                <i className="mx-1 me-3 pointer text-success transition-200 text-hover-shadow fas fa-check" ></i>
                <i className="mx-1 me-3 pointer text-warning transition-200 text-hover-shadow fas fa-times" ></i>
                <i className="mx-1 me-3 pointer text-danger transition-200 text-hover-shadow fas fa-trash" ></i>
              </span>
            </li>

            <li className='list-group-item d-flex justify-content-between'>
              کار شماره 2
              <span>
                <i className="mx-1 me-3 pointer text-success transition-200 text-hover-shadow fas fa-check" ></i>
                <i className="mx-1 me-3 pointer text-warning transition-200 text-hover-shadow fas fa-times" ></i>
                <i className="mx-1 me-3 pointer text-danger transition-200 text-hover-shadow fas fa-trash" ></i>
              </span>
            </li>
          </ul>
        </Fragment>
    )
}
export default TaskItems;