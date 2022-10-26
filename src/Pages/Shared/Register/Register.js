import React, { useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    if (password.length < 6) {
      setError("Password should be at least 6 characters");
      return;
    }
  };
  return (
    <div>
      <h2 className="text-center text-4xl font-bold mb-10">Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-control w-full max-w-xs mx-auto mb-10">
          <div className="mb-5">
            <label htmlFor="name" className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="name"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="email"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div>
            <label htmlFor="password" className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="password"
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <button className="btn btn-wide btn-active btn-accent mx-auto my-10 text-white text-lg">
            Register
          </button>

          <div className="mx-auto mb-4">
            <p className="">Or, Create account with google or github</p>
            <div className="flex justify-around text-2xl m-5">
              <FaGoogle className="hover:cursor-pointer hover:ring-2 hover:rounded" />
              <FaGithub className="hover:cursor-pointer hover:ring-2 hover:rounded" />
            </div>
          </div>

          <p>
            Already have an account?{" "}
            <Link to="/login" className="link link-primary">
              Sign in now
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
