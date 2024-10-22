import React from "react"
import { useState } from "react"
import carouselImage1 from "../assets/main_carousel_1.png"
import carouselImage2 from "../assets/main_carousel_2.png"
import carouselImage3 from "../assets/main_carousel_3.png"

const Carousel = () => {

    const images = [carouselImage1, carouselImage2, carouselImage3]

    const [activeNumber, setActiveNumber] = useState(1);

    const handleNextSlide = () => {
        if (activeNumber === 3) {
            setActiveNumber(1);
        } else {
            setActiveNumber(activeNumber + 1);
        }
    }

    const handlePrevSlide = () => {
        if (activeNumber === 1) {
            setActiveNumber(3);
        } else {
            setActiveNumber(activeNumber - 1);
        }
    }

    return (
        <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">

                {images.map((image, index) => (

                    <div className={`carousel-item ${index + 1 === activeNumber && "active"}`}

                        key={index}>
                        <img src={image} className="d-block w-100" style={{
                            objectFit: "cover",

                        }} alt="..." height={"650"} />
                    </div>))}


            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev" onClick={handlePrevSlide}>
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next" onClick={handleNextSlide}>
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Carousel;