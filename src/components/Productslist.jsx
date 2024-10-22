import React from "react"
import evolvedGodzilla from "../assets/godzilla2024sh.webp"
import godzilla1991 from "../assets/godzilla1991.jpg"
import godzilla1975 from "../assets/godzilla1975.jpg"
import godzilla1955 from "../assets/godzilla1955.webp"
import godzillaHk from "../assets/gmanhk.jpg"
import ultramanSh from "../assets/ultramansh.jpg"
import ultrasevenSh from "../assets/ultrasevensh.jpg"
import ultrasevenSoft from "../assets/ultrasevensofubi.jpg"
import kingJoe from "../assets/kingjoesofubi.jpg"
import batmanComics from "../assets/batmancomics.jpg"
import batmanFlash from "../assets/batmanflash.jpg"
import batmanForever from "../assets/batmanforever.jpg"
import batmanBandai from "../assets/batmanbandai.jpg"
import wolvieBandai from "../assets/wolviebandai.jpg"
import wolvieHasbro from "../assets/new wolvie.jpg"

const Products = () => {

    return (
        <div className="container m-10">
            <h1 className="text-center">Products</h1>
            <br />
            <div className="row justify-content-between">
                <div className="ml-3">
                    <button type="button" className="btn btn-outline-secondary">
                        all
                    </button>
                    <button type="button" className="btn btn-outline-secondary">
                        Godzilla
                    </button>
                    <button type="button" className="btn btn-outline-secondary">
                        Ultraman
                    </button>
                    <button type="button" className="btn btn-outline-secondary">
                        Batman
                    </button>
                    <button type="button" className="btn btn-outline-secondary">
                        Wolverine
                    </button>
                </div>
                <div className="flex-grow-1 d-flex justify-content-lg-end">
                    <form className="form-inline my-2 my-lg-0 mr-3 mx-3">
                        <input
                            className="form-control mr-2"
                            type="text"
                            placeholder="Search our products!"
                            aria-label="Search"
                        />
                        {/* <button type="button" class="btn btn-outline-success my-2 my-sm-0">Search</button> */}
                    </form>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 col-lg-4 my-2 item godzilla">
                    <div className="card h-100">
                        <img
                            className="card-img-top"
                            src={evolvedGodzilla}
                            alt="Card image cap"
                        />
                        <div className="card-body">
                            <p className="card-text">
                                Godzilla Evolved (BANDAI SH MonsterArts)
                            </p>
                            <div className="d-flex justify-content-between">
                                <h5 className="card-title">RM 300.00</h5>
                                <button
                                    className="btn btn-primary add-to-cart"
                                    data-id={1}
                                    data-name="Godzilla Evolved"
                                    data-price={300}
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 my-2 item godzilla">
                    <div className="card h-100">
                        <img
                            className="card-img-top"
                            src={godzilla1991}
                            alt="Card image cap"
                        />
                        <div className="card-body">
                            <p className="card-text">
                                Godzilla 1991 Hokkaido ver. (HIYA Toys)
                            </p>
                            <div className="d-flex justify-content-between">
                                <h5 className="card-title">RM 120.00</h5>
                                <button
                                    className="btn btn-primary add-to-cart"
                                    data-id={2}
                                    data-name="Godzilla 1991"
                                    data-price={120}
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 my-2 item godzilla">
                    <div className="card h-100">
                        <img
                            className="card-img-top"
                            src={godzilla1975}
                            alt="Card image cap"
                        />
                        <div className="card-body">
                            <p className="card-text">
                                Godzilla 1975 Movie Monster Series (BANDAI)
                            </p>
                            <div className="d-flex justify-content-between">
                                <h5 className="card-title">RM 110.00</h5>
                                <button
                                    className="btn btn-primary add-to-cart"
                                    data-id={3}
                                    data-name="Godzilla 1975"
                                    data-price={110}
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 my-2 item godzilla">
                    <div className="card h-100">
                        <img
                            className="card-img-top"
                            src={godzilla1955}
                            alt="Card image cap"
                        />
                        <div className="card-body">
                            <p className="card-text">
                                Godzilla 1955 Movie Monster Series (BANDAI)
                            </p>
                            <div className="d-flex justify-content-between">
                                <h5 className="card-title">RM 100.00</h5>
                                <button
                                    className="btn btn-primary add-to-cart"
                                    data-id={4}
                                    data-name="Godzilla 1955"
                                    data-price={100}
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 my-2 item godzilla">
                    <div className="card h-100">
                        <img
                            className="card-img-top"
                            src={godzillaHk}
                            alt="Card image cap"
                        />
                        <div className="card-body">
                            <p className="card-text">Godzilla Hong Kong Battle (Playmates)</p>
                            <div className="d-flex justify-content-between">
                                <h5 className="card-title">RM 50.00</h5>
                                <button
                                    className="btn btn-primary add-to-cart"
                                    data-id={5}
                                    data-name="Godzilla Hong Kong Battle"
                                    data-price={50}
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 my-2 item ultraman">
                    <div className="card h-100">
                        <img className="card-img-top" src={ultramanSh} alt="Card image cap" />
                        <div className="card-body">
                            <p className="card-text">Ultraman (BANDAI SH FigureArts)</p>
                            <div className="d-flex justify-content-between">
                                <h5 className="card-title">RM 150.00</h5>
                                <button
                                    className="btn btn-primary add-to-cart"
                                    data-id={6}
                                    data-name="Ultraman"
                                    data-price={150}
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 my-2 item ultraman">
                    <div className="card h-100">
                        <img
                            className="card-img-top"
                            src={ultrasevenSh}
                            alt="Card image cap"
                        />
                        <div className="card-body">
                            <p className="card-text">Ultraseven (BANDAI SH FigureArts)</p>
                            <div className="d-flex justify-content-between">
                                <h5 className="card-title">RM 150.00</h5>
                                <button
                                    className="btn btn-primary add-to-cart"
                                    data-id={7}
                                    data-name="Ultraseven"
                                    data-price={150}
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 my-2 item ultraman">
                    <div className="card h-100">
                        <img
                            className="card-img-top"
                            src={ultrasevenSoft}
                            alt="Card image cap"
                        />
                        <div className="card-body">
                            <p className="card-text">Ultraseven sofubi (BANDAI)</p>
                            <div className="d-flex justify-content-between">
                                <h5 className="card-title">RM 27.00</h5>
                                <button
                                    className="btn btn-primary add-to-cart"
                                    data-id={8}
                                    data-name="ultrasevensofubi"
                                    data-price={27}
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 my-2 item ultraman">
                    <div className="card h-100">
                        <img
                            className="card-img-top"
                            src={kingJoe}
                            alt="Card image cap"
                        />
                        <div className="card-body">
                            <p className="card-text">King Joe sofubi (BANDAI)</p>
                            <div className="d-flex justify-content-between">
                                <h5 className="card-title">RM 27.00</h5>
                                <button
                                    className="btn btn-primary add-to-cart"
                                    data-id={9}
                                    data-name="kingjoesofubi"
                                    data-price={27}
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 my-2 item batman">
                    <div className="card h-100">
                        <img
                            className="card-img-top"
                            src={batmanComics}
                            alt="Card image cap"
                        />
                        <div className="card-body">
                            <p className="card-text">
                                Batman Detective Comics #27 (McFarlane)
                            </p>
                            <div className="d-flex justify-content-between">
                                <h5 className="card-title">RM 105.00</h5>
                                <button
                                    className="btn btn-primary add-to-cart"
                                    data-id={10}
                                    data-name="batmandetective"
                                    data-price={105}
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 my-2 item batman">
                    <div className="card h-100">
                        <img
                            className="card-img-top"
                            src={batmanFlash}
                            alt="Card image cap"
                        />
                        <div className="card-body">
                            <p className="card-text">
                                Batman Multiverse The Flash (McFarlane)
                            </p>
                            <div className="d-flex justify-content-between">
                                <h5 className="card-title">RM 110.00</h5>
                                <button
                                    className="btn btn-primary add-to-cart"
                                    data-id={11}
                                    data-name="batmanmultiverse"
                                    data-price={1100}
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 my-2 item batman">
                    <div className="card h-100">
                        <img
                            className="card-img-top"
                            src={batmanForever}
                            alt="Card image cap"
                        />
                        <div className="card-body">
                            <p className="card-text">Batman Forever (McFarlane)</p>
                            <div className="d-flex justify-content-between">
                                <h5 className="card-title">RM 115.00</h5>
                                <button
                                    className="btn btn-primary add-to-cart"
                                    data-id={12}
                                    data-name="batmanforever"
                                    data-price={115}
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 my-2 item batman">
                    <div className="card h-100">
                        <img
                            className="card-img-top"
                            src={batmanBandai}
                            alt="Card image cap"
                        />
                        <div className="card-body">
                            <p className="card-text">Amplified Batman (BANDAI)</p>
                            <div className="d-flex justify-content-between">
                                <h5 className="card-title">RM 200.00</h5>
                                <button
                                    className="btn btn-primary add-to-cart"
                                    data-id={13}
                                    data-name="amplifiedbatman"
                                    data-price={200}
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 my-2 item wolverine">
                    <div className="card h-100">
                        <img className="card-img-top" src={wolvieBandai} alt="Card image cap" />
                        <div className="card-body">
                            <p className="card-text">Wolverine (BANDAI SH FigureArts)</p>
                            <div className="d-flex justify-content-between">
                                <h5 className="card-title">RM 250.00</h5>
                                <button
                                    className="btn btn-primary add-to-cart"
                                    data-id={14}
                                    data-name="wolverinebandai"
                                    data-price={250}
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 my-2 item wolverine">
                    <div className="card h-100">
                        <img
                            className="card-img-top"
                            src={wolvieHasbro}
                            alt="Card image cap"
                        />
                        <div className="card-body">
                            <p className="card-text">
                                Wolverine MARVEL Legends 2024 (HASBRO)
                            </p>
                            <div className="d-flex justify-content-between">
                                <h5 className="card-title">RM 135.00</h5>
                                <button
                                    className="btn btn-primary add-to-cart"
                                    data-id={15}
                                    data-name="wolverinehasbro"
                                    data-price={135}
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}

export default Products