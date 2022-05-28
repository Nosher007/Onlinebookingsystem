import React from 'react'
import Faqs from './Faqs'

function Quetta() {
  return (
    <>
      {/* <!-- banner  --> */}
        <section id="banner">
            <div className="inner-banner" style={{backgroundImage: "url('images/bc1-banner.png')"}}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="inner-banner-text">
                            <h1 style={{color:"white"}}>Quetta</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- banner  --> */}

        <div className="clearfix"></div>

        {/* <!-- About this study  --> */}
        <section id="about-this-study">
            <div className="technology-overview-main about-this-study-main"> 
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="lc-hd text-center">
                                <h2>Introduction</h2>
                            </div>

                            <div className="technology-overview">
                                <div className="technology-overview-left mt-0" style={{backgroundImage: "url('images/abs.png')"}}> 
                                </div>
                                <div className="technology-overview-right"> 
                                    {/* <!-- <h3>Who can participate?</h3> --> */}
                                    <p>
                                        All the routs run 24/7 to all the terminal (Karachi, Islamabad, Quetta)
                                    </p>
                                    <p className="mb-0">
                                        still in case do check the timing on the booking in case of any delayes or cancleation
                                    </p> 
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- About this study  --> */}

        <div className="clearfix"></div> 
       
        {/* <!-- timeline  --> */}
        <section id="timeline">
            <div className="faqs-main timeline-main mb-0 pb-0" style={{ backgroundColor: "#e4e9ed;"}} >
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="lc-hd text-center">
                                <h2>Local Transport route </h2>
                            </div> 

                            <div className="timeline">
                                <img src="images/timeline.png" alt="Surgery Timeline" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- timeline  --> */}

        <div className="clearfix"></div> 

        {/* faqs */}
        <Faqs/>
        {/* faqs */}
    </>
  )
}

export default Quetta