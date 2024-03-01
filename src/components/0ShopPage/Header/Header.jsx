import MenuIcon from "../MenuIcon/MenuIcon"
import Logo from "../Logo/Logo"
import Icon from "../Icon/Icon"
import Search from "../Search/Search"
import './Header.css'
import { Link } from "react-router-dom"


export default function Header() {
    
    return <header>
        <div className="smallScreenStyle">
            <MenuIcon />
            <Logo className="logo"/>
            <Icon 
                icon="settings" 
                className="material-symbols-outlined settings"
            />
        </div>
                
        <div className="largeScreenStyle">
            <Search className="material-symbols-outlined search" />
            <Link to="/cart">
                <Icon className="material-symbols-outlined shopping_cart" icon=
            "shopping_cart"/>
            </Link>
            <Link to="/profile">
                <Icon className="material-symbols-outlined person" icon="Person"></Icon>
            </Link>
        </div>
    </header>
}