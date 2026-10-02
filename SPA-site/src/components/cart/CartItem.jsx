import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../redux/cartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-between border-b pb-4">
      <div className="flex items-center gap-4">
        <img
          src={item.image}
          alt={item.title}
          className="w-20 h-20 rounded-xl object-cover"
        />
        <div>
          <h2 className="font-semibold">{item.title}</h2>
          <p className="text-gray-500">
            قیمت واحد: {item.price.toLocaleString()} تومان
          </p>
          <p className="text-sm mt-1 text-gray-600">تعداد: 1</p>
        </div>
      </div>
      <div className="text-center">
        <p className="text-lg font-bold text-emerald-600">
          {item.price.toLocaleString()} تومان
        </p>
        <button
          onClick={() => dispatch(removeFromCart(item.id))}
          className="flex rounded items-center justify-center gap-2 text-white px-4 mt-3 py-2 text-sm bg-red-500 hover:text-red-700 transition"
        >
          <FaTrash className="w-3 h-3" />
          <span>حذف از سبد خرید</span>
        </button>
      </div>
    </div>
  );
}
export default CartItem;
