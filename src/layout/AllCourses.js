import React from "react";
import { useLoaderData } from "react-router-dom";
import SideNavCourse from "../Pages/Shared/SideNavCourse/SideNavCourse";

const AllCourses = () => {
  const courses = useLoaderData();
  console.log(courses);
  return (
    <div className="lg:columns-4 sm:columns-1">
      <div>
        <SideNavCourse courses={courses} />
      </div>
      <div>
        {courses.map((course) => (
          <div key={course.id}>
            <h1>{course.name}</h1>
            <p>{course.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCourses;
