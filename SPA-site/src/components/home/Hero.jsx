import { Link } from "react-router-dom";
function Hero() {
  return (
    <section className="bg-blue-50 text-center py-20 px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        یادگیری برنامه‌نویسی از پایه تا پیشرفته
      </h2>
      <p className="text-lg text-gray-600 mb-6">
        با بهترین مدرسین ایران در مسیر یادگیری همراه شو
      </p>
      <Link to="/courses" className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        شروع یادگیری
      </Link>
    </section>
  );
}
export default Hero;
