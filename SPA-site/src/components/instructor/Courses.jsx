import { Link } from "react-router-dom";

function Courses({ courses }) {
  return (
    <div className="mt-12">
      <h3 className="text-xl font-semibold text-blue-700 mb-6">
        دوره‌های تدریسی
      </h3>
      <div className="grid sm:grid-cols-2 gap-6">
        <Link
          to={`/course/${courses.id}`}
          className="bg-white shadow-sm rounded-xl hover:shadow-md transition overflow-hidden"
        >
          <img
            src={courses.image}
            alt={courses.title}
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h4 className="font-semibold text-gray-800">{courses.title} </h4>
          </div>
        </Link>
      </div>
    </div>
  );
}
export default Courses;
