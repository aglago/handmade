import { useEffect } from "react";
import Icon from "../Icon/Icon";
import './Search.css'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";


export default function Search({ className }) {
    useEffect(() => {
        function handleKeyDown(event) {
            if (event.ctrlKey && event.key === 'k') {
                document.getElementById("task").focus();
            }
        }

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <Link to="/search">
            <Icon className={className} icon="search" />
        </Link>
    )
}

Search.propTypes = {
    className: PropTypes.string,
    divClassName: PropTypes.string
}

Search.defaultProps = {
    divClassName: "searchDiv"
}