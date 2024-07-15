import GradeControl from "./GradeControl";
import SearchControl from "./SearchControl";
import { FiFilter } from "react-icons/fi";

export default function Grades() {
    return (
        <div className="container-fluid">
            <GradeControl />
            <br /><br /><br /><br />
            <SearchControl />
            <br /><br />
            <div className="d-flex justify-content-start">
                <button id="wd-grade-filter" className="btn btn-lg btn-secondary me-1">
                    <FiFilter />
                    Apply Filters
                </button>
            </div>
            <br /> 
            <div id="wd-grade-table" className="table-responsive">
                <table className="table table-bordered">
                    <thead className="table-secondary">
                        <tr>
                            <th><b>Student Names</b></th>
                            <th><b>A1 SETUP</b></th>
                            <th><b>A2 HTML</b></th>
                            <th><b>A3 CSS</b></th>
                            <th><b>A4 BOOTSTRAP</b></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="table-light">
                            <td>Jane Adams</td>
                            <td><input type="text" defaultValue="100%" className="form-control form-control-sm" /></td>
                            <td>96.67%</td>
                            <td>92.18%</td>
                            <td>66.22%</td>
                        </tr>
                        <tr className="table-white">
                            <td>Christina Alllen</td>
                            <td><input type="text" defaultValue="100%" className="form-control form-control-sm" /></td>
                            <td>96.67%</td>
                            <td>92.18%</td>
                            <td>66.22%</td>
                        </tr>
                        <tr className="table-light">
                            <td>Samreen Ansari</td>
                            <td><input type="text" defaultValue="100%" className="form-control form-control-sm" /></td>
                            <td>96.67%</td>
                            <td>92.18%</td>
                            <td>66.22%</td>
                        </tr>
                        <tr className="table-white">
                            <td>Han Bao</td>
                            <td><input type="text" defaultValue="100%" className="form-control form-control-sm" /></td>
                            <td>96.67%</td>
                            <td>92.18%</td>
                            <td>66.22%</td>
                        </tr>
                        <tr className="table-light">
                            <td>Mahi Sai Srinivas Bobbili</td>
                            <td><input type="text" defaultValue="100%" className="form-control form-control-sm" /></td>
                            <td>96.67%</td>
                            <td>92.18%</td>
                            <td>66.22%</td>
                        </tr>
                        <tr className="table-white">
                            <td>Siran Cao</td>
                            <td><input type="text" defaultValue="100%" className="form-control form-control-sm" /></td>
                            <td>96.67%</td>
                            <td>92.18%</td>
                            <td>66.22%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
