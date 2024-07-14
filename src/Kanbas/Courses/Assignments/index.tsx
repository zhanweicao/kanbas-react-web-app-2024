import { BsGripVertical } from "react-icons/bs";
import { RxTriangleDown } from 'react-icons/rx'
import { SlNote } from "react-icons/sl";
import AssignmentControl from "./AssignmentControl";
import AssignmentControlButton from "./AssignmentControlButton";
import LessonControlButtons from "../Modules/LessonControlButtons";

export default function Assignments() {
    return (
      <div id="wd-assignments">
        <AssignmentControl />
        <br />
        <br />

        <div
          id="wd-assignment-title"
          className="wd-title d-flex justify-content-between  p-3 ps-2 bg-secondary"
        >
          <span>
            <BsGripVertical className="me-2 fs-3" />
            <RxTriangleDown />
            ASSIGNMENTS
          </span>
          <span style={{ display: "inline-flex" }}>
            <span
              id="wd-assignment-title-percentage"
              className="px-2"
            >
              40% of Total
            </span>
            <AssignmentControlButton />
          </span>
        </div>

        <ul id="wd-assignment-list" className="list-group">
          <li className="wd-assignment-list-item list-group-item p-3 ps-1 rounded-0 border-4 border-top-0 border-end-0 border-bottom-0 border-success">
            <div className="d-flex justify-content-center align-items-center">
              <BsGripVertical className="me-2 fs-3" />
              <SlNote color="green"/>
            </div>
            <div className="px-4 flex-grow-1">
              <a
                className="wd-assignment-link text-decoration-none fw-bold text-black"
                href="#/Kanbas/Courses/1234/Assignments/123"
              >
                A1 - ENV + HTML
              </a >
              <div>
                <b className="text-danger">Multiple Modules</b> | <b>Not available until</b> May 6 at 12:00am |{" "}
                <b>Due</b> May 13 at 11:59pm | 100pts
              </div>
            </div>
            <LessonControlButtons />
          </li>

          <li className="wd-assignment-list-item list-group-item p-3 ps-1 border-4 border-top-0 border-end-0 border-bottom-0 border-success">
            <div className="d-flex justify-content-center align-items-center">
              <BsGripVertical className="me-2 fs-3" />
              <SlNote color="green"/>
            </div>
            <div className="px-4 flex-grow-1">
              <a
                className="wd-assignment-link text-decoration-none fw-bold text-black"
                href="#/Kanbas/Courses/1234/Assignments/123"
              >
                A2 - CSS + BOOTSTRAP
              </a >
              <div>
                <b className="text-danger">Multiple Modules</b> | <b>Not available until</b> May 13 at 12:00am |{" "}
                <b>Due</b> May 20 at 11:59pm | 100pts
            </div>
            </div>
            <LessonControlButtons />
          </li>

          <li className="wd-assignment-list-item list-group-item p-3 ps-1 rounded-0 border-4 border-top-0 border-end-0 border-bottom-0 border-success">
            <div className="d-flex justify-content-center align-items-center">
              <BsGripVertical className="me-2 fs-3" />
              <SlNote color="green"/>
            </div>
            <div className="px-4 flex-grow-1">
              <a
                className="wd-assignment-link text-decoration-none fw-bold text-black"
                href="#/Kanbas/Courses/1234/Assignments/123"
              >
                A3 - JAVASCRIPT + REACT
              </a >
              <div>
                <b className="text-danger">Multiple Modules</b> | <b>Not available until</b> May 20 at 12:00am |{" "}
                <b>Due</b> May 27 at 11:59pm | 100pts
              </div>
            </div>
            <LessonControlButtons />
          </li>
        </ul>
      </div>
    );}