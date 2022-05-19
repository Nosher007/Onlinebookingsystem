import React from 'react'

function News() {
  return (
    <>
        {/* <!-- banner  --> */}
        <section>
            <div className="inner-banner" style={{backgroundImage: "url('images/news-banner.png')"}}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="inner-banner-text">
                                <span>News</span>
                                <h1>Latest Press Releases, media mentions, events & tradeshows</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- banner  --> */}

        <div className="clearfix"></div>

        <section>
             <div className="news-main">
                 <div className="container">
                     <div className="row">
                         <div className="col-md-12">
                             <div className="news">
                                {/* <!-- Nav tabs --> */}
                                <ul className="nav nav-tabs" role="tablist">
                                    <li className="nav-item">
                                    <a className="nav-link active" data-toggle="tab" href="#home">Press Releases</a>
                                    </li>
                                    <li className="nav-item">
                                    <a className="nav-link" data-toggle="tab" href="#menu1">Events</a>
                                    </li>
                                    <li className="nav-item">
                                    <a className="nav-link" data-toggle="tab" href="#menu2">Media Mentions</a>
                                    </li>
                                    <li className="nav-item">
                                    <a className="nav-link" data-toggle="tab" href="#menu3">Tradeshows</a>
                                    </li>
                                </ul>

                                {/* <!-- Tab panes --> */}
                                <div className="tab-content">
                                    <div id="home" className=" tab-pane active"> 
                                        <div className="news-info-main">

                                            <div className="news-info">
                                                <a href="#">Lumicell Granted Fast Track Designation Approval by the FDA for Breast Cancer Treatment</a>
                                                <p>November 17, 2020</p>
                                            </div>
                                            
                                            <div className="news-info">
                                                <a href="#">Lumicell Announces Initiation of NIH/NCI Academic-Industry Study of its LUM Imaging System</a>
                                                <p>September 29, 2020</p>
                                            </div>
                                            
                                            <div className="news-info">
                                                <a href="#">Howard Hechler Joins Lumicell as Senior Vice President of Strategy & Business Development</a>
                                                <p>September 16, 2020</p>
                                            </div>
                                            
                                            <div className="news-info">
                                                <a href="#">Lumicell Initiates Pivotal Trial for Breast Cancer Surgical Guidance Solution</a>
                                                <p>November 05, 2019</p>
                                            </div>
                                            
                                            <div className="news-info">
                                                <a href="#">Lumicell Completes Enrollment of Phase C Feasibility Trial for Breast Cancer Surgical Guidance Solution</a>
                                                <p>August 19, 2019</p>
                                            </div>
                                            
                                            <div className="news-info">
                                                <a href="#">Feasibility Study Underway to Assess Lumicell Technology for Removing Ovarian and Peritoneal Cancer Tumors During the First Surgery</a>
                                                <p>April 10, 2019</p>
                                            </div>
                                            
                                            <div className="news-info">
                                                <a href="#">Lumicell Headquarters Expands Into New Boston-Area Office Space</a>
                                                <p>February 22, 2019</p>
                                            </div>
                                            
                                            <div className="news-info">
                                                <a href="#">Kevin Hershberger Joins Lumicell as Chief Financial Officer</a>
                                                <p>September 18, 2018</p>
                                            </div>
                                            
                                            <div className="news-info">
                                                <a href="#">Lumicell Expands Board with Addition of Michael Ruettgers</a>
                                                <p>August 15, 2018</p>
                                            </div>
                                            
                                            <div className="news-info">
                                                <a href="#">Lumicell Launches Wound Care Infection and Perfusion Division</a>
                                                <p>August 8, 2018</p>
                                            </div>
                                            
                                            <div className="news-info">
                                                <a href="#">Lumicell Forms Scientific Advisory Board To Drive Future Innovations</a>
                                                <p>July 18, 2018</p>
                                            </div>
                                            
                                            <div className="news-info">
                                                <a href="#">Lumicell Reports Positive Clinical Results with LUM System Demonstrating Rapid Identification of Residual Tumor in Lumpectomy Cavity of Patients with Breast Cancer</a>
                                                <p>June 20, 2018</p>
                                            </div>
                                            
                                            <div className="news-info">
                                                <a href="#">Lumicell Presents Phase 2 Clinical Data Showing LUM System Provided Complete and Immediate Detection of Residual Cancer in Tumor Cavity During Lumpectomy Surgery</a>
                                                <p>December 7, 2017</p>
                                            </div>
                                            
                                            <div className="news-info">
                                                <a href="#">Lumicell Expands Development Strategy and Pipeline Across Five Solid Tumor Cancers Supported by $28.7 Million Series C Financing</a>
                                                <p>December 7, 2017</p>
                                            </div>
                                            
                                            <div className="news-info">
                                                <a href="#">Lumicell Initiates New Clinical Studies in Breast Cancer and Prostate Cancer with LUM System for Real-time Detection of Tumor Tissue in Patients During Surgery</a>
                                                <p>September 6, 2017</p>
                                            </div>
                                            
                                            <div className="news-info">
                                                <a href="#">Lumicell to Participate in Upcoming Conferences</a>
                                                <p>September 5, 2017</p>
                                            </div>
                                            
                                            <div className="news-info">
                                                <a href="#">Lumicell Announces Product Development Progress with LUM015 in Lumicell System for Image-Guided Cancer Surgery</a>
                                                <p>August 10, 2017</p>
                                            </div>
                                            
                                            <div className="news-info">
                                                <a href="#">Lumicell Appoints Kelly Londy as Chief Executive Officer, Announces Additional Financing</a>
                                                <p>July 12, 2017</p>
                                            </div>
                                            
                                            <div className="news-info">
                                                <a href="#">Lumicell Appoints Felix Geissler, M.D., Ph.D. as Chief Medical Officer</a>
                                                <p>June 28, 2017</p>
                                            </div>
                                            
                                            <div className="news-info">
                                                <a href="#">Lumicell Awarded Direct Phase II Small Business Innovation Research (SBIR) Grant from the National Cancer Institute to Conduct Multi-Center Pivotal Study</a>
                                                <p>August 9, 2016</p>
                                            </div>
                                            
                                            <div className="news-info">
                                                <a href="#">Lumicell Successfully Completes Phase 2a Feasibility Study</a>
                                                <p>April 13, 2016</p>
                                            </div>
                                            
                                            <div className="news-info">
                                                <a href="#">Lumicell Publishes Data Supporting LUM015, Fluorescent Probe for Imaging Cancer, in Science Translational Medicine</a>
                                                <p>January 6, 2016</p>
                                            </div>
                                            
                                            <div className="news-info">
                                                <a href="#">Lumicell Announces FDA Approval to Launch Feasibility Study in Gastrointestinal Cancers</a>
                                                <p>September 10, 2015</p>
                                            </div>
                                            
                                            <div className="news-info">
                                                <a href="#">Lumicell Announces FDA Approval to Launch Feasibility Study</a>
                                                <p>May 20, 2015</p>
                                            </div>
                                            
                                            <div className="news-info">
                                                <a href="#">Lumicell Phase 1 Results Presented at SSO 2015 Annual Cancer Symposium</a>
                                                <p>May 8, 2015</p>
                                            </div>
                                            
                                            <div className="news-info">
                                                <a href="#">Lumicell Awarded SBIR Phase IIB Grant from National Science Foundation</a>
                                                <p>May 14, 2014</p>
                                            </div>
                                            
                                            <div className="news-info">
                                                <a href="#">Lumicell Awarded SBIR Grant from the National Cancer Institute</a>
                                                <p>August 7, 2013</p>
                                            </div>
                                            
                                            <div className="news-info">
                                                <a href="#">Lumicell Awarded with an Accelerator Loan from the Massachusetts Life Sciences Center</a>
                                                <p>May 29, 2013</p>
                                            </div>
                                            
                                        </div>
                                    </div>

                                    <div id="menu1" className=" tab-pane fade"> 
                                        <div className="news-info-main">
                                            
                                            <div className="news-info">
                                                <p>
                                                    <strong>
                                                        San Antonio Breast Cancer Symposium<br />
                                                        December 10-14, 2019 in San Antonio, TX
                                                    </strong>
                                                </p>
                                                <p>SABCS is designed to provide state-of-the-art information on the experimental biology, etiology, prevention, diagnosis, and therapy of breast cancer and premalignant breast disease, to an international audience of academic and private physicians and researchers.</p>
                                            </div>
                                            

                                        </div>
                                    </div>

                                    <div id="menu2" className="container tab-pane fade"><br/>
                                        <div className="news-info-main">
                                            <div className="news-info">
                                                <a href="#">Dr. Peter Blumencranz, medical director at Baycare Health, discusses the ongoing clinical trial of the LUM Imaging System to reduce the need for second breast cancer surgeries at Morton Plant Hospital in Clearwater, Florida.</a>
                                                <p>October 4, 2020 - Tampa Bay Business Journal</p>
                                            </div>
                                            <div className="news-info">
                                                <a href="#">CEO Today officially announced the full list of finalists and, of course, the winners of their 2018 Business Women of the Year Awards. Proud to have Lumicell's own CEO, Kelly Londy, featured!</a>
                                                <p>July 17, 2018 - CEO Today</p>
                                            </div>
                                            <div className="news-info">
                                                <a href="#">Catching Every Cancer Cell While in Surgery: A veterinary surgeon at Tufts tests and experimental imaging technology on dogs being treated for cancer</a>
                                                <p>May 11, 2018 - TuftsNow</p>
                                            </div>
                                            <div className="news-info">
                                                <a href="#">This new technology could help surgeons clear out leftover cancer cells</a>
                                                <p>March 27, 2018 - Medical Design & Outsourcing</p>
                                            </div>
                                            <div className="news-info">
                                                <a href="#">No Cancer Left Behind: Drug Combination with Device Aims to Improve Cancer Outcomes</a>
                                                <p>January 7, 2018 - PharmExec</p>
                                            </div>
                                            <div className="news-info">
                                                <a href="#">LUM Imaging System to Detect Residual Cancer During Surgery to Start Advanced Clinical Trial</a>
                                                <p>September 8, 2017 - Breast Cancer News</p>
                                            </div>
                                            <div className="news-info">
                                                <a href="#">W. David Lee, CEO, Lumicell Inc., gives keynote speech at MassBio’s “The Convergence of Medical Devices & Drugs: The Future of Combination Products” event in Waltham, MA.</a>
                                                <p>May 12, 2017 - Mass Bio</p>
                                            </div>
                                            <div className="news-info">
                                                <a href="#">Lumicell aims to reduce repeat surgeries in breast cancer</a>
                                                <p>August 14, 2016 - MedCity News</p>
                                            </div>
                                            <div className="news-info">
                                                <a href="#">Protease-Activated Fluorescent Probe Shows Promise as a Cancer Imaging Device</a>
                                                <p>March 22/29, 2016 - The Journal of the American Medical Association</p>
                                            </div>
                                            <div className="news-info">
                                                <a href="#">Glowing Tumors That Could Improve Cancer Surgery Are Getting Closer To Reality</a>
                                                <p>January 22, 2016 - Forbes</p>
                                            </div>
                                            <div className="news-info">
                                                <a href="#">Fluorescent agent could help surgeons remove all of tumor first time</a>
                                                <p>January 7, 2016 - Medical News Today</p>
                                            </div>
                                            <div className="news-info">
                                                <a href="#">New imaging technique "lights up" cancer cells</a>
                                                <p>January 7, 2016 - CBS News</p>
                                            </div>
                                            <div className="news-info">
                                                <a href="#">Bringing Cancer Into the Light, LUM015 injection illuminates cancer cells, may assist in tumor removal</a>
                                                <p>January 5, 2016 - RX Wiki</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="menu3" className="container tab-pane fade"><br/>
                                        <div className="news-info-main">
                                            <div className="news-info">
                                                <a href="#">Lumicell Granted Fast Track Designation Approval by the FDA for Breast Cancer Treatment</a>
                                                <p>November 17, 2020</p>
                                            </div>
                                            <div className="news-info">
                                                <a href="#">Lumicell Announces Initiation of NIH/NCI Academic-Industry Study of its LUM Imaging System</a>
                                                <p>September 29, 2020</p>
                                            </div>
                                            <div className="news-info">
                                                <a href="#">Howard Hechler Joins Lumicell as Senior Vice President of Strategy & Business Development</a>
                                                <p>September 16, 2020</p>
                                            </div>
                                            <div className="news-info">
                                                <a href="#">Lumicell Initiates Pivotal Trial for Breast Cancer Surgical Guidance Solution</a>
                                                <p>November 05, 2019</p>
                                            </div>
                                            <div className="news-info">
                                                <a href="#">Lumicell Completes Enrollment of Phase C Feasibility Trial for Breast Cancer Surgical Guidance Solution</a>
                                                <p>August 19, 2019</p>
                                            </div>
                                            <div className="news-info">
                                                <a href="#">Feasibility Study Underway to Assess Lumicell Technology for Removing Ovarian and Peritoneal Cancer Tumors During the First Surgery</a>
                                                <p>April 10, 2019</p>
                                            </div>
                                            <div className="news-info">
                                                <a href="#">Lumicell Headquarters Expands Into New Boston-Area Office Space</a>
                                                <p>February 22, 2019</p>
                                            </div>
                                            <div className="news-info">
                                                <a href="#">Kevin Hershberger Joins Lumicell as Chief Financial Officer</a>
                                                <p>September 18, 2018</p>
                                            </div>
                                            <div className="news-info">
                                                <a href="#">Lumicell Expands Board with Addition of Michael Ruettgers</a>
                                                <p>August 15, 2018</p>
                                            </div>
                                            <div className="news-info">
                                                <a href="#">Lumicell Launches Wound Care Infection and Perfusion Division</a>
                                                <p>August 8, 2018</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
        </section>
    </>
  )
}

export default News