import React from "react";

const Login = () => {
  return (
    <div>
      <h1 className="text-3xl">Login</h1>
      <form className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Enter your email</span>
          <span className="label-text-alt text-warning text-lg p-0 m-0">*</span>
        </label>
        <input
          type="email"
          placeholder="email"
          className="input input-bordered w-full max-w-xs"
          required
        />
        <label className="label">
          <span className="label-text">Enter your password</span>
          <span className="label-text-alt text-warning text-lg p-0 m-0">*</span>
        </label>
        <input
          type="password"
          placeholder="password"
          className="input input-bordered w-full max-w-xs"
          required
        />
        <button className="btn btn-wide btn-active text-white btn-accent">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
