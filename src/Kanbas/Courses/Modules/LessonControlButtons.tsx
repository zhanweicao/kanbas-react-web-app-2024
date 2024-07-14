import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
export default function LessonControlButtons() {
    return (
        <div className="float-end d-flex justify-content-center align-items-center">
            <GreenCheckmark />
            <IoEllipsisVertical className="fs-4" />
        </div>
    );
}