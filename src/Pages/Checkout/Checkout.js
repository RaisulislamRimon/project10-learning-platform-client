import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Checkout = () => {
  const course = useLoaderData();
  const { name, price, image } = course;
  const handlePayNow = () => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "You have successfully paid for this course",
      showConfirmButton: false,
      timer: 5000,
    });
  };
  return (
    <div>
      <h1 className="text-4xl text-center mt-5 text-primary underline">
        Checkout
      </h1>
      <div className="card lg:card-side bg-base-100 shadow-xl p-28">
        <figure>
          <img className="w-1/3" src={image} alt={name} />
        </figure>
        <div className="card-body w-4/6">
          <h2 className="card-title">
            <span className="text-2xl">Course Name : {name}</span>
          </h2>
          <p className="text-stone-800 text-base">
            <span className="text-2xl">Price : ${price} </span>
          </p>

          <p className="text-2xl">Click to pay: </p>

          <div className="card-actions justify-end">
            <button className="btn btn-primary">
              <span onClick={handlePayNow} className="text-2xl">
                Pay Now
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;