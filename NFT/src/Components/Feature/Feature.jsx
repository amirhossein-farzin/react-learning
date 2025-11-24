import Card from "../UI/Card";

function Feature() {
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
      active: true,
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
  ];

  return (
    <>
      <section class="bg-gradient-to-b from-[#020b33] to-[#06113c] py-16 px-4">
        <div>
          <h2 class="text-2xl md:text-3xl lg:text-4xl text-center text-yellow-400 font-bold">
            Featured Item
          </h2>
          <div class="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center items-start">
            {cards.map((card) => (
              <Card key={card.id} {...card} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Feature;
