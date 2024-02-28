import '../../styles/Button.css';
import PropTypes from 'prop-types';


function Button (props) {
    
    return (
        <div className='btn_container' id={props.id}>
            <input className="submit_btn" type="submit" value={props.value}></input>
        </div>
    )
}

Button.propTypes = {
    value: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
}

export default Button;
