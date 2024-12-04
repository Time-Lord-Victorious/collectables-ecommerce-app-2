import React from "react";
import Navbar from "../components/navbar";
import Contact from "../components/Contact";
import Story from "../components/Story";
import Carousel from "../components/Carousel";
import Products from "../components/Productslist";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../components/AuthProvider";
import { Container } from "react-bootstrap";

const Home = () => {
    const auth = getAuth();

    const navigate = useNavigate();
    const { currentUser } = useContext(AuthContext);

    if (!currentUser) navigate("/login");
    const handleLogout = () => auth.signOut();
    return (
        <>
            <Navbar handleLogout={handleLogout} />
            <Container>

                <Carousel />
                <br />
                <br />
                <Story />
                <br />
                <br />
                <Contact />
                <br />
                <br />
                <Products />
            </Container>
        </>
    )
}

export default Home