function Header() {
  return (
    <>
      <header class="flex justify-between items-center p-6">
        <h1 class="text-2xl text-yellow-400 font-bold hidden sm:block">
          Spiritual-NFT
        </h1>
        <nav class="hidden lg:flex gap-6">
          <a href="#" class="hover:text-yellow-400">
            Home
          </a>
          <a href="#" class="hover:text-yellow-400">
            About us
          </a>
          <a href="#" class="hover:text-yellow-400">
            Explore
          </a>
          <a href="#" class="hover:text-yellow-400">
            Pages
          </a>
          <a href="#" class="hover:text-yellow-400">
            Blog
          </a>
          <a href="#" class="hover:text-yellow-400">
            Contact
          </a>
        </nav>
        <button class="bg-gradient-to-r w-full sm:w-auto from-yellow-400 to-orange-500 text-black py-2 px-4 rounded-full font-bold">
          Wallet Connect
        </button>
      </header>
    </>
  );
}

export default Header;
