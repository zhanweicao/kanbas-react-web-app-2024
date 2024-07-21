import GradeControl from "./GradeControl";
import SearchControl from "./SearchControl";
import { FiFilter } from "react-icons/fi";
import { useParams } from "react-router";
import { grades } from "../../Database";
import { users } from "../../Database";
import { enrollments } from "../../Database";
import { assignments } from "../../Database";

export default function Grades() {
    const { cid } = useParams(); 
    const enrolledStudentsIds = enrollments
        .filter(enrollment => enrollment.course === cid)
        .map(enrollment => enrollment.user);

    const courseStudents = users.filter(user => enrolledStudentsIds.includes(user._id));

    const courseAssignments = assignments.filter(assignment => assignment.course === cid);

    const courseGrades = grades.filter(grade => enrolledStudentsIds.includes(grade.student));

    const assignmentTitles = courseAssignments.reduce((acc, assignment) => {
        acc[assignment._id] = assignment.title;
        return acc;
    }, {} as { [key: string]: string });

    const studentGrades = courseStudents.map(student => {
        const gradesForStudent = courseAssignments.reduce((acc, assignment) => {
            const grade = courseGrades.find(g => g.student === student._id && g.assignment === assignment._id);
            acc[assignment._id] = grade ? grade.grade : 'N/A';
            return acc;
        }, {} as { [key: string]: string });

        return {
            ...student,
            grades: gradesForStudent
        };
    });

    console.log("Course Students:", courseStudents);
    console.log("Course Assignments:", courseAssignments);
    console.log("Course Grades:", courseGrades);
    console.log("Student Grades:", studentGrades);

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
                            {courseAssignments.map(assignment => (
                                <th style={{ width: '150px' }}><b>{assignmentTitles[assignment._id]}</b></th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {studentGrades.map((student, index) => (
                            <tr className={index % 2 === 0 ? "table-light" : "table-white"}>
                                <td>{student.firstName} {student.lastName}</td>
                                {courseAssignments.map(assignment => (
                                    <td style={{ width: '150px' }}>
                                        {student.grades[assignment._id]}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
