import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaGoogle, FaGithub } from "react-icons/fa";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";

const Login = () => {
  const [error, setError] = useState(null);
  const { providerLogin, signIn } = useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    if (email === "" || password === "") {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Please fill up all the fields",
        showConfirmButton: false,
        timer: 3000,
      });
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        Swal.fire({
          position: "center",
          icon: "success",
          title: "You have successfully logged in",
          showConfirmButton: false,
          timer: 2000,
        });
        form.reset();
      })
      .catch((error) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: error.code && error.code,
          showConfirmButton: false,
          timer: 2000,
        });
      });
  };

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Please try again",
          showConfirmButton: false,
          timer: 3000,
        });
      });
  };
  return (
    <div>
      <div>
        <h2 className="text-center text-4xl font-bold mb-10">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-control w-full max-w-xs mx-auto mb-10">
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

            <button className="btn btn-wide  btn-success mx-auto my-10 text-lg">
              Login
            </button>

            <div className="mx-auto mb-4">
              <p className="">Or, Sign in with google or github</p>
              <div className="flex justify-around text-2xl m-5">
                <FaGoogle
                  onClick={handleGoogleSignIn}
                  className="hover:cursor-pointer hover:ring-2 hover:rounded"
                />
                <FaGithub className="hover:cursor-pointer hover:ring-2 hover:rounded" />
              </div>
            </div>
            <p>
              New to this website?{" "}
              <Link to="/register" className="link link-primary">
                Register a New Account
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
