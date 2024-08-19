import { FaPlus } from "react-icons/fa";

export default function QuestionControls({ handleNavToNewQuestion }: { handleNavToNewQuestion: () => void }) {
  return (
    <div id="wd-quizzes-controls" className="text-nowrap">
      <button className="btn btn-lg btn-danger me-1 float-end" onClick={handleNavToNewQuestion}>
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Question
      </button>
    </div>
  );
}