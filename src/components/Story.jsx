import React from 'react'
import storyImage from "../assets/grp pic.jpeg"

const Story = () => {
    return (
        <section id="ourStory" className="absolute-center bg-grey">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h1>Our Mission</h1>
                        <br />
                        <p>Hiya, this is JS Lee, CEO of JS Toys! Since young, I really loved collecting figure collectables for my
                            favourite characters-- no cap.</p>
                        <p>Nowadays, prices for figure collectables are super sky-high that many are struggling to afford at least
                            ONE figure!</p>
                        <p>Thus, this company shall sell collectables at a cheaper price (frfr),
                            ensuring that EVERYONE can enhance their W collections without breaking their bank as much as possible!
                        </p>

                    </div>
                    <div className="col-md-8">
                        <img src={storyImage} alt="" height="393px" width="410px" />
                        <p className="text-right mt-1"><span className="font-weight-bold">JS Lee</span>, <span className="font-italic">Founder &
                            CEO bro!</span></p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Story