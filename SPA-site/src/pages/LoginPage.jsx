import React from "react";
import Image from "../components/login/Image";
import Form from "../components/login/Form";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-5xl w-full bg-white shadow-xl rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* Image */}
        <Image />

        {/* Form */}
        <Form />
      </div>
    </div>
  );
};

export default LoginPage;
