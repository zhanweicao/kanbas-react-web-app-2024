import { FaPlus } from "react-icons/fa";

export default function AssignmentsControls(props: {handleNavToNewAssignment: any}) {

  return (
    <div id="wd-assignments-controls" className="text-nowrap">
      <button className="btn btn-lg btn-danger me-1 float-end" onClick={props.handleNavToNewAssignment}>
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Assignment
      </button>
    </div>
  );
}
