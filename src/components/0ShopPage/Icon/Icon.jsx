import PropTypes from 'prop-types'
import './Icon.css'

export default function Icon({icon, className}) {
    
    return <span className={className}>
                {icon}
           </span>
}

Icon.propTypes = {
    icon: PropTypes.string,
    className: PropTypes.string
}