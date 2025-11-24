function CreatorItem({ icon, title, description }) {
  return (
    <>
      <div
        className="mt-12 bg-gradient-to-br from-[#06113c] to-[#020b33]
        w-full sm:w-[48%] lg:w-[45%]
        border border-yellow-400/40 rounded-lg p-6"
      >
        <i className={`fa-brands ${icon} text-7xl text-yellow-400`}></i>
        <div className="my-4 text-yellow-400 text-2xl font-bold">{title}</div>
        <p className="text-sm text-gray-300">{description}</p>
      </div>
    </>
  );
}

export default CreatorItem;
