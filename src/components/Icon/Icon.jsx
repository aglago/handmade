import PropTypes from 'prop-types'
import './Icon.css'

export default function Icon({icon, className, onclick}) {
    
    return <span className={className} onClick={onclick}>
                {icon}
           </span>
}

Icon.propTypes = {
    icon: PropTypes.string,
    className: PropTypes.string,
    onclick: PropTypes.func
}