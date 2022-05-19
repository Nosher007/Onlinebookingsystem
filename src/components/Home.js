import React from 'react'
import Faqs from './Faqs'

function Home() {

    // const submitInfos = (e) => {
    //     e.preventDefault();
    //     console.log("rwfwrf");
    //     alert("REfref");
    // }
    const handleSubmit = (e) =>  {
        e.preventDefault();
        console.log('You clicked submit.');
      }



  return (
    <>

        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="name" defaultValue={"ewfd"} />
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>

        {/* <!-- banner  --> */}
        <section>
            <div className="lc-banner" style={{ backgroundImage: "url('images/banner.png')"}} >
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="lc-banner-text">
                                <h1>Our mission is to improve outcomes for cancer patients</h1>
                                <p>
                                    Lumicell's technologies are designed to guide surgical oncologists using state of the art fluorescence imaging to identify and remove cancer in real-time.
                                </p>
                                    <a href="our-technology.php" className="genral-btn" style={{textAlign: 'center', lineHeight: 3.6, textDecoration: 'none'}}>Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- banner  --> */}

        <div className="clearfix"></div> 
      
        {/* <!-- Breast Cancer  --> */}
        <section>
            <div className="breast-cancer-main">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="home-four-inner">
                                <a href="https://clinicaltrials.gov/ct2/show/NCT03686215?term=lumicell&draw=2&rank=1" target="_blank" className="breast-cancer-left" style={{ backgroundImage: "url('images/bc1.png')"}}>
                                    <div className="breast-cancer-text">
                                        <h2>Investigation of Novel Surgical Imaging for Tumor Excision (INSITE)</h2>
                                        <p>See this study on clinicaltrials.gov</p>
                                        {/* <!-- We are actively recruiting --> */}
                                        <div className="cust-arrow">
                                            <span>
                                                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                                    viewBox="0 0 476.2 476.2" style={{enableBackground:'new 0 0 476.2 476.2'}} xmlSpace="preserve">
                                                    <polygon points="29.5,253.1 389.3,253.1 294.9,347.5 316.1,368.7 446.7,238.1 316.1,107.5 294.9,128.7 389.3,223.1 29.5,223.1 "/>
                                                </svg> 
                                            </span>
                                        </div>
                                    </div>
                                </a>
                                <div className="breast-cancer-right">
                                    <a href="breast-cancer-map.php" className="breast-cancer-sub-right" style={{ backgroundImage: "url('images/bc2.png')"}} > 
                                        <div className="breast-cancer-text">
                                            <h2>Learn more about INSITE</h2>
                                            <p>Is this study right for you?</p>
                                            <div className="cust-arrow">
                                                <span>
                                                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                                        viewBox="0 0 476.2 476.2" style={{enableBackground:'new 0 0 476.2 476.2'}} xmlSpace="preserve">
                                                        <polygon points="29.5,253.1 389.3,253.1 294.9,347.5 316.1,368.7 446.7,238.1 316.1,107.5 294.9,128.7 389.3,223.1 29.5,223.1 "/>
                                                    </svg> 
                                                </span>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="breast-cancer-map.php#findDoctor" className="breast-cancer-sub-right breast-cancer-sub-right-black " style={{ backgroundImage: "url('images/bc3.png')"}} > 
                                        <div className="breast-cancer-text">
                                            <h2>Find a Doctor Near You</h2> 
                                            <div className="cust-arrow">
                                                <span>
                                                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                                        viewBox="0 0 476.2 476.2" style={{enableBackground:'new 0 0 476.2 476.2'}} xmlSpace="preserve">
                                                        <polygon points="29.5,253.1 389.3,253.1 294.9,347.5 316.1,368.7 446.7,238.1 316.1,107.5 294.9,128.7 389.3,223.1 29.5,223.1 "/>
                                                    </svg> 
                                                </span>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="our-technology.php#ourPublication" className="breast-cancer-sub-right" style={{backgroundImage: "url('images/bc4.png')"}} > 
                                        <div className="breast-cancer-text third">
                                            <h2>Our Published Research</h2>
                                            <p>From work with our academic collaborators</p>
                                            <div className="cust-arrow">
                                                <span>
                                                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                                        viewBox="0 0 476.2 476.2" style={{enableBackground:'new 0 0 476.2 476.2'}} xmlSpace="preserve">
                                                        <polygon points="29.5,253.1 389.3,253.1 294.9,347.5 316.1,368.7 446.7,238.1 316.1,107.5 294.9,128.7 389.3,223.1 29.5,223.1 "/>
                                                    </svg> 
                                                </span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- Breast Cancer  --> */}

        <div className="clearfix"></div> 

        {/* <!-- faqs  --> */}
        <Faqs/>
        {/* <!-- faqs  --> */}

        <div className="clearfix"></div> 
        
        {/* <!-- technologies  --> */}
        <section>
            <div className="technology-overview-main"> 
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="lc-hd text-center">
                                <h2>Technology Overview</h2>
                            </div>

                            <div className="technology-overview">
                                <div className="technology-overview-left" style={{ backgroundImage: "url('images/t1.png')"}}> 
                                </div>
                                <div className="technology-overview-right"> 
                                    <h3>Our Technology</h3>
                                    <p>
                                        Lumicell’s Imaging System has three main components: an injectable drug called pegulicianine, a handheld imaging probe and computer software.
                                    </p>
                                    <a href="our-technology.php" className="genral-btn" style={{ textAlign: 'center', lineHeight: 3.6, textDecoration: 'none', display: 'inline-block'}}>Learn More</a>  
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- technologies  --> */}

    </>
  )
}

export default Home