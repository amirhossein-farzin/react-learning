function Banner({courseImage, courseTitle}) {
  return (
    <img
      src={courseImage}
      alt={courseTitle}
      className="w-full h-[300px] object-cover"
    />
  );
}
export default Banner;
