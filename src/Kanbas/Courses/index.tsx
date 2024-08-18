import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import { Navigate, Route, Routes, useLocation, useParams } from "react-router";
import { FaAlignJustify } from "react-icons/fa";
import Dashboard from "../Dashboard";
import PeopleTable from "./People/Table";
import PeopleDetails from "./People/Details";
import Quizzes from "./Quizzes";
import QuizDetailScreen from "./Quizzes/QuizDetailScreen";
import QuizDetailEditorScreen from "./Quizzes/QuizDetailEditorScreen";
import QuestionsScreen from "./Quizzes/Questions/QuestionsScreen";
import QuestionDetail from "./Quizzes/Questions/QuestionDetail";
import QuestionDetailEditorScreen from "./Quizzes/Questions/QuestionDetailEditorScreen";
import QuestionEditorPage from "./Quizzes/Questions/QuestionEditor/QuestionEditorPage";
import Attempt from "./Quizzes/Attempt";
export default function Courses({ courses }: { courses: any[]; }) {
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);
  const { pathname } = useLocation();
  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        {course && course.name} &gt; {pathname.split("/")[4]}
      </h2>
      <hr />
      <div className="d-flex">
        <div className="d-none d-md-block">
          <CoursesNavigation />
        </div>
        <div className="flex-fill">
          <Routes>
            {/* <Route path="/" element={<Navigate to="Home" />} /> */}
            {/* <Route path="Dashboard" element={<Dashboard />} /> */}
            {/* <Route path="Courses/:cid/*" element={<Courses />} />  */}
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Piazza" element={<h1>Piazza</h1>} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/:aid" element={<AssignmentEditor />} />
            <Route path="Quizzes" element={<Quizzes/>} />
            <Route path="Quizzes/:qid" element={<QuizDetailScreen />} />
            <Route path="Quizzes/:qid/Edit" element={<QuizDetailEditorScreen />} />
            <Route path="Quizzes/:qid/Questions" element={<QuestionsScreen />} />
            <Route path="Quizzes/:qid/Questions/:questionId" element={<QuestionDetail />} />
            <Route path="Quizzes/:qid/Questions/:questionId/Edit" element={<QuestionEditorPage />} />
            <Route path="Grades" element={<Grades />} />
            <Route path="People" element={<PeopleTable />} />
            <Route path="People/:uid" element={<PeopleTable />} />
            <Route path="Quizzes/:qid/Attempt" element={<Attempt />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}