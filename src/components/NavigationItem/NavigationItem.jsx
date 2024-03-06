import Icon from "../Icon/Icon";
import PropTypes from 'prop-types'
import './NavigationItem.css'


export default function NavigationItem({className, icon, description}) {
    
    return <div className="navItem">
        <Icon className={className} icon={icon} />
        <p>{description}</p>
    </div>
}

NavigationItem.propTypes = {
    className: PropTypes.string,
    icon: PropTypes.string,
    description: PropTypes.string
}