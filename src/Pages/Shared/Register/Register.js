import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Register = () => {
  const { createUser, updateUserProfile, providerLogin, githubSignIn } =
    useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoUrl = form.photoUrl.value;
    const email = form.email.value;
    const password = form.password.value;

    if (name === "" || photoUrl === "" || email === "" || password === "") {
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
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Password should be at least 6 characters",
        showConfirmButton: false,
        timer: 3000,
      });
      return;
    }

    createUser(email, password)
      .then((result) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your account has been successfully created",
          showConfirmButton: false,
          timer: 2000,
        });
        form.reset();
        updateUserProfile({
          displayName: name,
          photoURL: photoUrl,
        });
        navigate("/login");
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          position: "center",
          icon: "error",
          title:
            (error?.code && error?.code) ||
            "The email address is already in use by another account.",
          showConfirmButton: false,
          timer: 2000,
        });
      });
  };

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        navigate(from, { replace: true });
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

  const handleGithubSignIn = () => {
    githubSignIn(githubProvider)
      .then((result) => {
        navigate(from, { replace: true });
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
      <h2 className="text-center text-4xl font-bold mb-10">Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-control w-full max-w-xs mx-auto mb-10">
          <div className="mb-5">
            <label htmlFor="name" className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="full name"
              className="input input-bordered w-full max-w-xs"
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="photoUrl" className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photoUrl"
              id="photoUrl"
              placeholder="Photo URL"
              className="input input-bordered w-full max-w-xs"
              required
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
              required
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
              required
            />
          </div>

          <button className="btn btn-wide btn-active btn-accent mx-auto my-10 text-white text-lg">
            Register
          </button>

          <div className="mx-auto mb-4">
            <p className="">Or, Create account with Google or Github</p>
            <div className="flex justify-around text-2xl m-5">
              <FaGoogle
                onClick={handleGoogleSignIn}
                className="hover:cursor-pointer hover:ring-2 hover:rounded"
              />
              <FaGithub
                onClick={handleGithubSignIn}
                className="hover:cursor-pointer hover:ring-2 hover:rounded"
              />
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
