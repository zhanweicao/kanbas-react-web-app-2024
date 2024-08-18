import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import QuizControls from "./QuizControls";
import QuizGreenCheckmark from "./QuizGreenCheckmark";
import QuizRedBan from "./QuizRedBan";
import QuizEditButton from "./QuizEditButton";
import { setQuizzes, deleteQuiz, updateQuiz, addQuiz } from "./reducer";
import * as client from "./client";

export default function Quizzes() {
  const { cid } = useParams<{ cid: string }>();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const quizzes = useSelector((state: any) => state.quizzesReducer.quizzes);
  const currentUser = useSelector(
    (state: any) => state.accountReducer.currentUser,
  );
  
  useEffect(() => {
    if (cid) {
      client.findQuizzesForCourse(cid).then((quizzes) => {
        dispatch(setQuizzes(quizzes));
      });
    }
  }, [cid, dispatch]);

  const handleNavToQuizDetail = (quizId: string) => {
    navigate(`/Kanbas/Courses/${cid}/Quizzes/${quizId}`);
  };

  const handleNavToQuizEdit = (quizId: string) => {
    navigate(`/Kanbas/Courses/${cid}/Quizzes/${quizId}/Edit`);
  };

  const handleNavToNewQuiz = async () => {
    if (cid) {
      const newQuiz = {};
      const createdQuiz = await client.createQuiz(cid, newQuiz);
      dispatch(addQuiz(createdQuiz));
      handleNavToQuizDetail(createdQuiz._id);
    }
  };

  const handleDeleteQuiz = async (quizId: string) => {
    if (cid) {
      await client.deleteQuiz(cid, quizId);
      dispatch(deleteQuiz(quizId));
    }
  };

  const handlePublishToggle = async (quizId: string, newStatus: boolean) => {
    if (cid) {
      const updatedQuiz = quizzes.find((quiz: any) => quiz._id === quizId);
      if (updatedQuiz) {
        const updatedQuizCopy = { ...updatedQuiz, published: newStatus }; // Create a copy and update the published status
        await client.updateQuiz(cid, quizId, updatedQuizCopy);
        dispatch(updateQuiz(updatedQuizCopy));
      }
    }
  };

  // Function to determine quiz availability status
  const getAvailabilityStatus = (quiz: any) => {
    const currentDate = new Date();
    const availableDate = quiz.availableDate ? new Date(quiz.availableDate) : null;
    const untilDate = quiz.untilDate ? new Date(quiz.untilDate) : null;

    if (!availableDate) {
      return "No availability date set";
    }

    if (currentDate < availableDate) {
      return `Not available until ${availableDate.toLocaleDateString()}`;
    }

    if (untilDate && currentDate > untilDate) {
      return "Closed";
    }

    return "Available";
  };

  return (
    <div id="wd-quizzes">
      <QuizControls handleNavToNewQuiz={handleNavToNewQuiz} />
      <br />
      <br />

      <div id="wd-quiz-title" className="wd-title d-flex justify-content-between p-3 ps-2 bg-secondary">
        <span>Quizzes</span>
      </div>

      <ul id="wd-quiz-list" className="list-group">
        {quizzes.map((quiz: any, index: number) => (
          <React.Fragment key={quiz._id}>
            <li
              className="wd-quiz-list-item list-group-item p-3 ps-1 d-flex justify-content-between align-items-center"
              style={{
                borderLeft: "4px solid green",
                borderTop: index === 0 ? "none" : "4px solid transparent",
              }}
            >
              <div className="d-flex flex-column">
                <b>{quiz.assignmentGroup}</b>
                <a
                  className="wd-quiz-link text-decoration-none fw-bold text-black"
                  href={`#/Kanbas/Courses/${cid}/Quizzes/${quiz._id}`}
                  onClick={() => handleNavToQuizDetail(quiz._id)}
                >
                  {quiz.title}
                </a>
                <div>
                  <b className="text-danger">{quiz.published ? "Published" : "Unpublished"}</b> | 
                  <b> {getAvailabilityStatus(quiz)}</b> | 
                  {quiz.points}pts | {quiz.numberOfQuestions || 0} questions
                </div>
              </div>
              <div className="d-flex align-items-center">
                {quiz.published ? <QuizGreenCheckmark /> : <QuizRedBan />}
                <QuizEditButton 
                  quizId={quiz._id} 
                  onDelete={handleDeleteQuiz} 
                  onPublishToggle={handlePublishToggle} 
                  published={quiz.published} 
                  onEdit={handleNavToQuizEdit} // Pass the navigation handler for editing
                  disabled={currentUser.role !== 'FACULTY'}
                />
              </div>
            </li>
            {index !== quizzes.length - 1 && <hr />}
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
}
