import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import userContext from "../context/userContext";
import { useSelector } from "react-redux";

const Header = () => {

    const {userName} = useContext(userContext);
    // Subscribed to cartSlice
    const cartItems = useSelector((store) => store.cart.items)
    console.log(cartItems)
    return(
        <div className="header">
            <img className="logo" src={LOGO_URL} alt="logo"/>
            <ul className="nav-items">
                <li className="nav-item"><NavLink to="/">Home</NavLink></li>
                <li className="nav-item"><NavLink to="/help">Help</NavLink></li>
                <li className="nav-item"><NavLink to="/contact">Contact</NavLink></li>
                <li className="nav-item nav-cart"><NavLink to="/cart">{cartItems ? cartItems.length : 0} Cart</NavLink></li>
                <h4 style={{"backgroundColor" : "white", "padding" : "5px", "borderRadius" : "5px"}}>{userName}</h4>
            </ul>
        </div>
    )
}

export default Header;