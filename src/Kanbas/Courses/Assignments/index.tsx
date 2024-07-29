import { useParams, useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { BsGripVertical } from "react-icons/bs";
import { RxTriangleDown } from 'react-icons/rx';
import { SlNote } from "react-icons/sl";
import AssignmentControl from "./AssignmentControl";
import AssignmentControlButton from "./AssignmentControlButton";
import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { deleteAssignment } from "./reducer";

export default function Assignments() {
  const { cid } = useParams<{ cid: string }>();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const assignments = useSelector((state: any) => state.assignmentsReducer.assignments);
  const [showModal, setShowModal] = useState(false);
  const [assignmentToDelete, setAssignmentToDelete] = useState<string | null>(null);
  const courseAssignments = assignments.filter((assignment: any) => assignment.course === cid);

  const handleDeleteClick = (assignmentId: string) => {
    setAssignmentToDelete(assignmentId);
    setShowModal(true);
  };

  const handleConfirmDelete = () => {
    if (assignmentToDelete) {
      dispatch(deleteAssignment(assignmentToDelete));
      setAssignmentToDelete(null);
      setShowModal(false);
    }
  };

  const handleCancelDelete = () => {
    setAssignmentToDelete(null);
    setShowModal(false);
  };

  return (
    <div id="wd-assignments">
      <AssignmentControl />
      <br />
      <br />

      <div id="wd-assignment-title" className="wd-title d-flex justify-content-between p-3 ps-2 bg-secondary">
        <span>
          <BsGripVertical className="me-2 fs-3" />
          <RxTriangleDown />
          ASSIGNMENTS
        </span>
      </div>

      <ul id="wd-assignment-list" className="list-group">
        {courseAssignments.map((assignment: any) => (
          <li
            key={assignment._id}
            className="wd-assignment-list-item list-group-item p-3 ps-1 rounded-0 border-4 border-top-0 border-end-0 border-bottom-0 border-success"
          >
            <div className="d-flex justify-content-center align-items-center">
              <BsGripVertical className="me-2 fs-3" />
              <SlNote color="green" />
            </div>
            <div className="px-4 flex-grow-1">
              <a
                className="wd-assignment-link text-decoration-none fw-bold text-black"
                href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                onClick={() => navigate(`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`)}
              >
                {assignment.title}
              </a>
              <div>
                <b className="text-danger">Multiple Modules</b> | <b>Not available until</b> May 6 at 12:00am |{" "}
                <b>Due</b> May 13 at 11:59pm | 100pts
              </div>
            </div>
            <AssignmentControlButton 
              assignmentId={assignment._id}
              deleteAssignment={() => handleDeleteClick(assignment._id)}
            />
          </li>
        ))}
      </ul>

      <Modal show={showModal} onHide={handleCancelDelete}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this assignment?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancelDelete}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleConfirmDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
