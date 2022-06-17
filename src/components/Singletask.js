import { FaTimes } from "react-icons/fa";

const Singletask = ({ todosingle, onDelete }) => {
  return (
    <div>
      <li className="shadow mb-3 py-2 border-0 d-flex justify-content-between list-group-item">
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
