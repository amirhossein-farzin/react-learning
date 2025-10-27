import { Link } from "react-router-dom";
import style from "../style.module.css";

const Users = () => {
  return (
    <div className={`${style.item_content} mt-5 p-4 container-fluid`}>
      <h4 className="text-center">مدیریت کاربران</h4>
      <div className="row my-2 mb-4 justify-content-between w-100 mx-0">
        <div className="form-group col-10 col-md-6 col-lg-4">
          <input
            type="text"
            className="form-control shadow"
            placeholder="جستجو"
          />
        </div>
        <div className="col-2 text-start px-0">
          <Link to={"/user/add"}>
            <button className="btn btn-success">
              <i className="fas fa-plus text-light"></i>
            </button>
          </Link>
          {/* 4- This button is add user's button, so we linking that to /user/add - that's mean when the user clicking on + button, go to AddUser component */}
        </div>
      </div>
      <table className="table bg-light shadow">
        <thead>
          <tr>
            <th>#</th>
            <th>نام</th>
            <th>نام کاربری</th>
            <th>ایمیل</th>
            <th>عملیات</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Amirhossein</td>
            <td>Farzin</td>
            <td>amirfarzinf80@gmail.com</td>
            <td>
              <i className="fas fa-edit text-warning mx-2 pointer"></i>
              <i className="fas fa-trash text-danger mx-2 pointer"></i>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Users;
