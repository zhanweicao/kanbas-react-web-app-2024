import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { enrollCourse, profile } from "../Courses/Account/client";
import { setCurrentUser } from "../Courses/Account/reducer";

export default function Dashboard({ courses, course, setCourse, addNewCourse,
  deleteCourse, updateCourse }: {
    courses: any[]; course: any; setCourse: (course: any) => void;
    addNewCourse: () => void; deleteCourse: (course: any) => void;
    updateCourse: () => void;
  }) {
  const [isEnrolling, setIsEnrolling] = useState(false)
  const { currentUser } = useSelector((state: any) => state.accountReducer)
  const dispatch = useDispatch();
  const enrolledCourseIds = currentUser.section.map((c: any) => c)
  const unenrolledCourse = courses.filter(c => !enrolledCourseIds.includes(c._id))
  const enrolledCourse = courses.filter(c => enrolledCourseIds.includes(c._id))
  const mainCourses = currentUser.role === 'STUDENT' ? unenrolledCourse : enrolledCourse




  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard{currentUser && <> ({currentUser.username})</>} </h1> <hr />
      {currentUser.role !== 'STUDENT' && <>
      <h5>New Course
        <button className="btn btn-primary float-end"
          id="wd-add-new-course-click"
          onClick={async () => {
            await addNewCourse()
            const user = await profile()
            dispatch(setCurrentUser(user))
          }} > Add </button>
        <button className="btn btn-warning float-end me-2"
          onClick={updateCourse} id="wd-update-course-click">
          Update
        </button>
      </h5><br />
      <input value={course.name} className="form-control mb-2"
        onChange={(e) => setCourse({ ...course, name: e.target.value })} />
      <textarea value={course.description} className="form-control"
        onChange={(e) => setCourse({ ...course, description: e.target.value })} /><hr />
      </> 
      }
      
      {
        (currentUser.role !== 'STUDENT' || isEnrolling) && <>
        <div className="d-flex justify-content-between">
          <h2 id="wd-dashboard-published">Published Courses ({mainCourses.length})</h2> <hr />
          {currentUser.role === 'STUDENT' && <button onClick={() => setIsEnrolling(false)}>Back to my course</button>}
        </div>
          <div id="wd-dashboard-courses" className="row">
            <div className="row row-cols-1 row-cols-md-5 g-4">
              {mainCourses.map((course: any) => (
                <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                  <Link to={`/Kanbas/Courses/${course._id}/Home`} className="text-decoration-none" >
                    <div className="card rounded-3 overflow-hidden">
                      < img src="/images/react.jpg" height="{160}" />
                      <div className="card-body">
                        <span className="wd-dashboard-course-link"
                          style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }} >
                          {course.name}
                        </span>
                        <p className="wd-dashboard-course-title card-text" style={{ maxHeight: 53, overflow: "hidden" }}>
                          {course.description}
                        </p >
                        <Link to={`#/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary">Go</Link>
                        {currentUser.role === 'FACULTY' && <button onClick={(event) => {
                          event.preventDefault();
                          deleteCourse(course._id);
                        }} className="btn btn-danger float-end"
                          id="wd-delete-course-click">
                          Delete
                        </button>}
                        {currentUser.role === 'FACULTY' && <button id="wd-edit-course-click"
                          onClick={(event) => {
                            event.preventDefault();
                            setCourse(course);
                          }}
                          className="btn btn-warning me-2 float-end" >
                          Edit
                        </button>}
                        {currentUser.role === 'STUDENT' && <button id="wd-edit-course-click"
                          onClick={async (event) => {
                            event.preventDefault();
                            await enrollCourse(currentUser._id, course._id)
                            const user = await profile()
                            dispatch(setCurrentUser(user))
                          }}
                          className="btn btn-warning me-2 float-end" >
                          Enroll
                        </button>}
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </>
      }

      {
        currentUser.role === 'STUDENT' && !isEnrolling && <>
        <div className="d-flex justify-content-between">
          <h2 id="wd-dashboard-published">My Enrollment ({currentUser.section.length})</h2> <hr />
          <button onClick={() => setIsEnrolling(true)}>Enroll course</button>
        </div>
          <div id="wd-dashboard-courses" className="row">
            <div className="row row-cols-1 row-cols-md-5 g-4">
              {enrolledCourse.map((course: any) => (
                <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                  <Link to={`/Kanbas/Courses/${course._id}/Home`} className="text-decoration-none" >
                    <div className="card rounded-3 overflow-hidden">
                      < img src="/images/react.jpg" height="{160}" />
                      <div className="card-body">
                        <span className="wd-dashboard-course-link"
                          style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }} >
                          {course.name}
                        </span>
                        <p className="wd-dashboard-course-title card-text" style={{ maxHeight: 53, overflow: "hidden" }}>
                          {course.description}
                        </p >
                        <Link to={`#/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary">Go</Link>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </>
      }
    </div>
  );
}