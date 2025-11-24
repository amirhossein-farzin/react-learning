import SliderImage from "./SliderImage";
import img1 from "/src/assets/images/1.jpg";
import img2 from "/src/assets/images/2.jpg";
import img3 from "/src/assets/images/3.jpg";
import img4 from "/src/assets/images/4.jpg";
import img5 from "/src/assets/images/5.jpg";
import img6 from "/src/assets/images/6.jpg";
import img7 from "/src/assets/images/7.jpg";

function Slider() {
  return (
    <>
      <section className="mt-12 px-10">
        <div className="flex items-center justify-center gap-5 overflow-x-auto">
          <SliderImage src={img1} />
          <SliderImage src={img2} />
          <SliderImage src={img3} />

          <div className="relative w-60 h-80 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-4 flex items-center justify-center flex-col shrink-0">
            <span className="bg-white py-1 px-3 rounded-full text-black text-xs absolute top-2 right-2">
              2h 4m 32s
            </span>

            <img className="w-full h-48 rounded-lg object-cover" src={img4} />
            <button className="bg-white rounded-full mt-2 text-black py-1 px-3 text-sm font-bold text-center w-full">
              Place Bid
            </button>
            <h3 className="text-black text-lg my-2">Mega Charizard :D</h3>
            <p className="text-sm">0.34 Ξ</p>
          </div>
          <SliderImage src={img5} />
          <SliderImage src={img6} />
          <SliderImage src={img7} />
        </div>

        <div className="flex items-center justify-center gap-2 my-6">
          <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
          <span className="w-2 h-2 rounded-full bg-white"></span>
          <span className="w-2 h-2 rounded-full bg-white"></span>
          <span className="w-2 h-2 rounded-full bg-white"></span>
        </div>
      </section>
    </>
  );
}

export default Slider;
