import { FaBan } from "react-icons/fa";

export default function QuizRedBan() {
    return (
        <span className="me-1 position-relative">
            <FaBan 
                style={{ top: "2px" }} 
                className="text-danger fs-5" 
            />
        </span>
    );
}
