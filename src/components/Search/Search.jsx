import { useEffect } from "react";
import Icon from "../Icon/Icon";
import './Search.css'
import PropTypes from 'prop-types'


export default function Search({ className, divClassName }) {
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
        <div className={divClassName}>
            <Icon className={className} icon="search" />
            <input type="text" />
        </div>
    )
}

Search.propTypes = {
    className: PropTypes.string,
    divClassName: PropTypes.string
}

Search.defaultProps = {
    divClassName: "searchDiv"
}