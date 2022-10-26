import React from "react";
import SideNavCourse from "../Pages/Shared/SideNavCourse/SideNavCourse";

const AllCourses = () => {
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
