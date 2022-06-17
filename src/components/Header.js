import { PropTypes } from "prop-types";

const Header = ({ title }) => {
  return (
    <header className="header text-center text-secondary bg-light p-2">
      <h1 style={{ textShadow: "0px 2px 2px lightgrey" }}>{title}</h1>
    </header>
  );
};

Header.defaultProps = {
  title: "React-App",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
