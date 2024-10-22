import React from 'react'
import { Link } from 'react-router-dom'
import contactImage from "../assets/contact.jpg"

const Contact = () => {
    return (
        <section id="contact" className="absolute-center">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src={contactImage} alt="" height="393px" width="350px" />
                        <p className="text-right mt-1"><span className="font-weight-bold">Moroboshi Lee</span>, <span
                            className="font-italic">Communications Officer</span></p>
                    </div>
                    <div className="col-md-6">
                        <h1>Contact us~</h1>
                        <br />
                        <p>As a G.O.A.T.ed company, the need to offer the most effective comm. channels lives rent-free in
                            our minds!</p>
                        <p>Our email: jscollectablesisdabest@gmail.com</p>
                        <p>Our h/p: 7-777 777777</p>
                        <p>Our insta: @collectorjs_1966
                        </p>
                        <p>Our twitter: collectorjsofficial_1966
                        </p>
                        <p>Our tiktok: @jscollectables_officialstore</p>
                        <p>Store address: 03-11, Honda Street, 1954 Monsterland</p>
                    </div>
                </div>
            </div>
        </section>)
}

export default Contact