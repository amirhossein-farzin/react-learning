import { Link, useNavigate } from "react-router-dom";
import style from "../style.module.css";
//TODO: We need to add functionality to the Edit button so that it opens the edit form.
const Users = () => {
  const navigate = useNavigate();
  {
    /* 3- Create a variable and set useNavigate as value  */
  }
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
              <i
                className="fas fa-edit text-warning mx-2 pointer"
                onClick={() => {
                  return navigate("/user/add/2");
                }}
              ></i>
              {/* 1- Sometimes we can't or don't want to use <link>, we have a hook in react router that we called useNavigate() */}
              {/* 2- Now we add useNavigate in our code and using that as an onClick in our tag */}
              {/* 4- We use onClick and create a function and give an action (we must use our navigate), put the path in navigate */}
              <i className="fas fa-trash text-danger mx-2 pointer"></i>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Users;
