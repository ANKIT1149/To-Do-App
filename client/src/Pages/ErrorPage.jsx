// import React from 'react'

import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className=" bg-black w-[100%] h-screen flex-col overflow-hidden flex justify-center items-center">
      <h1 className="flex gap-5 text-white font-serif text-[60px] leading-relaxed italic">
        404:- <h2 className="text-red-800">Error Page Not Found !</h2>
      </h1>
      <Link
        className=" flex justify-center items-center mt-5 w-[200px] h-auto p-4 border-2 border-green-800 rounded-xl text-white font-mono bg-green-700"
        to="/"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
