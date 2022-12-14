import React from "react";
import { Link } from "react-router-dom";
import BannerAlbum from "../BannerAlbum/BannerAlbum";
import BannerCard from "../BannerCard/BannerCard";
import Blog from "../Blog/Blog";
import FAQ from "../FAQ/FAQ";

const Home = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("https://images.pexels.com/photos/205316/pexels-photo-205316.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
        }}
      >
        <div className="hero-overlay bg-opacity-80"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold bg-gray-700 rounded-lg p-3">
              Do you want to learn coding ?
            </h1>
            <p className="mb-5 bg-gray-700 p-3 rounded-lg lg:text-xl">
              This website will help you to learn coding easily. You can learn
              by watching videos and also you can practice by solving problems.
              You can also ask questions and get answers from other users. You
              can also share your knowledge with others. So, what are you
              waiting for? Let's start learning.
            </p>
            <Link to="/all-courses">
              <button className="btn btn-primary">Get Started</button>
            </Link>
          </div>
        </div>
      </div>
      <BannerAlbum />
      <FAQ />
      <BannerCard />
      <Blog />
    </div>
  );
};

export default Home;
