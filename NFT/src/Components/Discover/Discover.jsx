import Card from "../UI/Card";

function Discover() {
  const cards = [
    {
      id: 1,
      title: "CryptoPunk 3D #13",
      subtitle: "3D-cryptoPunk",
      img: "/src/assets/images/5.jpg",
      price: "9.61 ETH",
      bid: "4.12 ETH",
      change: "-23%",
      changeColor: "text-red-500",
      active: false,
    },
    {
      id: 2,
      title: "InvisibleFriend #54",
      subtitle: "INVISIBLE_FRIEND.CO",
      img: "/src/assets/images/3.jpg",
      price: "6.73 ETH",
      bid: "1.55 ETH",
      change: "+13.5%",
      changeColor: "text-green-500",
      active: false,
    },
    {
      id: 3,
      title: "HAPE #8064",
      subtitle: "HAPE PRIME",
      img: "/src/assets/images/7.jpg",
      price: "15.8 ETH",
      bid: "9.45 ETH",
      change: "+18.45%",
      changeColor: "text-green-500",
      active: false,
    },
    {
      id: 4,
      title: "GambleMaster #54",
      subtitle: "INVISIBLE_FRIEND.CO",
      img: "/src/assets/images/8.jpg",
      price: "6.73 ETH",
      bid: "1.55 ETH",
      change: "-13%",
      changeColor: "text-red-500",
      active: false,
    },
    {
      id: 5,
      title: "GambleMaster #54",
      subtitle: "INVISIBLE_FRIEND.CO",
      img: "/src/assets/images/8.jpg",
      price: "6.73 ETH",
      bid: "1.55 ETH",
      change: "-13%",
      changeColor: "text-red-500",
      active: false,
    },
    {
      id: 6,
      title: "GambleMaster #54",
      subtitle: "INVISIBLE_FRIEND.CO",
      img: "/src/assets/images/8.jpg",
      price: "6.73 ETH",
      bid: "1.55 ETH",
      change: "-13%",
      changeColor: "text-red-500",
      active: false,
    },
    {
      id: 7,
      title: "GambleMaster #54",
      subtitle: "INVISIBLE_FRIEND.CO",
      img: "/src/assets/images/8.jpg",
      price: "6.73 ETH",
      bid: "1.55 ETH",
      change: "-13%",
      changeColor: "text-red-500",
      active: false,
    },
    {
      id: 8,
      title: "GambleMaster #54",
      subtitle: "INVISIBLE_FRIEND.CO",
      img: "/src/assets/images/8.jpg",
      price: "6.73 ETH",
      bid: "1.55 ETH",
      change: "-13%",
      changeColor: "text-red-500",
      active: false,
    },
  ];
  return (
    <>
      <section className="bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] py-16 px-5 lg:px-15">
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-orange-400 font-bold text-center">
          Discover Items
        </h2>
        <div className="my-8">
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <select className="bg-[#1a1a2e] text-white px-4 py-2 rounded-lg border border-white">
              <option>Category</option>
            </select>
            <select className="bg-[#1a1a2e] text-white px-4 py-2 rounded-lg border border-white">
              <option>Items</option>
            </select>
            <select className="bg-[#1a1a2e] text-white px-4 py-2 rounded-lg border border-white">
              <option>Status</option>
            </select>
            <select className="bg-[#1a1a2e] text-white px-4 py-2 rounded-lg border border-white">
              <option>Price Range</option>
            </select>
            <select className="bg-[#1a1a2e] text-white px-4 py-2 rounded-lg border border-white">
              <option>Sort By: Recently Added</option>
            </select>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center items-start">
            {cards.map((card) => (
              <Card key={card.id} {...card} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Discover;
