import React from 'react'
import Faqs from './Faqs'

function Terminal() {
  return (
    <>
      {/* <!-- banner  --> */}
        <section id="banner">
            <div className="inner-banner" style={{backgroundImage: "url('images/bc1-banner.png')"}}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="inner-banner-text">
                                <span>Is this study right for you?</span>
                                <h1>Investigation of Novel Surgical Imaging for Tumor Excision (INSITE)</h1>
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
                                <h2>About This Study</h2>
                            </div>

                            <div className="technology-overview">
                                <div className="technology-overview-left mt-0" style={{backgroundImage: "url('images/abs.png')"}}> 
                                </div>
                                <div className="technology-overview-right"> 
                                    {/* <!-- <h3>Who can participate?</h3> --> */}
                                    <p>
                                        Females age 18 or older, diagnosed with primary invasive breast cancer and or ductal carcinoma in situ (DCIS) and scheduled for lumpectomy are eligible to participate. The INSITE study evaluates a novel drug (pegulicianine) and Lumicell’s imaging system for safety and efficacy in identifying and guiding removal of cancer remaining in the surgical cavity after the standard lumpectomy, with the goal of reducing the risk of repeat surgeries. 
                                    </p>
                                    <p className="mb-0">
                                        Pegulicianine is designed to fluoresce – or light up – in the presence of cancer cells to help surgeons differentiate between healthy and abnormal tissue. After your surgeon completes the standard lumpectomy procedure, your surgeon will scan the surgical cavity with Lumicell’s imaging system to identify and remove residual disease. The Lumicell technology has been used in multiple clinical studies in over 500 breast cancer patients.
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
                                <h2>My Treatment</h2>
                                <p>
                                    Here is how your surgery and treatment plan will change if I you choose to participate in this study.
                                </p>
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

export default Terminal