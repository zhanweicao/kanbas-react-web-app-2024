import { FaPlus } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useNavigate, useParams } from "react-router-dom";

export default function AssignmentControl() {
  const navigate = useNavigate();
  const { cid } = useParams<{ cid: string }>();

  return (
    <div id="wd-assignment-control" style={{ display: 'flex' }} className="text-nowrap">
      <span style={{ display: 'flex', flexGrow: 1 }} className="float-end me-1">
        <span className="input-group-text"><FaMagnifyingGlass /></span>
        <input
          id="wd-search-assignment"
          type="text"
          className="form-control"
          placeholder="Search..."
        />
      </span>
      <button
        id="wd-add-assignment"
        className="btn btn-lg btn-danger me-1 float-end"
        onClick={() => navigate(`/Kanbas/Courses/${cid}/Assignments/new`)}
      >
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Assignment
      </button>
    </div>
  );
}
