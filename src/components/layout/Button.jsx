import '../../styles/Button.css'
import PropTypes from 'prop-types';


function Button (props) {
    
    return (
        <input className="submit_btn" type="submit" id={props.id} value={props.value}></input>
    )
}

Button.propTypes = {
    value: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
}

export default Button