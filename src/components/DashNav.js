import React, { useState, useContext } from "react";
import {
  AiFillHome,
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineClose,
} from "react-icons/ai";
import { FaFire, FaShoppingCart } from "react-icons/fa";
import {
  MdOutlineRestaurantMenu,
  MdCategory,
} from "react-icons/md";
import {
    RiMovieFill, RiShoppingCart2Fill 
  } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import zooflix from '../images/zooflix.png';
import { user } from '../Data/user'

function DashNav() {
  const [nav, setNav] = useState(false);
  const [searchItem, setSearchItem] = useState("");
  const navigate = useNavigate();

  const goToSearchPage = (e) => {
    e.preventDefault();
    navigate("/search/" + searchItem);
  };

  return (
    <div className="container p-5 ">
        <div className="flex  gap-1 justify-between flex-row lg:px-6">
          {/* Logo Container */}
          <div className="flex gap-2 lg:gap-10 items-center">
            {/* Hamburger Menu */}
            <div onClick={() => setNav(!nav)} className="cursor-pointer">
              <AiOutlineMenu
                size={30}
                className=" hover:shadow-wine-500 hover:shadow-sm duration-100"
              />
            </div>
            {/*  Logo */}
            <Link to="/dashboard" className="flex justify-between items-center gap-1 cursor-pointer">
              
        <span className="text-2xl font-bold">Dashboard</span>
            </Link>
          </div>
          {/* Search & Cart Container */}
          <div className="flex gap-4 ">
            {/* Search Icon and input */}
            <span className="hidden lg:block lg:text-2xl ">Welcome, {user.firstname +' '+ user.lastname} </span>
            {/* Cart container */}
            <div 
                to="#" className="bg-orange-400 hover:bg-orange-500 px-2 py-1 hover:shadow-lg rounded-full flex justify-between items-center  cursor-pointer">
                {user.firstname[0]+user.lastname[0]}    
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        {/* Overlay */}
        {nav ? (
          <div className="bg-black/80 absolute w-full h-screen z-10 top-0 left-0"></div>
        ) : (
          ""
        )}
        {/* Side drawer menu */}
        <div
          className={
            nav
              ? "container fixed top-0 left-0 w-[300px] h-screen  z-10 duration-300"
              : "container fixed top-0 left-[-100%] w-[300px] h-screen e z-10 duration-300"
          }
        >
          <AiOutlineClose
            onClick={() => setNav(!nav)}
            size={30}
            className="absolute right-4 top-4 cursor-pointer hover:bg-red-500"
          />
            <img src={zooflix} className="w-40 h-auto p-6" alt="Zooflix Logo" />
         
          <nav>
            <ul className="flex flex-col p-4 ">
              <Link to="/dashboard"><li
                onClick={() => setNav(!nav)}
                className="text-xl py-4 px-5 flex cursor-pointer hover:bg-red-500 hover:rounded-sm"
              >
                <div  className="flex justify-between items-center ">
                  <RiMovieFill size={25} className="mr-4 " /> Gallery
                </div>
              </li>
              </Link>
              <Link to="/dashboard/orders">
              <li
                onClick={() => setNav(!nav)}
                className="text-xl py-4 px-5 flex cursor-pointer hover:bg-red-500 hover:rounded-sm"
              >
                <div className="flex justify-between items-center ">
                  <RiShoppingCart2Fill  size={25} className="mr-4" /> Orders
                </div>
              </li>
              </Link>
              <li
                className="text-xl  py-4 px-5 flex mt-5 hover:rounded-sm"
              >
                
              <Link to="/" className="flex justify-between items-center p-2 cursor-pointer  hover:bg-red-500 border border-gray-800 rounded">
                  Logout
                </Link>
              </li>
            </ul>
          </nav>
        </div>
    </div>
  );
}

export default DashNav;
