import React from "react";
import { useLoaderData } from "react-router-dom";
import Course from "../Pages/Course/Course";
import SideNavCourse from "../Pages/Shared/SideNavCourse/SideNavCourse";

const AllCourses = () => {
  const courses = useLoaderData();
  console.log(courses);
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 ">
      <div className="lg:w-1/4">
        <SideNavCourse courses={courses} />
      </div>
      <div className="md:w-3/4">
        <div className="">
          {courses.map((course) => (
            <div key={course.id}>
              <Course course={course} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllCourses;
