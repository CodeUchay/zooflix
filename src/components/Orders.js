import React from "react";
import DashNav from "./DashNav";
import { orders } from "../Data/orders";

function Orders() {
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
          <div className=" rounded p-6 lg:p-0  mt-5 flex justify-center items-center" >
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
                {orders.map((order, index) => (
                  <tr className="border-b-2" key={order.id}>
                    <td className="text-center font-semibold">{index + 1}</td>
                    <td className="px-3">{order.name}</td>
                    <td className="p-3">{order.price}</td>
                    {/* <td className="max-w-[20px] truncate">{product.description}</td> */}
                    <td className="px-4">{order.date}</td>
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
