import logo from './JS Prod logo transparent.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-success-subtle">
            <a className="navbar-brand" href="#">
                <img src={logo} alt="" height="70" width="70" />
                <h2 className="ml-2 d-inline">JS Collectables</h2>
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#ourStory">Our Mission!</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contact">Contact us</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#items">Products</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            id="navbarDropdown"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            Brands
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#">BANDAI</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Hiya Toys</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Playmates</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">McFarlane</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">HASBRO</a>
                        </div>
                    </li>
                    {/* <li className="nav-item">
                        <Link to="/cart" className="nav-link">
                            <i className="fas fa-shopping-cart"></i> Cart
                        </Link>
                    </li> */}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
