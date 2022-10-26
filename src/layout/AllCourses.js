import React from "react";
import { useLoaderData } from "react-router-dom";
import SideNavCourse from "../Pages/Shared/SideNavCourse/SideNavCourse";

const AllCourses = () => {
  const courses = useLoaderData();
  console.log(courses);
  return (
    <div className="columns-3 sm:columns-2">
      <div>
        <SideNavCourse />
      </div>
      <div>
        <h1>right side</h1>
      </div>
    </div>
  );
};

export default AllCourses;
