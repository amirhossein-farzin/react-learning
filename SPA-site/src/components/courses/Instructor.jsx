function Instructor({ courseTeacherImage, courseTeacher, courseTeacherBio }) {
  return (
    <div className="flex items-center gap-4 bg-gray-100 p-4 rounded-xl mb-10">
      <img
        src={courseTeacherImage}
        alt={courseTeacher}
        className="w-16 h-16 rounded-full border-2 border-blue-500"
      />
      <div>
        <h4 className="text-lg font-semibold">{courseTeacher}</h4>
        <p className="text-sm text-gray-500">
            {courseTeacherBio}
        </p>
      </div>
    </div>
  );
}
export default Instructor;
