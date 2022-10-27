import React, { useState } from "react";
import { useContext } from "react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [dark, setDark] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "You have successfully logged out",
          showConfirmButton: false,
          timer: 3000,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-64"
          >
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/all-courses">All Courses</Link>
            </li>
            <li tabIndex={0}>
              <Link to="/faq">FAQ</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            {user?.email || user?.displayName ? (
              <>
                {user?.photoURL ? (
                  <>
                    <div
                      className="tooltip tooltip-bottom w-12 mr-3"
                      data-tip={user?.displayName || user?.email}
                    >
                      <img
                        src={user?.photoURL}
                        alt={user?.email}
                        className="rounded-full"
                      />
                    </div>
                  </>
                ) : (
                  <FaUser className="mt-3 ml-3 mb-3" />
                )}
                <button onClick={handleLogOut} className="btn w-full mb-2">
                  Log out
                </button>
              </>
            ) : (
              <>
                {" "}
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/register">Register</Link>
                </li>
              </>
            )}
            <button onClick={() => setDark(!dark)} className="btn">
              {dark ? "Light" : "Dark"}
            </button>
          </ul>
        </div>
        <Link to="/" className=" normal-case text-xl">
          <img
            src="images/site_logo_main.png"
            alt="logo"
            className="w-52 h-12 rounded-md"
          />
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0 ">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/all-courses">All Courses</Link>
          </li>
          <li tabIndex={0}>
            <Link to="/faq">FAQ</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          {user?.email || user?.displayName ? (
            <>
              {user?.photoURL ? (
                <>
                  <div
                    className="tooltip tooltip-bottom w-12 mr-3"
                    data-tip={user?.displayName || user?.email}
                  >
                    <img
                      src={user?.photoURL}
                      alt={user?.email}
                      className="rounded-full"
                    />
                  </div>
                </>
              ) : (
                <FaUser className="mt-3 mr-3" />
              )}
              <button onClick={handleLogOut} className="btn">
                Log out
              </button>
            </>
          ) : (
            <>
              {" "}
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </>
          )}

          <button onClick={() => setDark(!dark)} className="btn ml-2">
            {dark ? "Light" : "Dark"}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
