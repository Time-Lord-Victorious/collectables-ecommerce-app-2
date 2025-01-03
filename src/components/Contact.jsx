import React from 'react'
import contactImage from "../assets/contact.jpg"
import { Row } from 'react-bootstrap'

const Contact = () => {
    return (
        <section id="contact" className="absolute-center">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <Row>
                            <img src={contactImage} alt="" height={'auto'} width={'100%'} /></Row>
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
                        <p>Store location: Bermuda Triangle</p>
                        <br />
                        <br />
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28928.01857158377!2d-71.02059969934388!3d25.00003707674774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89451ab5034cb7ab%3A0xb600ecf3df7aca4d!2sBermuda%20Triangle!5e0!3m2!1sen!2smy!4v1729927694067!5m2!1sen!2smy" width={'100%'} height="450" allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </section>)
}
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
export default Contact