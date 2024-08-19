import { FaTrash } from "react-icons/fa";
import { BsPlus } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";

export default function AssignmentControlButton(
  { assignmentId, deleteAssignment }: 
  { assignmentId: string; deleteAssignment: (assignmentId: string) => void; } 
) {
  return (
    <div className="float-end">
      <FaTrash className="text-danger me-2 mb-1" onClick={() => deleteAssignment(assignmentId)}/>
      <BsPlus />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
