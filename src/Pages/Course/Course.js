import React from "react";
import { Link } from "react-router-dom";

const Course = ({ course }) => {
  const { id, name, price, description, image } = course;
  return (
    <div className="">
      <div className="card card-compact w-4/5 my-5 mx-10 bg-base-100 shadow-2xl hover:drop-shadow-2xl">
        <figure>
          <img src={image} alt={name} className="w-48 my-10" />
        </figure>
        <div className="card-body">
          <h2 className="card-title mx-auto text-3xl">{name}</h2>
          <p className="text-stone-800 text-base">{description}</p>
          <p className="text-stone-800 text-base font-semibold">
            Price : ${price}
          </p>

          <div className="card-actions justify-end">
            <Link to={`/course/${id}`}>
              <button className="btn btn-primary">View Course Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
