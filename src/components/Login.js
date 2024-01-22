import React from 'react'
import { useState } from 'react';
import Navbar from './Navbar';
import { Navigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [redirect, setRedirect] = useState(false);
    const [emails, setEmails] = useState();
    const [apiPassword, setApiPassword] = useState("");


    async function login(e) {
        e.preventDefault();
        const res = await fetch("http://localhost:3001/api/Users/email/"+email, {
          method: "GET",
          headers: {
            'Content-Type': 'application/json', // Set the content type header
          },
        });
    
        if (res.ok) {
          res.json().then(data => {
            setEmail(data);
            setApiPassword(data.password);
            if (password === data.password){
              saveUserData(data.firstname, data.lastname, data.email, data.id)
              alert("Login successful! Redirecting to dashboard.");
              setRedirect(true);
            }
            else {
            alert("Login Failed: Wrong Password");
            }
            
          })
          
        } else {
          const errorData = await res.json();
          alert(`Login failed: ${errorData.message || 'Unknown error'}`);
        }
      }
      // Save data to local storage
          function saveUserData(firstName, lastName, email, id) {
            const userData = {
              firstName: firstName,
              lastName: lastName,
              email: email,
              id: id
            };

            localStorage.setItem('userData', JSON.stringify(userData));
            console.log("here>>>>>>>>.",localStorage.getItem('userData'));
          }
    
      if (redirect) {
        return <Navigate to={"/dashboard"} />;
      }

  return (
    <>
     <Navbar/>
    <div
    className="m-5 lg:px-16 lg:py-5 text-white"
  >
    <div className="border mx-auto mt-5 text-xs flex flex-col gap-2 rounded p-4 lg:p-7 w-full max-w-sm shadow-xl">
      <div className="flex justify-center items-center text-lg lg:mb-3">
        <h1>Login to <span className='text-red-400'>Zooflix</span>  </h1> 
      </div>
      <hr/>
      <form onSubmit={login} >
        <div className="mb-6">
          <label htmlFor="email" className="block text-sm leading-6 ">
            <div>
              
            </div>
            Email address
          </label>
          <input
            type="email"
            id="email"
            className={`mt-2 text-black rounded-md block w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400 focus:ring-2 ring-red-100 focus:ring-red-300 ring-1 `}
            onChange={(e) => setEmail(e.target.value)}
            required
            value={email}
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-sm leading-6 ">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="mt-2 appearance-none text-black rounded-md block w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400 focus:ring-2 ring-red-100 focus:ring-red-200  ring-1 "
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </div>
        <button
          type="submit"
          className="inline-flex justify-center rounded-lg text-sm py-2.5 px-4 bg-red-600 hover:bg-red-700 w-full"
        >
          <span className="text-white">Login</span>
        </button>
        
      </form>
    </div>
  </div>
  </>
);
  
}

export default Login;