import React from "react";
import Navbar from "../components/navbar";
import Contact from "../components/Contact";
import Story from "../components/Story";
import Carousel from "../components/Carousel";

const Home = () => {
    return (
        <>
            <Navbar />
            <Carousel />
            <Story />
            <Contact />
        </>
    )
}

export default Home