import "./NavbarStyles.css";
import { useState, useContext } from "react";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
import { AuthContext } from "../helpers/AuthContext";

function Navbar() {
    const [clicked, setClicked] = useState(false);
    const { authState, setAuthState } = useContext(AuthContext);

    const handleClick = () => setClicked(!clicked);

    const logout = () => {
        localStorage.removeItem("accessToken");
        setAuthState({ username: "", id: 0, status: false });
        window.location.replace("/");
    };

    return (
        <nav className="NavbarItems">
            <h1 className="navbar-logo">LotView</h1>
            <div className="menu-icons" onClick={handleClick}>
                <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
            <ul className={clicked ? "nav-menu active" : "nav-menu"}>
                {MenuItems.map((item, index) => (
                    <li key={index}>
                        <Link className={item.cName} to={item.url}>
                            <i className={item.icon}></i>
                            {item.title}
                        </Link>
                    </li>
                ))}
                {!authState.status ? (
                    <li>
                        <Link className="nav-links" to="/login">
                        
                        <i class="fa-sharp fa-solid fa-circle-user"></i>&nbsp;Login

                        </Link>
                    </li>
                ) : (
                    <>
                        <li>
                        <Link className="nav-links" to="/spot-availability">
                            <i className="fa-sharp fa-solid fa-video"></i>&nbsp;Spot Availability
                        </Link>
                        </li>
                        <li>
                            <button className="nav-links" onClick={logout}>
                                Logout
                            </button>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    );
}

export default Navbar;