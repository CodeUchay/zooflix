import React, { useState, useEffect } from "react";
import DashNav from "./DashNav";
import { orders } from "../Data/orders";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [userId, setUserId] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3001/api/Orders", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (res.ok) {
          const data = await res.json();
          setOrders(data);
          const userData = getUserData();

          if (userData) {
            setUserId(userData.id);
            filterOrder(userData.id, data);
          }
        } else {
          const errorData = await res.json();
          console.error(
            `Error fetching orders: ${errorData.message || "Unknown error"}`
          );
        }
      } catch (error) {
        console.error(
          `An error occurred while fetching movies: ${error.message}`
        );
      }
    };

    fetchData();
  }, []);

  function filterOrder(userId, orders) {
    console.log("order obj", orders);
    const filteredOrders = [];

    for (const order of orders) {
      if (order.userId === userId) {
        filteredOrders.push(order);
      }
    }
    setOrders(filteredOrders);
  }

  function getUserData() {
    const storedData = localStorage.getItem("userData");
    if (storedData) {
      return JSON.parse(storedData);
    } else {
      return null;
    }
  }
  return (
    <>
      <DashNav />
      <div className="container">
        <div className="px-6 lg:mx-5 lg:mt-6">
          {/*Header*/}
          <div className="flex justify-center items-center">
            <h1 className="font-bold text-2xl lg:text-3xl">
              Your <span className="text-orange-500">Orders</span>
            </h1>
          </div>
          {/* Menu container*/}
          <div className=" rounded p-6 lg:p-0  mt-5 flex justify-center items-center">
            {/* Display foods */}
            <table className=" mt-2">
              <thead>
                <tr>
                  <th className="border p-2">No</th>
                  <th className="border p-2">Name</th>
                  <th className="border p-2">Price</th>
                  <th className="border p-2">Date</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((orders, index) => (
                  <tr className="border-b-2" key={orders.id}>
                    <td className="text-center font-semibold">{index + 1}</td>
                    <td className="px-3">{orders.movie.name}</td>
                    <td className="p-3">{orders.movie.price}</td>
                    {/* <td className="max-w-[20px] truncate">{product.description}</td> */}
                    <td className="px-4">{orders.ord_date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Orders;
