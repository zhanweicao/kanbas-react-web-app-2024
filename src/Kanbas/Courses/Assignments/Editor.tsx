import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
import { BsGripVertical } from "react-icons/bs";
import { RxTriangleDown } from 'react-icons/rx';
import AssignmentControl from "./AssignmentControl";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  
  //Check URL parameters
  console.log("Course ID:", cid);
  console.log("Assignment ID:", aid);

  const assignment = assignments.find(
    assignment => assignment.course === cid && assignment._id === aid
  );

  //Check the assignment object
  console.log("Assignment:", assignment);

  if (!assignment) {
    return <div>Assignment not found</div>;
  }

  return (
    <div id="wd-assignments-editor">
      <AssignmentControl />
      <br />
      <br />

      <div
        id="wd-assignment-title"
        className="wd-title d-flex justify-content-between p-3 ps-2 bg-secondary"
      >
        <span>
          <BsGripVertical className="me-2 fs-3" />
          <RxTriangleDown />
          EDIT ASSIGNMENT
        </span>
      </div>

      <div className="container">
        <div className="mb-3">
          <label htmlFor="wd-name" className="form-label">Assignment Name</label>
          <input
            type="text"
            className="form-control"
            id="wd-name"
            value={assignment.title}
            readOnly
          />
        </div>

        <div className="mb-3">
          <label htmlFor="wd-description" className="form-label">Description</label>
          <textarea
            className="form-control"
            id="wd-description"
            defaultValue="The assignment is available online.
            Submit a link to the landing page of your Web application running on Netlify."
            
          />
        </div>

        <div className="row mb-3">
          <label htmlFor="wd-points" className="col-sm-2 col-form-label">Points</label>
          <div className="col-sm-10">
            <input className="form-control" id="wd-points" defaultValue="" />
          </div>
        </div>

        <div className="row mb-3">
          <label htmlFor="wd-group" className="col-sm-2 col-form-label">Assignment Group</label>
          <div className="col-sm-10">
            <select className="form-control" id="wd-group">
              <option value="COMEDY">Comedy</option>
              <option value="DRAMA">Drama</option>
              <option value="ASSIGNMENT" selected>ASSIGNMENT</option>
              <option value="FANTASY">Fantasy</option>
            </select>
          </div>
        </div>

        <div className="row mb-3">
          <label htmlFor="wd-display-grade-as" className="col-sm-2 col-form-label">Display Grade as</label>
          <div className="col-sm-10">
            <select className="form-control" id="wd-display-grade-as">
              <option value="COMEDY">Comedy</option>
              <option value="DRAMA">Drama</option>
              <option value="PERCENTAGE" selected>Percentage</option>
              <option value="FANTASY">Fantasy</option>
            </select>
          </div>
        </div>

        <div className="row mb-3">
          <label htmlFor="wd-submission-type" className="col-sm-2 col-form-label">Submission Type</label>
          <div className="col-sm-10 border p-3">
            <select className="form-control my-3" id="wd-submission-type">
              <option value="TEXT">Text Entry</option>
              <option value="URL">Website URL</option>
              <option value="MEDIA">Media Recordings</option>
              <option value="ANNOTATION">Student Annotation</option>
              <option value="FILE">File Uploads</option>
            </select>
          </div>
        </div>

        <div className="row mb-3">
          <label htmlFor="wd-assign" className="col-sm-2 col-form-label">Assign</label>
          <div className="col-sm-10 border p-3">
            <label htmlFor="wd-assign-to" className="col-sm-2 col-form-label fw-bold">Assign to</label>
            <div className="col-sm-10">
              <input className="form-control" type="text" id="wd-assign-to" placeholder="Everyone" defaultValue="Everyone" readOnly />
            </div>

            <label htmlFor="wd-due-date" className="col-sm-2 col-form-label fw-bold">Due</label>
            <div className="col-sm-10">
              <input className="form-control" type="date" id="wd-due-date" defaultValue="2024-05-13" />
            </div>

            <div className="row mb-3">
              <div className="col-sm-5">
                <label htmlFor="wd-available-from" className="col-sm-10 col-form-label fw-bold">Available from</label>
                <input className="form-control" type="date" id="wd-available-from" defaultValue="2024-05-06" />
              </div>
              <div className="col-sm-5">
                <label htmlFor="wd-available-until" className="col-sm-10 col-form-label fw-bold">Until</label>
                <input className="form-control" type="date" id="wd-available-until" defaultValue="2024-05-20" />
              </div>
            </div>
          </div>
        </div>

        <div className="row mb-3 justify-content-end">
          <div className="col-sm-1">
            <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn">Cancel</Link>
          </div>
          <div className="col-sm-1">
            <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-danger">Save</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
