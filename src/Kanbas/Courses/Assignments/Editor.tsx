export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
          <div className="container">
            <div className="mb-3">
              <label htmlFor="wd-name" className="form-label">Assignment Name</label>
              <input type="email" className="form-control" id="wd-name" value="A1 - ENV + HTML"></input>
            </div>

            <div className="mb-3">
              <textarea className="form-control" id="wd-description" />
            </div>

          
              <div className="row mb-3">
                <label htmlFor="wd-points" className="col-sm-2 col-form-label">Points</label>
                <div className="col-sm-10">
                  <input className="form-control" id="wd-points"/>
                </div>
              </div>

              <div className="row mb-3">
                <label htmlFor="wd-group" className="col-sm-2 col-form-label">Assignment Group</label>
                <div className="col-sm-10">
                  <select className="form-control" id="wd-group">
                    <option value="COMEDY">Comedy</option>
                    <option value="DRAMA">Drama</option>
                    <option selected value="ASSIGNMENT">ASSIGNMENT</option>
                    <option value="FANTASY">Fantasy</option>
                  </select>
                </div>
              </div>

              <div className="row mb-3">
                <label htmlFor="wd-display-grade-as" className="col-sm-2 col-form-label">Display Grade as</label>
                <div className="col-sm-10">
                  <select className="form-control" id="wd-display-grade-as">
                    <option value="COMEDY">Comedy</option>
                    <option value="DRAMA">Drama</option>
                    <option selected value="PERCENTAGE">Percentage</option>
                    <option value="FANTASY">Fantasy</option>
                  </select>
                </div>
              </div>

              <div className="row mb-3">
                <label htmlFor="wd-submission-type" className="col-sm-2 col-form-label">Submission Type</label>
                <div className="col-sm-10 border p-3">
                  <select className="form-control my-3" id="wd-submission-type">
                    <option value="COMEDY">Comedy</option>
                    <option value="DRAMA">Drama</option>
                    <option selected value="PERCENTAGE">Percentage</option>
                    <option value="FANTASY">Fantasy</option>
                  </select>
                  <div className="col-sm-10 fw-bold my-3">
                    <label htmlFor="wd-text-entry">Online Entry Options</label>
                  </div>
                  <div className="col-sm-10 my-1">
                    <input type="checkbox" name="check-entry-options" id="wd-text-entry" />
                    <label htmlFor="wd-text-entry">Text Entry</label><br />
                  </div>

                  <div className="col-sm-10 my-1">
                    <input type="checkbox" name="check-entry-options" id="wd-website-url" />
                    <label htmlFor="wd-website-url">Website URL</label><br />
                  </div>

                  <div className="col-sm-10 my-1">
                    <input type="checkbox" name="check-entry-options" id="media-recordings" />
                    <label htmlFor="media-recordings">Media Recordings</label><br />
                  </div>

                  <div className="col-sm-10 my-1">
                    <input type="checkbox" name="check-entry-options" id="wd-student-annotation" />
                    <label htmlFor="wd-student-annotation">Student Annotation</label><br />
                  </div>

                  <div className="col-sm-10 my-1">
                    <input type="checkbox" name="check-entry-options" id="wd-file-upload" />
                    <label htmlFor="wd-file-upload">File Uploads</label>
                  </div>
                </div>
              </div>

              <div className="row mb-3">
              <label htmlFor="wd-assign" className="col-sm-2 col-form-label">Assign</label>
              <div className="col-sm-10 border p-3">
                <label htmlFor="wd-assign-to" className="col-sm-2 col-form-label fw-bold">Assign to</label>
                <div className="col-sm-10">
                  <input className="form-control" type="text" id="wd-assign-to" placeholder="Everyone" value="Everyone" title="Assign to" />
                </div>

                <label htmlFor="wd-due-date" className="col-sm-2 col-form-label fw-bold">Due</label>
                <div className="col-sm-10">
                  <input className="form-control" type="date" id="wd-due-date" value="2024-05-13" />
                </div>

                <div className="row mb-3">
                  <div className="col-sm-5">
                    <label htmlFor="wd-available-from" className="col-sm-10 col-form-label fw-bold">Available from</label>
                    <input className="form-control" type="date" id="wd-available-from" value="2024-05-06" />
                  </div>
                  <div className="col-sm-5">
                    <label htmlFor="wd-available-until" className="col-sm-10 col-form-label fw-bold">Until</label>
                    <input className="form-control" type="date" id="wd-available-until" value="2024-05-20" />
                  </div>
                </div>
              </div>
              </div>

              <div className="row mb-3 justify-content-end">
                <div className="col-sm-1">
                  <button className="btn">Cancel</button>
                </div>
                <div className="col-sm-1">
                  <button className="btn btn-danger">Save</button>
                </div>
              </div>
            </div>
        </div>
    );
}