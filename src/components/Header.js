import PropTypes from 'prop-types'
import Button from "./Buttons"

const Header = ({ title, onAdd, showAdd }) => {
    return (
    <header>
        <h1 className="header">{title}</h1>
        <Button color={showAdd ? "red" :
         "green"} text={showAdd ? 
        "Close" : "Add"} onClick=
        {onAdd} />
    </header>
    )
}

Header.defaultProps = {
    title: "The Task Tracker",
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// CSS in js
// const headingStyle = {
//     color: "red",
//     backgroundColor: "black"
// }

export default Header
