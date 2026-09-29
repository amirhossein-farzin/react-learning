import React from "react";
import { useParams } from "react-router-dom";
import teachers from "../data/teachers";
import courses from "../data/courses";

import Profile from "../components/instructor/Profile";
import Skills from "../components/instructor/Skills";
import Courses from "../components/instructor/Courses";

const InstructorDetail = () => {
  const { id } = useParams();

  const instructor = teachers.find((t) => t.id === Number(id));

  if (!instructor) {
    return <div>مدرس پیدا نشد</div>;
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <main className="max-w-5xl mx-auto px-6 py-12">
        <Profile
          teacherName={instructor.name}
          teacherBio={instructor.bio}
          teacherImage={instructor.image}
          teacherSocial={instructor.social}
        />

        <Skills teacherSkills={instructor.skills} />

        <Courses courses={courses} />
      </main>
    </div>
  );
};

export default InstructorDetail;
