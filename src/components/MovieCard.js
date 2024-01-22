import React, { useContext, useState } from "react";
// import CartContext from "../CartContext";
import { useNavigate } from "react-router-dom";
import {AiOutlineCheck} from 'react-icons/ai';
import movie_image from '../images/movie_image.jpg'

const MovieCard = ({ movie, userId }) => {
//  const { addToCart } = useContext(CartContext);
  const [addedItem, setAddedItem] = useState(false);
console.log("verifying id...", userId)
  const navigate = useNavigate();

 async function placeOrder() {
    const movieId = movie.id;
    const date = new Date();
    const formattedDate = date.toISOString().split('T')[0];
    try {
      const res = await fetch("http://localhost:3001/api/Orders", {
        method: "POST",
        body: JSON.stringify({ UserId: userId, MovieId: movieId, ord_date: formattedDate }),
        headers: { "Content-Type": "application/json" },
      });
  
      if (res.ok) {
        alert("Order Successful");
       
      } else {
        const errorData = await res.json(); // Try to parse the response body as JSON
        alert(`Order failed: ${errorData.message || 'Unknown error'}`);
      }
    } catch (error) {
      console.error("Error during registration:", error);
      alert("An error occurred during registration. Please try again later.");
    }
  };


  return (
    <div  className="cursor-pointer border border-gray-900 rounded-2xl shadow-red-600 hover:shadow-lg hover:scale-105 duration-500 shadow-xs">
      {/* food container */}
      <div className="">
        <img
          src={movie_image}
          alt={movie.name}
          className="w-full h-[200px] object-cover rounded-lg"
        />
      </div>
      {/* Details of Food, Price and Cart */}
      <div className="flex px-5 pb-5 pt-2 flex-col gap-2 items-start">
        <h2 className="md:text-2xl lg:text-xl font-bold border-b border-b-gray-300">
          {movie.name}
        </h2>
        <p className="text-xs"> <b>Description:</b> {movie.description}</p>
        <p>Category: {movie.category }</p>
        <p>Stars: {movie.stars.map((star, index) => (
                  <div className="font-thin text-xs " key={star.id}>
                    <p>{star.firstname} {star.lastname}, </p>
                  </div>
                ))}</p>
        <p>Rating: {movie.rate + '/5'}</p>
        <p>Date: {movie.createdDate}</p>
        <p className="text-sm">Price: <b>${movie.price}</b></p>
        <div className="flex gap-4 items-center">
          <button
            onClick={placeOrder}
            className="border-none bg-orange-400 rounded p-2 hover:bg-red-500 relative"
          >
            Order
          </button>
          {addedItem && (
            <div
              className={`fixed bottom-0 left-0 right-0 bg-red-500 rounded flex justify-center items-center gap-3 text-white p-4 transform transition-transform duration-300 ease-in-out translate-y-full
              `}>
              <h1>Order Taken</h1> <AiOutlineCheck size={24}/>
            </div>
          )}</div>
      </div>
    </div>
  );
};

export default MovieCard;
