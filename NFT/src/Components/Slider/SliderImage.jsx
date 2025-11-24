function SliderImage({ src }) {
  return (
    <>
      <img
        className="w-40 h-72 rounded-2xl object-cover transform hover:scale-105 cursor-pointer transition"
        src={src}
      />
    </>
  );
}

export default SliderImage;
