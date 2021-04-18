import PropTypes from "prop-types";
import './Filter.css'

const Filter = ({ value, onChangeFilter }) => {
    return (
        <div>
            <p className="Filter_text">Find contacts by name</p>
            <br />
            <input
                className="Filter_input"
                type="text"
                value={value}
                onChange={(e) => onChangeFilter(e.target.value)}
            />
        </div>
    )
}

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChangeFilter: PropTypes.func.isRequired,
};

export default Filter;