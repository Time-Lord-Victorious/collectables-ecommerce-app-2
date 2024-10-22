export default function Products() {


    <>
        <div id="root" />
        <link rel="stylesheet" href="/src/index.css" />
        {/* <body> */}
        {/* Content */}
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-success-subtle">
            <a className="navbar-brand" href="#">
                <img
                    src="JS Prod logo transparent.png"
                    alt=""
                    height="70px"
                    width="70px"
                />
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
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#ourStory">
                            Our Mission!
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contact">
                            Contact us
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#items">
                            Products
                        </a>
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
                            <a className="dropdown-item" href="#">
                                BANDAI
                            </a>
                            <div className="dropdown-divider" />
                            <a className="dropdown-item" href="#">
                                Hiya Toys
                            </a>
                            <div className="dropdown-divider" />
                            <a className="dropdown-item" href="#">
                                Playmates
                            </a>
                            <div className="dropdown-divider" />
                            <a className="dropdown-item" href="#">
                                McFarlane
                            </a>
                            <div className="dropdown-divider" />
                            <a className="dropdown-item" href="#">
                                HASBRO
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
        {/* Section: cover */}
        <div id="carouselExampleIndicators" className="carousel slide">
            <div className="carousel-indicators">
                <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to={0}
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                />
                <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to={1}
                    aria-label="Slide 2"
                />
                <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to={2}
                    aria-label="Slide 3"
                />
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img
                        src="main_carousel_1.png"
                        className="d-block w-100"
                        alt="Slide 1"
                    />
                </div>
                <div className="carousel-item">
                    <img
                        src="main_carousel_2.png"
                        className="d-block w-100"
                        alt="Slide 2"
                    />
                </div>
                <div className="carousel-item">
                    <img
                        src="main_carousel_3.png"
                        className="d-block w-100"
                        alt="Slide 3"
                    />
                </div>
            </div>
            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
            </button>
        </div>
        <br />
        <br />
        <br />
        {/* Section: ourStory */}
        <section id="ourStory" className="absolute-center bg-grey">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h1>Our Mission</h1>
                        <br />
                        <p>
                            Hiya, this is JS Lee, CEO of JS Toys! Since young, I really loved
                            collecting figure collectables for my favourite characters-- no cap.
                        </p>
                        <p>
                            Nowadays, prices for figure collectables are super sky-high that
                            many are struggling to afford at least ONE figure!
                        </p>
                        <p>
                            Thus, this company shall sell collectables at a cheaper price
                            (frfr), ensuring that EVERYONE can enhance their W collections
                            without breaking their bank as much as possible!
                        </p>
                    </div>
                    <div className="col-md-8">
                        <img src="grp pic.jpeg" alt="" height="393px" />
                        <p className="text-right mt-1">
                            <span className="font-weight-bold">JS Lee</span>,{" "}
                            <span className="font-italic">Founder &amp; CEO bro!</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <br />
        <br />
        {/* Section: contact */}
        <section id="contact" className="absolute-center">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src="contact.jpg" alt="" height="393px" length="500px" />
                        <p className="text-right mt-1">
                            <span className="font-weight-bold">Moroboshi Lee</span>,{" "}
                            <span className="font-italic">Communications Officer</span>
                        </p>
                    </div>
                    <div className="col-md-6">
                        <h1>Contact us~</h1>
                        <br />
                        <p>
                            As a G.O.A.T.ed company, the need to offer the most effective comm.
                            channels lives rent-free in our minds!
                        </p>
                        <p>Our email: jscollectablesisdabest@gmail.com</p>
                        <p>Our h/p: 7-777 777777</p>
                        <p>Our insta: @collectorjs_1966</p>
                        <p>Our twitter: collectorjsofficial_1966</p>
                        <p>Our tiktok: @jscollectables_officialstore</p>
                        <p>Store address: 03-11, Honda Street, 1954 Monsterland</p>
                    </div>
                </div>
            </div>
        </section>
        <br />
        <br />
        {/* Section: items */}
        <section id="items" className="mt-5">
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
                                src="s-h-monsterarts-godzilla-2024-evolved-v0-2R0AQuXxs6KRunx7MwmeodbwQJc0JK5LDMt1LfijtRI.webp"
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
                                src="237202483529AM_60598.jpg"
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
                                src="s-l1600.jpg"
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
                                src="my-11134207-7r990-lonfe566zxdq94.webp"
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
                                src="gmanhk.jpg"
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
                            <img className="card-img-top" src="4.jpg" alt="Card image cap" />
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
                                src="item_0000014622_nlVLx2iM_01.jpg"
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
                                src="ultrasevensofubi.jpg"
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
                                src="kingjoesofubi.jpg"
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
                                src="17104_04_Logos.jpg"
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
                                src="15522_01_Logos.jpg"
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
                                src="15666_05_Logos.jpg"
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
                                src="Bandai Figure Rise Standard Batman 1.2-1200x1200.jpg"
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
                            <img className="card-img-top" src="3.jpg" alt="Card image cap" />
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
                                src="new wolvie.jpg"
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
            </div>
        </section>
        {/* Bootstrap JS */}
    </>

}