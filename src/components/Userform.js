import PropTypes from "prop-types";
import { useState } from "react";
import "./style.css";

const Userform = ({ btnText, onclick }) => {
  const {text, setText} = useState('');
  const {day, setDay} = useState('');
  const {reminder, setReminder} = useState(false);

  return (
    <div>
      <div className="container my-3">
        <form action="" id="my-form" className="shadow p-5">
          <h5>Add Task</h5>
          <div className="form-control border-0">
            <input
              type="text"
              placeholder="Task"
              className="w-100 pt-4 border-0 border-bottom"
              value={text}
              onChange={(e)=> setText(e.target.value)}
            />
          </div>
          <div className="form-control border-0">
            <input
              type="text"
              placeholder="Date & Time"
              className="w-100 pt-4 border-0 border-bottom"
              value={day}
              onChange={(e)=> setDay(e.target.value)}
            />
          </div>
          <div className="form-check form-switch d-flex justify-content-between p-0 mx-3 my-4">
            <label
              className="form-check-label text-secondary"
              htmlFor="reminderSwitch"
            >
              Reminder
            </label>
            <input
              className="form-check-input"
              type="checkbox"
              id="reminderSwitch"
              value={reminder}
              onChange={(e)=> setReminder(e.currentTarget.checked)}
            />
          </div>
          <div>
            <button onClick={onclick} className="btn btn-dark w-100">
              {btnText}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

Userform.defaultProps = {
  btnText: "Button",
};

Userform.propTypes = {
  onClick: PropTypes.func,
};

export default Userform;
