import { BsPlus } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";

export default function AssignmentControlButton() {
  return (
    <div className="float-end">
      <BsPlus />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}