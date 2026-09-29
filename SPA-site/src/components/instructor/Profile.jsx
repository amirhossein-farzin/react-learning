function Profile({ teacherName, teacherBio, teacherImage, teacherSocial }) {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col sm:flex-row gap-8 items-center sm:items-start">
      <img
        src={teacherImage}
        alt={teacherName}
        className="w-40 h-40 object-cover rounded-full shadow"
      />
      <div className="flex-1 space-y-4">
        <h2 className="text-2xl font-bold text-gray-800">{teacherName}</h2>
        <p className="text-gray-600 leading-loose whitespace-pre-line">
          {teacherBio}
        </p>
        {teacherSocial.instagram && (
          <a href={teacherSocial.instagram} target="_blank" rel="noreferrer">
            <FaInstagram className="hover:text-pink-500 transition" />
          </a>
        )}

        {teacherSocial.linkedin && (
          <a href={teacherSocial.linkedin} target="_blank" rel="noreferrer">
            <FaLinkedin className="hover:text-blue-700 transition" />
          </a>
        )}
      </div>
    </div>
  );
}
export default Profile;
