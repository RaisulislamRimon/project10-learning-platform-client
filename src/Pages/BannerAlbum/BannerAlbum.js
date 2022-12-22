import React from "react";
import { Link } from "react-router-dom";

const BannerAlbum = () => {
  return (
    <div className="container mx-auto mt-10">
      <div className="card lg:card-side bg-base-100 shadow-xl lg:rounded-full">
        <figure>
          <img
            src="/logo512.png"
            alt="Album"
            className="sm:w-1/3 md:w-1/2 lg:w-3/4"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-3xl">
            New React JS Course is released!
          </h2>
          <p className="text-2xl">
            React is a JavaScript library for building user interfaces.
          </p>
          <p className="text-xl">Click the button to start now...</p>
          <div className="card-actions justify-end mr-20">
            <Link to="/course/4">
              <button className="btn btn-primary">Start</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerAlbum;
