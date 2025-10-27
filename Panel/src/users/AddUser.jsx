//TODO: 1- Create AddUser component for adding new user when the user clicking on the + button in page
import style from "../style.module.css";
const AddUser = () => {
  return (
    <div className="{`${style.item-content} mt-5 p-4 container-fluid container`}">
      <h4 className="text-center text-primary">افزودن کاربر</h4>
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
            <button type="button" className="btn btn-danger ms-2">
              بازگشت
            </button>
            <button type="submit" className="btn btn-primary">
              ذخیره
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default AddUser;
