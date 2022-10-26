import React from "react";
import { Link } from "react-router-dom";

const SideNavCourse = (props) => {
  const { courses } = props;
  console.log(courses);

  return (
    <div>
      {/* <h1>All Courses side navigation</h1> */}
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Show all courses
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            {courses.map((course) => (
              <li key={course.id}>
                <Link to={`/course/${course.id}`} className="text-dark">
                  {course.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideNavCourse;
