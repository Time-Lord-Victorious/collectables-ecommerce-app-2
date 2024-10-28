import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/JS.png"
import { FaShoppingCart } from 'react-icons/fa';
import IconButton from "./IconButton";

const Navbar = ({ handleLogout }) => {
    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-success-subtle">
            <Link className="navbar-brand" to="/home"><img src={logo} alt="" height="70px" width="70px" ></img>
                <h2 className="ml-2 d-inline">JS Collectables</h2>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" href="#ourStory">Our Mission!</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="#contact">Contact us</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="#items">Products</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                            Brands
                        </Link>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <Link className="dropdown-item" href="#">BANDAI</Link>
                            <div className="dropdown-divider"></div>
                            <Link className="dropdown-item" href="#">Hiya Toys</Link>
                            <div className="dropdown-divider"></div>
                            <Link className="dropdown-item" href="#">Playmates</Link>
                            <div className="dropdown-divider"></div>
                            <Link className="dropdown-item" href="#">McFarlane</Link>
                            <div className="dropdown-divider"></div>
                            <Link className="dropdown-item" href="#">HASBRO</Link>
                        </div>
                    </li>
                </ul>
                <Link to="/cart" className="nav-link">
                    <FaShoppingCart size={20} />
                </Link>
                <IconButton
                    className="bi bi-door-closed"
                    text="Logout"
                    onClick={handleLogout}
                />
            </div>
        </nav>
    )
}

export default Navbar