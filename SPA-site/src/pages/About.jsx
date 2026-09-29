import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Main Content */}
      <main className="flex-grow max-w-4xl mx-auto px-6 py-16 text-gray-800">
        <h2 className="text-4xl font-bold mb-6 text-center">درباره ما</h2>
        <p className="mb-6 text-lg leading-relaxed">
          ما در{" "}
          <span className="font-semibold text-blue-600">
            <Link to={"/"}>DevLearn</Link>
          </span>{" "}
          معتقدیم که یادگیری برنامه‌نویسی باید ساده، هدفمند و موثر باشد. با
          ارائه دوره‌های جامع و به‌روز، تلاش می‌کنیم تا بهترین تجربه آموزشی را
          برای علاقه‌مندان به فناوری‌های روز دنیا فراهم کنیم.
        </p>
        <p className="mb-6 text-lg leading-relaxed">
          تیم ما متشکل از مدرسین حرفه‌ای و با تجربه است که در زمینه‌های مختلفی
          مانند فرانت‌اند، بک‌اند، هوش مصنوعی، امنیت و موبایل فعالیت دارند. هدف
          ما کمک به رشد و پیشرفت شما در مسیر برنامه‌نویسی است.
        </p>
        <p className="mb-6 text-lg leading-relaxed">
          به جمع خانواده‌ی{" "}
          <span className="font-semibold text-blue-600">
            <Link to={"/"}>DevLearn</Link>
          </span>{" "}
          بپیوندید و مسیر یادگیری خود را با ما آغاز کنید!
        </p>
      </main>
    </div>
  );
};

export default About;
