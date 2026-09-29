import React from "react";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const teachers = [
  {
    id: 1,
    name: "محمد محمدی",
    specialty: "توسعه فرانت‌اند - React",
    image: "/images/teachers/men.jpg",
    instagram: "https://instagram.com/mohammadi",
    linkedin: "https://linkedin.com/in/mohammadi",
    twitter: "#",
  },
  {
    id: 2,
    name: "زهرا رضایی",
    specialty: "پایتون و علم داده",
    image: "/images/teachers/men.jpg",
    instagram: "#",
    linkedin: "https://linkedin.com/in/zahra",
    twitter: "https://twitter.com/zahra",
  },
  {
    id: 3,
    name: "علی حسینی",
    specialty: "امنیت وب و تست نفوذ",
    image: "/images/teachers/men.jpg",
    instagram: "#",
    linkedin: "#",
    twitter: "#",
  },
  {
    id: 3,
    name: "علی حسینی",
    specialty: "امنیت وب و تست نفوذ",
    image: "/images/teachers/men.jpg",
    instagram: "#",
    linkedin: "#",
    twitter: "#",
  },
  {
    id: 3,
    name: "علی حسینی",
    specialty: "امنیت وب و تست نفوذ",
    image: "/images/teachers/men.jpg",
    instagram: "#",
    linkedin: "#",
    twitter: "#",
  },
  {
    id: 3,
    name: "علی حسینی",
    specialty: "امنیت وب و تست نفوذ",
    image: "/images/teachers/men.jpg",
    instagram: "#",
    linkedin: "#",
    twitter: "#",
  },
];

const Instructor = () => {
  
  return (
    <div className="min-h-screen bg-gray-50">


      {/* Main */}
      <main className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">مدرسین ما</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {teachers.map((teacher) => (
            <div
              key={teacher.id}
              className="bg-white rounded-xl shadow-md p-5 flex flex-col items-center text-center hover:shadow-lg transition">
              <img
                src={teacher.image}
                alt={teacher.name}
                className="rounded-full w-32 h-32 object-cover border-4 border-blue-500 mb-4"
              />
              <h3 className="text-xl font-semibold mb-1">{teacher.name}</h3>
              <p className="text-gray-600 mb-4">{teacher.specialty}</p>
              <div className="flex gap-4 text-blue-600 text-lg">
                {teacher.instagram && (
                  <a
                    href={teacher.instagram}
                    target="_blank"
                    rel="noopener noreferrer">
                    <FaInstagram />
                  </a>
                )}
                {teacher.linkedin && (
                  <a
                    href={teacher.linkedin}
                    target="_blank"
                    rel="noopener noreferrer">
                    <FaLinkedin />
                  </a>
                )}
                {teacher.twitter && (
                  <a
                    href={teacher.twitter}
                    target="_blank"
                    rel="noopener noreferrer">
                    <FaTwitter />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>


    </div>
  );
};

export default Instructor;
