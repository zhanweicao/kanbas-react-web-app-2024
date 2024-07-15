import { FaGear } from "react-icons/fa6";
import { LiaFileExportSolid, LiaFileImportSolid } from "react-icons/lia";
import { RxTriangleDown } from "react-icons/rx";

export default function GradeControl() {
    return (
        <div id="wd-grade-control" className="text-nowrap">
            <button id="wd-setting-grade-btn" className="btn btn-lg btn-secondary me-1 float-end">
                <FaGear className="position-relative me-2" style={{ bottom: "1px" }} />
            </button>
            <button id="wd-export-grade-btn" className="btn btn-lg btn-secondary me-1 float-end" style={{ color: 'black' }}>
                <LiaFileExportSolid className="position-relative me-2" style={{ bottom: "1px" }} />
                Export
                <RxTriangleDown style={{ bottom: "1px" }} />
            </button>
            <button id="wd-import-grade-btn" className="btn btn-lg btn-secondary me-1 float-end" style={{ color: 'black' }}>
                <LiaFileImportSolid className="position-relative me-2" style={{ bottom: "1px" }} />
                Import
            </button>
        </div>
    );
}
