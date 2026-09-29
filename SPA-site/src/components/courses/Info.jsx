import { FaClock, FaSignal, FaUserGraduate } from "react-icons/fa";

function Info({ courseDuration, courseLevel, courseTeacher }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm text-gray-700 mb-10">
      <div className="flex items-center gap-2">
        <FaClock className="text-blue-600" />
        <span>{courseDuration}</span>
      </div>

      <div className="flex items-center gap-2">
        <FaSignal className="text-blue-600" />
        <span>{courseLevel}</span>
      </div>

      <div className="flex items-center gap-2">
        <FaUserGraduate className="text-blue-600" />
        <span>{courseTeacher}</span>
      </div>
    </div>
  );
}

export default Info;
