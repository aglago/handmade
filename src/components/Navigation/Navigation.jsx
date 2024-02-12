import NavigationItem from "../NavigationItem/NavigationItem";
import './Navigation.css'


export default function Navigation() {
    
    return <div className="navbar_mobile">
                {/* Store */}
                <NavigationItem className="material-symbols-outlined storefront" 
                icon="storefront" 
                description="Store"/>
                
                {/* Search */}
                
                <NavigationItem
                className="material-symbols-outlined search"
                icon="manage_search"
                description="Search" />
                
                {/* Chat */}
                
                <NavigationItem
                className="material-symbols-outlined chat"
                icon="chat"
                description="Chat" />
                
                {/* History */}
                
                <NavigationItem
                className="material-symbols-outlined chat"
                icon="history"
                description="History" />
                
                {/* Profile */}
                
                <NavigationItem
                className="material-symbols-outlined person"
                icon="person"
                description="Profile" />
            </div>
}