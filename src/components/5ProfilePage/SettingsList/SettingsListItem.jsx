import Icon from "../../0ShopPage/Icon/Icon";
import PropTypes from 'prop-types'
import './SettingsListItem.css'


export default function SettingsListItem({icon,description}) {

    return (
        <div className="profileListTab">
            <div className="left">
                <Icon
                    className="material-symbols-outlined orders"
                    icon={icon}
                />

                <p>{description}</p>
            </div>

            <Icon
                className="material-symbols-outlined right"
                icon="chevron_right"
            />
        </div>
    )
}

SettingsListItem.propTypes = {
    icon: PropTypes.string,
    description: PropTypes.string,
    className: PropTypes.string
}