import React from "react";
import { Link } from "react-router-dom";

const Course = ({ course }) => {
  const { id, name, price, description, image } = course;
  return (
    <div>
      <div className="card card-compact w-full bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" />
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
      <h1>{id}</h1>
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Course;
