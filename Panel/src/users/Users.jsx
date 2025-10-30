import { Link, useNavigate } from "react-router-dom";
import style from "../style.module.css";
import Swal from "sweetalert2";
//TODO: Send parameter => In Content.jsx we have a <Route path="/user/add/" element={<AddUser />}> and give this path, in User.jsx Component we give this path to the Link <Link to={"/user/add"}>, Sometimes we don't want to give a path to our Route, and we want to send that parameter without that. navigate helps us for this.
//TODO: We're using a library called SweetAlert. After installing it in our project, we can display custom alert messages easily. npm install sweetalert2
//! The sweet alert site is https://sweetalert2.github.io/
const Users = () => {
  const navigate = useNavigate();
  const handleDelete = (itemId) => {
    Swal.fire({
      title: "حذف آیتم",
      text: `آیا مطمئن هستید که می خواهید ${itemId} را پاک کنید`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "ok",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "حذف شد",
          text: `آیتم ${itemId} حذف شد`,
          icon: "success",
        });
      }
    });
  };
  // 5- Create handleDelete function and using sweet alert's action
  //? We copied this code from the sweet alert's site, and put in our handledelete func
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
          <Link to={"/user/add"} state={"parameter"}>
            <button className="btn btn-success">
              <i className="fas fa-plus text-light"></i>
            </button>
          </Link>
          {/* 3- We can pass parameters using the 'state' prop in <Link>, without needing to include them in the URL path in Route. */}
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
                  return navigate("/user/add/2", {
                    state: { id: 5, name: "amir" },
                  });
                }}
              ></i>
              {/* 1- Adding our parameter to navigate =>navigate("/user/add/2", ... ) / the first value is path, the second one is parameter */}
              {/* Hint: We pass data using the 'state' property in navigate. The value can be an object if we have multiple parameters. */}
              <i
                onClick={() => handleDelete(1)}
                className="fas fa-trash text-danger mx-2 pointer"
              ></i>
              {/* 4- Using alert by sweet alert. Adding onClick and create handleDelete func */}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Users;
