import { FaMagnifyingGlass } from "react-icons/fa6";
import { RxTriangleDown } from "react-icons/rx";

export default function SearchControl() {
    return (
        <div id="wd-search-control" className="container-fluid">
            <div className="row">
                <div className="col-md-6 mb-3">
                    <label htmlFor="wd-search-student" className="form-label"><b>Search Students</b></label>
                    <div className="input-group">
                        <span className="input-group-text"><FaMagnifyingGlass /></span>
                        <input
                            id="wd-search-student"
                            type="text"
                            className="form-control"
                            placeholder="Search Students..."
                        />
                        <span className="input-group-text"><RxTriangleDown /></span>
                    </div>
                </div>
                <div className="col-md-6 mb-3">
                    <label htmlFor="wd-search-assignment" className="form-label"><b>Search Assignment</b></label>
                    <div className="input-group">
                        <span className="input-group-text"><FaMagnifyingGlass /></span>
                        <input
                            id="wd-search-assignment"
                            type="text"
                            className="form-control"
                            placeholder="Search Assignment..."
                        />
                        <span className="input-group-text"><RxTriangleDown /></span>
                    </div>
                </div>
            </div>
        </div>
    );
}