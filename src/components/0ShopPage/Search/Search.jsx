import Icon from "../Icon/Icon";
import './Search.css'
import PropTypes from 'prop-types'


export default function Search({className, divClassName}) {
    return <div className={divClassName}>
        <Icon className={className} icon="search" />
        <input type="text" />
    </div>
}

Search.propTypes = {
    className: PropTypes.string,
    divClassName: PropTypes.string
}

Search.defaultProps = {
    divClassName: "searchDiv"
}