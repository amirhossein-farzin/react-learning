function Order({ cartItems }) {
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md h-fit">
      <h3 className="text-xl font-semibold mb-4 border-b pb-2">خلاصه سفارش</h3>

      <div className="flex justify-between py-2 text-gray-600">
        <span>تعداد آیتم‌ها:</span>
        <span>{cartItems.length}</span>
      </div>

      <div className="flex justify-between py-2 text-gray-600">
        <span>هزینه ارسال:</span>
        <span className="text-green-600">رایگان</span>
      </div>

      <div className="flex justify-between py-2 text-lg font-bold text-gray-800 border-t mt-4 pt-4">
        <span>مبلغ قابل پرداخت:</span>
        <span>
          {totalPrice.toLocaleString()} تومان
        </span>
      </div>

      <button className="mt-6 w-full bg-emerald-600 text-white py-3 rounded-xl font-semibold hover:bg-emerald-700 transition">
        نهایی‌سازی خرید
      </button>
    </div>
  );
}
export default Order;
