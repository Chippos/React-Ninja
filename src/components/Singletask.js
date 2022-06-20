import { FaTimes } from "react-icons/fa";
import './style.css'

const Singletask = ({ todosingle, onDelete, onToggle }) => {
  return (
    <div onDoubleClick={() => onToggle(todosingle.id)}>
      <li
        className={`mb-3 py-2 border-0 d-flex justify-content-between list-group-item 
      ${
        todosingle.reminder
          ? `border-3 border-success border-start shadow`
          : `border-light border-start border-3 shadow-sm`
      }`}
      >
        <div>
          <h6>{todosingle.text}</h6>
          <span>{todosingle.day}</span>
        </div>
        <div>
          <FaTimes
            className="text-danger"
            style={{ cursor: "pointer" }}
            onClick={() => onDelete(todosingle.id)}
          />
        </div>
      </li>
    </div>
  );
};

export default Singletask;
