import { useParams } from "react-router";
import { modules } from "../../Database";
import ModulesControls from "./ModulesControls";
import LessonControlButtons from "./LessonControlButtons";
import { BsGripVertical } from "react-icons/bs";
import ModuleControlButtons from "./ModuleControlButtons";

export default function Modules() {
  const { cid } = useParams();
  const courseModules = modules.filter((modules) => modules.course === cid);

  return (
    <div id="wd-modules">
      <ModulesControls /><br /><br /><br /><br />
      <ul id="wd-modules" className="list-group rounded-0">
        {courseModules.map((modules) => (
          <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-3" />
              {modules.name}
              <ModuleControlButtons />
            </div>
            {modules.lessons && (
              <ul className="wd-lessons list-group rounded-0">
                {modules.lessons.map((lesson) => (
                  <li className="wd-lesson list-group-item p-3 ps-1">
                    <BsGripVertical className="me-2 fs-3" />
                    {lesson.name}
                    <LessonControlButtons />
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
