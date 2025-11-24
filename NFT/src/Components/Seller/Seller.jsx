import SellerItem from "./SellerItem";

function Seller() {
  const items = [
    {
      id: 1,
      img: "/src/assets/images/1.jpg",
      title: "Courtney Henry",
      price: "7,843.95",
    },
    {
      id: 2,
      img: "/src/assets/images/2.jpg",
      title: "Courtney JOHN",
      price: "9,843.95",
    },
    {
      id: 3,
      img: "/src/assets/images/1.jpg",
      title: "Courtney Henry",
      price: "7,843.95",
    },
    {
      id: 4,
      img: "/src/assets/images/1.jpg",
      title: "Courtney Henry",
      price: "7,843.95",
    },
    {
      id: 5,
      img: "/src/assets/images/1.jpg",
      title: "Courtney Henry",
      price: "7,843.95",
    },
    {
      id: 6,
      img: "/src/assets/images/1.jpg",
      title: "Courtney Henry",
      price: "7,843.95",
    },
    {
      id: 7,
      img: "/src/assets/images/1.jpg",
      title: "Courtney Henry",
      price: "7,843.95",
    },
    {
      id: 8,
      img: "/src/assets/images/1.jpg",
      title: "Courtney Henry",
      price: "7,843.95",
    },
  ];

  return (
    <>
      <section className="bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] py-16 px-5 lg:px-15">
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-orange-400 font-bold text-center">
          Top Seller of This Week
        </h2>
        <div className="mt-12 flex justify-between items-center gap-3">
          <i className="fas fa-arrow-left text-orange-500 text-2xl"></i>

          <div className="flex items-center justify-center gap-4 overflow-x-auto py-4">
            {items.map((item) => (
              <SellerItem key={item.id} {...item} />
            ))}
          </div>

          <i className="fas fa-arrow-right text-orange-500 text-2xl"></i>
        </div>
      </section>
    </>
  );
}

export default Seller;
