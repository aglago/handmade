import SettingsListItem from "../SettingsList/SettingsListItem"
import "./Welcome.css"

export default function Welcome() {


    return (
        <>
            <div className="welcomeWrapper">
                <div className="welcome">
                    <h3>Welcome!</h3>
                    <p>Enter your account</p>
                </div>

                <button>
                    LOGIN
                </button>
            </div>

            <div className="profileListWrapper">
                <SettingsListItem
                    icon="package_2"
                    description="Orders"
                />

                <SettingsListItem
                    icon="mail"
                    description="Inbox"
                />

                <SettingsListItem
                    icon="rate_review"
                    description="Pending Reviews"
                />

                <SettingsListItem
                    icon="redeem"
                    description="Vouchers"
                />

                <SettingsListItem
                    icon="favorite"
                    description="Saved Items"
                />

                <SettingsListItem
                    icon="history"
                    description="Recently Viewed"
                />

                <SettingsListItem
                    icon="youtube_searched_for"
                    description="Recently Searched"
                />

                <SettingsListItem
                    icon="local_post_office"
                    description="Address Book"
                />
            </div>
        </>
    )
}