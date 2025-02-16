// import { useState } from "react";
import { useRef } from "react";
import "./App.css";
// import api from "./api/axios";
// import { useEffect } from "react";


function App() {

  const AuthForm = useRef();

  const handleRegister = (e) => {
    e.preventDefault();

    console.log(AuthForm.current);



    const formData = new FormData(AuthForm.current);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
  }

  return (
    <>
      <div className="h-screen flex items-center justify-between bg-amber-950 text-white">


        <div className=" w-1/2 flex flex-col justify-center items-center gap-4" >
          <form
            onSubmit={handleRegister}
            ref={AuthForm} className="flex flex-col gap-4 items-center" >
            <h1 className="text-2xl ">Register User</h1>
            <input type="email" placeholder="Enter Your Email...."
              className=" bg-yellow-900 mx-8 px-4 py-2 rounded-2xl "
            />
            <input type="password" placeholder="Enter Your Password ...."
              className=" bg-yellow-900 mx-8 px-4 py-2 rounded-2xl "
            />
            <input type="text" name="Username" id="" className=" bg-yellow-900 mx-8 px-4 py-2 rounded-2xl  "
              placeholder="Enter Your Username ...."
            />
            <input type="role" placeholder="Enter Your Role ...." className=" bg-yellow-900 mx-8 px-4 py-2 rounded-2xl " />

            <button

              // onClick={handleRegister}
              type="submit"
              className="bg-blue-700 px-4 py-2 rounded-full cursor-pointer hover:bg-black">
              Register
            </button>
          </form>
        </div>

        <span className="w-0.5 h-[70%] bg-white "></span>

        {/* register */}
        <div className=" w-1/2 flex flex-col justify-center items-center gap-4">

          <form className="flex items-center flex-col gap-4"  >
            <h1 className="text-2xl   ">Login User</h1>
            <input type="email" placeholder="Enter Your Email ...."
              className=" bg-yellow-900 mx-8 px-4 py-2 rounded-2xl "
            />
            <input type="password" placeholder="Enter Your Password ...."
              className=" bg-yellow-900 mx-8 px-4 py-2 rounded-2xl "
            />
            <button
              type="submit"
              className="bg-blue-700 px-4 py-2 rounded-full cursor-pointer hover:bg-black">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
