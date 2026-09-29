import React from "react";
import { useParams } from "react-router-dom";
import courses from "../data/courses";
import Title from "../components/courses/Title";
import Banner from "../components/courses/Banner";
import Info from "../components/courses/Info";
import Instructor from "../components/courses/Instructor";
import Outline from "../components/courses/Outline";
import Enroll from "../components/courses/Enroll";

const CourseDetail = () => {
  const { id } = useParams();
  const course = courses.find((c) => c.id === Number(id));
  console.log("COURSE:", course);

  if (!course) {
    return "not find";
  }
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Main Content */}
      <main className="max-w-6xl mx-auto py-12 px-6">
        {/* Course Banner */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-md">
          <Banner courseImage={course.image} courseTitle={course.title} />
          <div className="p-8">
            {/* Title + Desc */}
            <Title
              courseTitle={course.title}
              cousrseDesc={course.description}
            />

            {/* Info Box */}
            <Info
              courseDuration={course.duration}
              courseLevel={course.level}
              courseTeacher={course.teacher.name}
            />

            {/* Instructor Box */}
            <Instructor
              courseTeacherImage={course.teacher.avatar}
              courseTeacher={course.teacher.name}
              courseTeacherBio={course.teacher.bio}
            />

            {/* Outline */}
            <Outline courseOutline={course.outline} />

            {/* Enroll Section */}
            <Enroll course={course} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default CourseDetail;
