import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateAssignment, addAssignment } from "./reducer";
import { useState, useEffect } from "react";
import { BsGripVertical } from "react-icons/bs";
import { RxTriangleDown } from "react-icons/rx";

export default function AssignmentEditor() {
  const { cid, aid } = useParams<{ cid: string, aid: string }>();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const assignments = useSelector((state: any) => state.assignmentsReducer.assignments);
  const [assignment, setAssignment] = useState<any>({
    title: "",
    description: "",
    points: "",
    dueDate: "",
    availableFrom: "",
    availableUntil: ""
  });

  useEffect(() => {
    if (aid) {
      const foundAssignment = assignments.find(
        (assignment: any) => assignment.course === cid && assignment._id === aid
      );
      if (foundAssignment) {
        setAssignment(foundAssignment);
      }
    }
  }, [aid, assignments, cid]);

  const handleSave = () => {
    if (aid) {
      dispatch(updateAssignment({ ...assignment, _id: aid }));
    } else {
      dispatch(addAssignment({ ...assignment, course: cid }));
    }
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };

  const handleCancel = () => {
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };

  return (
    <div id="wd-assignments-editor">
      <br />
      <br />

      <div id="wd-assignment-title" className="wd-title d-flex justify-content-between p-3 ps-2 bg-secondary">
        <span>
          <BsGripVertical className="me-2 fs-3" />
          <RxTriangleDown />
          {aid ? "EDIT ASSIGNMENT" : "ADD ASSIGNMENT"}
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
            onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="wd-description" className="form-label">Description</label>
          <textarea
            className="form-control"
            id="wd-description"
            value={assignment.description}
            onChange={(e) => setAssignment({ ...assignment, description: e.target.value })}
          />
        </div>

        <div className="row mb-3">
          <label htmlFor="wd-points" className="col-sm-2 col-form-label">Points</label>
          <div className="col-sm-10">
            <input
              className="form-control"
              id="wd-points"
              value={assignment.points}
              onChange={(e) => setAssignment({ ...assignment, points: e.target.value })}
            />
          </div>
        </div>

        <div className="row mb-3">
          <label htmlFor="wd-due-date" className="col-sm-2 col-form-label">Due Date</label>
          <div className="col-sm-10">
            <input
              type="date"
              className="form-control"
              id="wd-due-date"
              value={assignment.dueDate}
              onChange={(e) => setAssignment({ ...assignment, dueDate: e.target.value })}
            />
          </div>
        </div>

        <div className="row mb-3">
          <label htmlFor="wd-available-from" className="col-sm-2 col-form-label">Available From</label>
          <div className="col-sm-10">
            <input
              type="date"
              className="form-control"
              id="wd-available-from"
              value={assignment.availableFrom}
              onChange={(e) => setAssignment({ ...assignment, availableFrom: e.target.value })}
            />
          </div>
        </div>

        <div className="row mb-3">
          <label htmlFor="wd-available-until" className="col-sm-2 col-form-label">Available Until</label>
          <div className="col-sm-10">
            <input
              type="date"
              className="form-control"
              id="wd-available-until"
              value={assignment.availableUntil}
              onChange={(e) => setAssignment({ ...assignment, availableUntil: e.target.value })}
            />
          </div>
        </div>

        <div className="row mb-3 justify-content-end">
          <div className="col-sm-1">
            <button className="btn" onClick={handleCancel}>Cancel</button>
          </div>
          <div className="col-sm-1">
            <button className="btn btn-danger" onClick={handleSave}>Save</button>
          </div>
        </div>
      </div>
    </div>
  );
}
