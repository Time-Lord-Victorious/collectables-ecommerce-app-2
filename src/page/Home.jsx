import React from "react";
import Navbar from "../components/navbar";
import Contact from "../components/Contact";
import Story from "../components/Story";
import Carousel from "../components/Carousel";
import Products from "../components/Productslist";

const Home = () => {
    return (
        <>
            <Navbar />
            <Carousel />
            <Story />
            <Contact />
            <Products />
        </>
    )
}

export default Home