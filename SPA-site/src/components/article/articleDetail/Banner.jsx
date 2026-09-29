function Banner({ articleCover, articleTitle }) {
  return (
    <>
      <div className="overflow-hidden rounded-2xl mb-6 shadow">
        <img
          alt={articleTitle}
          className="w-full h-64 object-cover"
          src={articleCover}
        />
      </div>
      <h2 className="text-3xl font-bold text-gray-800 mb-3">
        {articleTitle}
      </h2>
    </>
  );
}
export default Banner;
