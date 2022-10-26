import React from "react";
import { Link } from "react-router-dom";

const Course = ({ course }) => {
  const { id, name, price, description, image } = course;
  return (
    <div className="">
      <div className="card card-compact w-full bg-base-100 shadow-xl hover:border">
        <figure>
          <img src={image} alt={name} className="w-48 my-10" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">
              <Link to={`/course/${id}`}>View Course</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
