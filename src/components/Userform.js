import PropTypes from 'prop-types'

const Userform = ({btnText, onclick}) => {

  return (
    <div>
      <div className="container">
        <form action="" id="my-form" className="shadow p-5 m-5">
            <h4>Add User</h4>
            <div><input type="text" placeholder="Name" className="w-100 pt-4 border-0 border-bottom" /></div>
            <div><input type="text" placeholder="Email" className="w-100 pt-4 border-0 border-bottom" /></div>
            <div><button onClick={onclick} className="btn btn-dark w-100 mt-4">{btnText}</button></div>
        </form>
      </div>
    </div>
  )
}

Userform.defaultProps = {
    btnText: 'Button'
}

Userform.propTypes = {
  onClick: PropTypes.func,
}

export default Userform
