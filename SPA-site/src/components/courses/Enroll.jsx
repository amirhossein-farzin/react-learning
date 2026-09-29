import { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";

function Enroll({ course }) {
  const {addToCart} = useContext(CartContext)
  return (
    <div className="bg-blue-50 border border-blue-200 p-6 rounded-2xl flex flex-col sm:flex-row justify-between items-center">
      <div className="mb-4 sm:mb-0">
        <h4 className="text-xl font-bold text-blue-700 mb-1">قیمت دوره</h4>
        <p className="text-2xl font-semibold">
          {course.price.toLocaleString()} تومان
        </p>
      </div>
      <button
      onClick={()=>addToCart(course)}
      className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition">
        ثبت‌نام در دوره
      </button>
    </div>
  );
}
export default Enroll;
