function Footer() {
  return (
    <>
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="text-lg font-semibold mb-4 md:mb-0">
            &copy; 2025 <span className="text-teal-400">Amirhossein</span>. All
            rights reserved.
          </div>

          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
