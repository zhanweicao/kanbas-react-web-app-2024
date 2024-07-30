import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addAssignment } from "./reducer";
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";

export default function AssignmentModalEditor({ show, handleClose, dialogTitle }: any) {
  const { cid } = useParams<{ cid: string }>();
  const dispatch = useDispatch();
  const [assignment, setAssignment] = useState<any>({
    title: "",
    description: "",
    points: "",
    dueDate: "",
    availableFrom: "",
    availableUntil: ""
  });

  const handleSave = () => {
    dispatch(addAssignment({ ...assignment, course: cid }));
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{dialogTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
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
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="danger" onClick={handleSave}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
