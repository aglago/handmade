import Icon from "../../0ShopPage/Icon/Icon";
import Navigation from "../../0ShopPage/Navigation/Navigation"
import SettingsListItem from "../SettingsList/SettingsListItem"
import "./Welcome.css"

export default function Welcome() {

    let isLoggedIn = true;

    const info = {
        name: "Isaias Cuvula",
        email: "isaiahscuvula@gmail.com",
        registeredOn: "Feb 21, 2024"
    }


    return (
        <>
            {isLoggedIn ? 
                <div className="profile">
                    <div className="profilePicture">
                        <img
                            src=""
                            // alt="profile picture"
                        />
                        <Icon
                            icon="edit"
                            className="material-symbols-outlined edit"
                        />
                    </div>
                    <h2>{info.name}</h2>
                    <p>{info.email}</p>
                    <p>Registered in: {info.registeredOn}</p>
                </div>
            :
                <div className="welcomeWrapper">
                    <div className="welcome">
                        <h3>Welcome!</h3>
                        <p>Enter your account</p>
                    </div>

                    <button>
                        LOGIN
                    </button>
                </div>
            }

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

                <SettingsListItem
                    icon="settings"
                    description="Settings"
                />
            </div>
            <Navigation />
        </>
    )
}