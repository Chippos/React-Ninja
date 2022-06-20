import PropTypes from "prop-types";
import "./style.css";

const Userform = ({ btnText, onclick }) => {
  return (
    <div>
      <div className="container my-3">
        <form action="" id="my-form" className="shadow p-5">
          <h5>Add Task</h5>
          <div>
            <input
              type="text"
              placeholder="Task"
              className="w-100 pt-4 my-1 border-0 border-bottom"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Time"
              className="w-100 pt-4 my-1 border-0 border-bottom"
            />
          </div>
          <div>
            <button onClick={onclick} className="btn btn-dark w-100 mt-4">
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
