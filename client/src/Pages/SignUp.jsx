// import React from 'react'

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignUp = () => {
  const [todoData, setTododata] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const handlechange = (e) => {
    setTododata({
      ...todoData,
      [e.target.id]: e.target.value,
    });
  };
  //  console.log(todoData)

  const Submitform = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch("/todo/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(todoData),
      });

      const data = await res.json();
      if (data.success === false) {
        setError(data.meesage);
        setLoading(true);
        toast.error("Registeration failed try again");
      }

      setError(null);
      setLoading(false);

      setTododata(data);
      toast.success('Account created successfully')
      setTimeout(() => {
        navigate("/signin");
      }, 3000);
    } catch (error) {
      console.log(error);
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="image1 w-[100%] h-screen flex justify-center items-center">
      <div className="flex justify-center items-center w-[400px] h-[500px] border-[#3d52a0] bg-[#3d52a0] rounded-2xl flex-col">
        <h1 className=" text-white font-serif font-bold text-[25px] border-b-2 border-b-orange-500">
          Create Account
        </h1>
        <form
          action=""
          className="flex justify-center items-center flex-col mt-1 p-2"
          onSubmit={Submitform}
        >
          <input
            type="text"
            name=""
            id="todoUser"
            onChange={handlechange}
            placeholder="Enter Your Name"
            className="mt-7 w-[300px] border-2 outline-none p-3 bg-transparent font-bold font-serif text-black rounded-2xl hover:border-orange-900 transition-all  shadow-inner shadow-black"
          />
          <input
            type="email"
            name=""
            id="todoemail"
            onChange={handlechange}
            placeholder="Enter Your Email"
            className="mt-7 w-[300px] border-2 outline-none p-3 bg-transparent font-bold font-serif text-black rounded-2xl hover:border-orange-900 transition-all shadow-inner shadow-black"
          />
          <input
            type="password"
            name=""
            id="todoPassword"
            onChange={handlechange}
            placeholder="Enter Your Password"
            className="mt-7 w-[300px] border-2 outline-none p-3 bg-transparent font-bold font-serif text-black rounded-2xl hover:border-orange-900 transition-all  shadow-inner shadow-black"
          />
          <button
            type="submit"
            className="border-2 mt-8 flex justify-center items-center mx-auto w-[350px] p-2 h-auto rounded-xl border-[#2ed698] text-white font-bold font-serif cursor-pointer hover:bg-transparent transition-all shadow-2xl shadow-black hover:shadow-none bg-[#2ed698]"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
