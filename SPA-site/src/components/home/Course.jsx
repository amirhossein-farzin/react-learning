import { Link } from "react-router-dom";

function Course({ courses }) {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl font-bold mb-6">دوره‌های پرطرفدار</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {courses.map((course) => {
            return (
              <Link to={`/course/${course.id}`}>
                <div
                  key={course.id}
                  className="bg-white rounded-lg shadow hover:shadow-md transition"
                >
                  <img
                    src={course.image}
                    alt={course.title}
                    className="rounded h-50 w-full object-cover mb-3"
                  />
                  <div className="p-4">
                    <h4 className="text-lg font-semibold">{course.title}</h4>
                    <p className="text-sm my-3 text-gray-600">
                      {course.teacher.name}
                    </p>
                    <p className="text-blue-600 mt-2 font-bold">
                      {course.price.toLocaleString()}
                      تومان
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export default Course;
