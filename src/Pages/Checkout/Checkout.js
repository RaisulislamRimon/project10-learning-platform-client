import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Checkout = () => {
  const course = useLoaderData();
  const { name, price, image } = course;

  const { user } = useContext(AuthContext);

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
      <div className="card lg:card-side bg-base-100 shadow-xl md:p-28 p-12">
        <figure>
          <img className="md:w-1/3 lg:w-3/4" src={image} alt={name} />
        </figure>
        <div className="card-body w-full lg:w-full">
          <h2 className="card-title">
            <span className="text-2xl">Course Name : {name}</span>
          </h2>
          <p className="text-stone-800 text-base">
            <span className="text-2xl">Price : ${price} </span>
          </p>

          <p className="text-xl">Click to buy this course. </p>

          <div className="md:border md:border-zinc-400 rounded-md md:p-3 md:my-3">
            <h3 className="text-xl my-2 font-semibold">Student info:</h3>
            <p>
              <span className="font-semibold"> Student Name</span> :{" "}
              {user?.displayName}
            </p>
            <p>
              <span className="font-semibold">Student Email</span> :{" "}
              {user?.email}
            </p>
          </div>

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
