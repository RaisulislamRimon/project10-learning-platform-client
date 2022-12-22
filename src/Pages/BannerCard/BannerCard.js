import React from "react";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Loading from "../Shared/Loading/Loading";
import LoadingError from "../Shared/Loading/LoadingError";

const BannerCard = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch("https://complete-your-code.vercel.app/all-courses").then((res) =>
        res.json()
      ),
  });

  if (isLoading) return <Loading />;

  if (error) return <LoadingError />;

  return (
    <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-20 lg:pl-36 md:pl-32 sm:pl-32 p-10">
      {data.map((course) => (
        <div
          key={course.id}
          id={course.id}
          className="carousel-item relative w-full m-10"
        >
          <img src={course.image} className="w-48 h-48" alt="" />
        </div>
      ))}
    </div>
  );
};

export default BannerCard;
