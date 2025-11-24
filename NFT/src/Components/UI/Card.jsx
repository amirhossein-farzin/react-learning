function Card({
  title,
  subtitle,
  img,
  price,
  bid,
  change,
  changeColor,
  active,
}) {
  return (
    <>
      <div
        class={`rounded-lg bg-gradient-to-b from-[#08194a] to-[#020b33] p-4 ${
          active ? "border-2 border-yellow-400" : ""
        }`}
      >
        <img class="w-full object-cover rounded-lg" src={img} />
        <h3 class="mt-3">{title}</h3>
        <span class="text-gray-300 text-sm mt-3 flex">{subtitle}</span>
        <div class="flex justify-between items-center mt-3 text-sm">
          <span>{price}</span>
          <span>{bid}</span>
          <span class={changeColor}>{change}</span>
        </div>
        <div class="text-gray-300 text-end text-xs mt-3">Latest Bid</div>
        {active && (
          <button class="bg-yellow-400 text-black mt-3 rounded-lg py-2 text-center w-full text-sm">
            Collect Now
          </button>
        )}
      </div>
    </>
  );
}

export default Card;
