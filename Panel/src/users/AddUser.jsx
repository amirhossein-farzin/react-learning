import { Link, useParams } from "react-router-dom";
import style from "../style.module.css";
const AddUser = () => {
  const { userId } = useParams();
  //* 2- Using useParams to recive our userId for Edit's function
  // useParams() is a React Router hook that returns an object of key/value pairs
  // from the current URL. It's used to access dynamic route parameters.
  // Example: If the route is "/user/:id", useParams() will return { id: '123' }
  // when the URL is "/user/123".

  return (
    <div className="{`${style.item-content} mt-5 p-4 container-fluid container`}">
      <h4 className="text-center text-primary">
        {userId ? "ویرایش کاربر" : "افزودن کاربر"}
        {/* 3- If we have userId, show "Editing"; if not, show "Adding". */}
      </h4>
      <div className="row justify-content-center mt-5">
        <form className="col-12 col-md-6 bg-light rounded shadow-lg p-3">
          <div className="mb-3">
            <label for="exampleInputEmail" className="form-label">
              نام و نام خانوادگی
            </label>
            <input type="text" className="form-control" />
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail" className="form-label">
              نام کاربری
            </label>
            <input type="text" className="form-control" />
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail" className="form-label">
              ایمیل
            </label>
            <input type="text" className="form-control" />
          </div>
          <div className="mb-3 row">
            <div className="col-6 my-1">
              <label for="exampleInputEmail" className="form-label">
                آدرس
              </label>
              <input type="text" className="form-control" />
            </div>

            <div className="col-6 my-1">
              <input type="text" className="form-control" placeholder="شهر" />
            </div>
            <div className="col-6 my-1">
              <input
                type="text"
                className="form-control"
                placeholder="خیابان"
              />
            </div>
            <div className="col-6 my-1">
              <input
                type="text"
                className="form-control"
                placeholder="ادامه آدرس"
              />
            </div>

            <div className="col-6 my-1">
              <input
                type="text"
                className="form-control"
                placeholder="کد پستی"
              />
            </div>
          </div>

          <div className="col-12 text-start">
            <Link to={"/user"}>
              <button type="button" className="btn btn-danger ms-2">
                {userId ? "لغو" : "بازگشت"}
                {/* 5- If we have userId, show "cancel"; if not, show "back". */}
              </button>
            </Link>
            <button type="submit" className="btn btn-primary">
              {userId ? "ویرایش" : "افزودن"}
              {/* 4- If we have userId, show "Editing"; if not, show "Adding". */}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default AddUser;
