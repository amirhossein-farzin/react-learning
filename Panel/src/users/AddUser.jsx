import { Link, useNavigate, useParams } from "react-router-dom";
import style from "../style.module.css";
const AddUser = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  {
    /* 7- Create a variable and set useNavigate again */
  }
  return (
    <div className="{`${style.item-content} mt-5 p-4 container-fluid container`}">
      <h4 className="text-center text-primary">
        {userId ? "ویرایش کاربر" : "افزودن کاربر"}
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
            <button
              type="button"
              className="btn btn-danger ms-2"
              onClick={() => {
                return navigate(-1);
              }}
            >
              {userId ? "لغو" : "بازگشت"}
            </button>
            {/* 5- Now we want to make this button's action */}
            {/* 7- Sometimes we just want to go back to the previous page. In that case, using -1 means "go back one step in history". */}
            <button type="submit" className="btn btn-primary">
              {userId ? "ویرایش" : "افزودن"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default AddUser;
