import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import AssignmentModalEditor from "./AssignmentModalEditor";

export default function AssignmentsControls() {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div id="wd-assignments-controls" className="text-nowrap">
      <button className="btn btn-lg btn-danger me-1 float-end" onClick={handleShow}>
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Assignment
      </button>
      <AssignmentModalEditor
        show={show}
        handleClose={handleClose}
        dialogTitle="Add Assignment"
      />
    </div>
  );
}
