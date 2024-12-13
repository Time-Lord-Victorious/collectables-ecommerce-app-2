import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import BootstrapNavbar from 'react-bootstrap/Navbar';
import { FaShoppingCart } from 'react-icons/fa';
import IconButton from "./IconButton";
import logo from "../assets/JS.png";
import { Link } from 'react-router-dom';

const Navbar = ({ handleLogout }) => {
    const currentPath = window.location.href
    const isProfilePage = currentPath.includes('/profile')
    console.log(isProfilePage)
    return (


        <BootstrapNavbar expand="lg" className="navbar-light bg-success-subtle">
            <Container>

                <BootstrapNavbar.Brand >
                    <Link to="/home">
                        <img
                            alt=""
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}JS Collectables</Link></BootstrapNavbar.Brand>
                <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
                <BootstrapNavbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link><Link to="/profile">Profile</Link></Nav.Link>

                        {!isProfilePage &&

                            <>
                                <Nav.Link href="#ourStory">

                                    Our Mission

                                </Nav.Link>
                                <Nav.Link href="#contact">

                                    Contact

                                </Nav.Link>
                                <Nav.Link href="#items">

                                    Products

                                </Nav.Link>
                            </>
                        }

                        <Nav.Link> <Link to="/cart">
                            <FaShoppingCart size={20} />
                        </Link>
                        </Nav.Link>
                        <IconButton
                            className="bi bi-door-closed"
                            text="Logout"
                            onClick={handleLogout}
                        />

                    </Nav>
                </BootstrapNavbar.Collapse>
            </Container>
        </BootstrapNavbar>
    );
}

export default Navbar;