function SellerItem({ id, img, title, price }) {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="relative">
          <img
            className="w-20 h-20 border-4 border-yellow-400 rounded-full"
            src={img}
          />
          <span className="w-7 h-7 bg-yellow-400 rounded-full text-black flex items-center justify-center text-xs absolute -top-2 right-0">
            {id}
          </span>
        </div>
        <h3 className="mt-3 mb-1">{title}</h3>
        <span className="text-xs text-gray-300">{price} Ξ</span>
      </div>
    </>
  );
}

export default SellerItem;
