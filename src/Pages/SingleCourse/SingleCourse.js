import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const SingleCourse = () => {
  const singleCourse = useLoaderData();
  console.log(singleCourse);
  const { id, name, description, price, image, url } = singleCourse;
  return (
    <div className="container">
      <div className="card text-center card-compact w-3/5 mt-16 mb-16 bg-base-100 shadow-2xl mx-auto">
        <h1 className="text-4xl mt-10">Course Title : {name}</h1>
        <figure>
          <img src={image} alt={name} className="w-48 my-10" />
        </figure>
        <div className="card-body">
          <h2 className="card-title mx-auto text-3xl">{name}</h2>
          <p className="text-stone-800 text-base">{description}</p>
          <p className="text-stone-800 text-base font-semibold">
            Price : ${price}
          </p>
          <p className="text-stone-800 text-base font-semibold mb-14">
            Click to read details from this url : URL :
            <Link to={url} target="_blank" className="underline">
              {url}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleCourse;
