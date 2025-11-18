function Hero() {
  return (
    <>
      <div class="text-center mt-10">
        <p class="text-3xl md:text-4xl lg:text-5xl">
          <span class="text-yellow-400">NFT's</span>
          Unlock Digital
          <span class="text-orange-400"> Creativity </span>
          and
          <span class="text-blue-400">Ownership</span>
        </p>
        <p class="max-w-xl mx-auto mt-8 text-gray-300">
          Welcome to our NFT Collectibles platform, where you can explore a
          curated selection of unique digital art...
        </p>

        <div class="mt-6 gap-4 flex justify-center flex-col sm:flex-row">
          <button class="bg-yellow-400 text-black px-6 py-2 sm:rounded-full hover:bg-yellow-500 transition-all">
            Discover More
          </button>
          <button class="border border-white sm:rounded-full px-6 py-2 hover:bg-white hover:text-black transition-all">
            All collections
          </button>
        </div>
      </div>
    </>
  );
}
export default Hero;