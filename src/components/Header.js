import { PropTypes } from "prop-types"

const Header = ({title}) => {
  return (
    <header className="header text-center bg-dark text-light p-2">
        <h1>{title}</h1>
    </header>
  )
}

Header.defaultProps = {
  title: 'React-App'
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header