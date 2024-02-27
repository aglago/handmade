import NavigationItem from "../NavigationItem/NavigationItem";
import './Navigation.css'
import { Outlet, Link } from "react-router-dom";


export default function Navigation() {
    
    return (
        <div className="navbar_mobile">
            {/* Store */}
            <Link to="/" className="storefront">
                <NavigationItem
                    className="material-symbols-outlined storefront" 
                    icon="storefront" 
                    description="Store"
                />
            </Link>
            
            {/* Search */}
            
            <Link to="/search">
                <NavigationItem
                    className="material-symbols-outlined search"
                    icon="manage_search"
                    description="Search"
                />
            </Link>
                
            {/* Chat */}
                
            <Link to="/chat">
                <NavigationItem
                    className="material-symbols-outlined chat"
                    icon="chat"
                    description="Chat"
                />
            </Link>
        
            {/* Cart */}
                
            <Link to="/cart">
                <NavigationItem
                    className="material-symbols-outlined cart"
                    icon="shopping_cart"
                    description="Cart"
                />
            </Link>
                    
            {/* Profile */}
                
            <Link to="/profile">
                <NavigationItem
                    className="material-symbols-outlined person"
                    icon="person"
                    description="Profile"
                />
            </Link>

            <Outlet />
        </div>)
}