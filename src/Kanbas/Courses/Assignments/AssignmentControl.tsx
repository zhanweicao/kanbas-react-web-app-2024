import { FaPlus } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";

export default function AssignmentControl() {
    return (
        <div id="wd-assignment-control" style={{display: 'flex'}} className="text-nowrap">
            <span style={{ display: 'flex', flexGrow: 1 }} className="float-end me-1">
                <span className="input-group-text"><FaMagnifyingGlass /></span>
                <input
                    id="wd-search-assignment"
                    type="text"
                    className="form-control"
                    placeholder="Search..."
                />
            </span>
            <button id="wd-add-assignment-group" className="btn btn-lg btn-secondary me-1 float-end">
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Group
            </button>
            <button id="wd-add-assignment" className="btn btn-lg btn-danger me-1 float-end">
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Assignment
            </button>
        </div>
    );
}