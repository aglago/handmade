import PropTypes from "prop-types"
import './Logo.css'

export default function Logo({className}) {
    
    return <h2 className={className}>Handmade</h2>
}

Logo.propTypes = {
    className: PropTypes.string
}