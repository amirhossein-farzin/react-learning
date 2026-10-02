import React from "react";
import courses from "../data/courses";
import { Link } from "react-router-dom";
const Courses = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Main Content */}
      <main className="grow w-[92rem] mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold mb-10 text-center">
          دوره‌های آموزشی
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {courses.map((c) => {
            return (
              <div
                key={c.id}
                className="bg-white rounded-lg shadow hover:shadow-lg transition p-5 flex flex-col"
              >
                <img
                  src={c.image}
                  alt={c.title}
                  className="rounded-md h-60 w-full object-cover mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{c.title}</h3>
                <p className="text-gray-600 mb-1">{c.teacher.name}</p>
                <p className="text-blue-600 font-bold mb-4">رایگان</p>
                <Link
                  to={`/course/${c.id}`}
                  className="mt-auto bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                >
                  مشاهده دوره
                </Link>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default Courses;
