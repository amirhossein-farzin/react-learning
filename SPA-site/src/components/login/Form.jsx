import { useEffect, useState } from "react";
import { FaLock, FaEnvelope, FaUserAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/userSlice";
function Form() {
  const dispatch = useDispatch();
  const { user, success, message } = useSelector((state) => state.user);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const navigate = useNavigate("/dashboard");
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };
  useEffect(() => {
    if (success && user) {
      navigate("/dashboard")
    }
  }, [success, user]);
  return (
    <div className="p-8 sm:p-12">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        ورود به حساب کاربری
      </h2>

      <form onSubmit={submitHandler} className="space-y-5">
        {/* Email */}
        <div className="relative">
          <FaEnvelope className="absolute right-4 top-3 text-gray-400" />
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="ایمیل"
            className="w-full pr-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />
        </div>

        {/* Password */}
        <div className="relative">
          <FaLock className="absolute right-4 top-3 text-gray-400" />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="رمز عبور"
            className="w-full pr-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />
        </div>
        {success === false && message && (
          <p className="text-bold text-center text-red-500">{message}</p>
        )}
        <div className="flex justify-between text-sm text-gray-500">
          <label className="flex items-center gap-1">
            <input type="checkbox" className="accent-blue-600" />
            مرا به خاطر بسپار
          </label>
          <a href="#" className="hover:text-blue-600">
            فراموشی رمز؟
          </a>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold text-sm transition"
        >
          ورود به حساب
        </button>

        <div className="text-center text-sm text-gray-600">
          حساب نداری؟{" "}
          <a href="#" className="text-blue-600 hover:underline">
            ثبت‌نام کن
          </a>
        </div>
      </form>
    </div>
  );
}
export default Form;
