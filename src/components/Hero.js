import React from 'react'
import hero from '../images/hero.jpg'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    //i added mt 20 to the first container so that it doesnt blend with the sticky navbar
      <div className="relative">
        <div className="px-4 lg:px-20 py-2 lg:py-10 absolute flex flex-col justify-center ">
          <div className="flex flex-col lg:gap-6">
            <h1 className="px-4  text-2xl lg:text-5xl font-bold lg:ml-8 ">
              Welcome to
            </h1>
            <h1 className="px-4 text-red-500 text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl  lg:ml-8">
              Zooflix
            </h1>
          </div>
          {/* Motto */}
          <h3 className="font-WindSong text-gray-300 px-4 pt-2 text-xs md:text-2xl font-extralight lg:text-2xl italic font-family: lg:ml-8 lg:py-4">
            {" "}
            The best site for ordering movies...{" "}
          </h3>
          {/* buttons */}
          <div className=" mt-2 p-4 flex flex-row item-center gap-4 lg:gap-16 lg:text-2xl lg:ml-8 lg:mt-4">
          <Link to='/login'> <button className="bg-black px-4 lg:px-6 lg:py-2 border border-gray-200 hover:border-red-600 shadow-gray-900 shadow-sm hover:bg-red-600 hover:scale-105 duration-100 md:flex items-center rounded ">
              Login
            </button>
            </Link>
            <Link to='/signup'>
            <button  className="bg-red-500 border border-red-600 px-4 lg:px-6 lg:py-2 hover:bg-red-600 hover:text-white hover:scale-105 duration-100  md:flex items-center rounded">
              Register
            </button>
            </Link>
          </div>
        </div>
        <img
          className="w-full max-h-[500px] object-cover transition ease-in duration-300"
          src={hero}
          alt="Food Banner"
        />
      </div>
  )
}

export default Hero;