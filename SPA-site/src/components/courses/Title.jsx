function Title({courseTitle, cousrseDesc}) {
  return (
    <>
      <h2 className="text-3xl font-bold text-gray-800 mb-4">
       {courseTitle}
      </h2>
      <p className="text-gray-600 mb-6 leading-relaxed">
        {cousrseDesc}
      </p>
    </>
  );
}
export default Title;
