import { useState } from "react";
import React from 'react'
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

function SignUp() {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordError, setPasswordError] = useState(false);
    const navigate = useNavigate();

    async function handleRegistration(e) {
      e.preventDefault();
    
      try {
        const res = await fetch("http://localhost:3001/api/Users", {
          method: "POST",
          body: JSON.stringify({ firstname, lastname, email, password }),
          headers: { "Content-Type": "application/json" },
        });
    
        if (res.ok) {
          alert("Registration successful! Please login.");
          navigate('/login'); // Trigger the redirect after registration
        } else {
          const errorData = await res.json(); // Try to parse the response body as JSON
          alert(`Registration failed: ${errorData.message || 'Unknown error'}`);
        }
      } catch (error) {
        console.error("Error during registration:", error);
        alert("An error occurred during registration. Please try again later.");
      }
    }
    

  return (
    <>
    <Navbar/>
    <div
    className="m-5 lg:px-16 lg:py-5 text-white"
  >
    <div className="border mx-auto mt-5 text-xs flex flex-col gap-2 rounded p-4 lg:p-7 w-full max-w-sm shadow-xl">
      <div className="flex justify-center items-center text-lg lg:mb-3">
        <h1>Sign Up for <span className='text-red-400'>Zooflix</span> </h1> 
      </div>
      <hr className="mb-3" />
      <form onSubmit={handleRegistration}>
      <div className="mb-6">
          <label htmlFor="firstname" className="block text-sm leading-6 ">
            First Name
          </label>
          <input
            type="firstname"
            className="mt-2 appearance-none text-black rounded-md block w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400 focus:ring-2 ring-red-100 focus:ring-red-200  ring-1 "
            onChange={(e) => setFirstname(e.target.value)}
            value={firstname}
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="lastname" className="block text-sm leading-6 ">
            Last Name
          </label>
          <input
            type="lastname"
            className="mt-2 appearance-none text-black rounded-md block w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400 focus:ring-2 ring-red-100 focus:ring-red-200  ring-1 "
            onChange={(e) => setLastname(e.target.value)}
            value={lastname}
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block text-sm leading-6 ">
            Email address
          </label>
          <input
            type="email"
            id="email"
            className={`mt-2 text-black rounded-md block w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400 focus:ring-2 ring-red-100 focus:ring-red-300 ring-1 `}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-sm leading-6 ">
            Password
          </label>
          <input
            type="password"
            className="mt-2 appearance-none text-black rounded-md block w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400 focus:ring-2 ring-red-100 focus:ring-red-200  ring-1 "
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-sm leading-6 ">
            Confirm Password
          </label>
          <input
            type="password"
            className="mt-2 appearance-none text-black rounded-md block w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400 focus:ring-2 ring-red-100 focus:ring-red-200  ring-1 "
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="inline-flex justify-center rounded-lg text-sm py-2.5 px-4 bg-red-600 hover:bg-red-700 w-full"
        >
          <span className="text-white">Register</span>
        </button>
      </form>
    </div>
  </div></>
  )
}

export default SignUp;