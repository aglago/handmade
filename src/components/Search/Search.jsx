import Icon from "../Icon/Icon";
import './Search.css'
import PropTypes from 'prop-types'


export default function Search({className}) {
    return <div className="searchDiv">
        <Icon className={className} icon="search" />
        <input type="text" />
    </div>
}

Search.propTypes = {
    className: PropTypes.string
}