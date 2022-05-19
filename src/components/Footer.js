import React from 'react'

function Footer() {
  return (
    <footer>
      <div className="container">
          <div className="row">
              <div className="col-md-12">
                <div className="footer-main-links">
                      <div className="row"> 
                          <div className="col-md-4">
                              <div className="footer-logo">
                                  <a href="index.php"> <img src="images/footer-logo.png" alt="LC" className="img-fluid" /> </a>
                              </div>
                          </div>
                          <div className="col-md-3">
                              <div className="footer-links">
                                  <h4>Quick Links</h4>
                                  <ul>
                                      <li><a href="index.php">Home</a></li> 
                                      <li><a href="about-us.php">About</a></li> 
                                      <li><a href="breast-cancer-map.php">For Breast Cancer Patients</a></li> 
                                      <li><a href="our-technology.php">Our Technology</a></li> 
                                      <li><a href="news.php">News</a></li> 
                                      <li><a href="career-listing.php">Careers</a></li>
                                      <li><a href="contact-us.php">Contact Us</a></li> 
                                  </ul>
                              </div>
                          </div> 
                          <div className="col-md-3">
                              <div className="footer-links">
                                  <h4>Social Media</h4>
                                  <ul>
                                      <li><a href="https://www.facebook.com" target="_blank">Facebook</a></li> 
                                      <li><a href="https://twitter.com" target="_blank">Twitter</a></li> 
                                      <li><a href="https://www.google.com" target="_blank">Google</a></li> 
                                      <li><a href="https://www.youtube.com" target="_blank">Youtube</a></li>  
                                  </ul>
                              </div>
                          </div>
                          <div className="col-md-2">
                              <div className="footer-links footer-contact">
                                  <h4>Contact</h4>
                                  <ul>
                                      <li> Lorem ipsum dolor sit amet, consect </li> 
                                      <li><a href="#">+123 465 7895</a></li> 
                                      <li><a href="mailto:contact@lumicell.com">contact@lumicell.com</a></li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              <div className="col-md-12">
                  <div className="copyrights-main">
                      <div className="copyright-text">
                          <p>Sed ut perspiciatis unde omins iste natus error sit volupt </p>
                      </div>
                      <div className="copyrights-links">
                          <ul>
                              <li> <a href="#">Terms and services </a> </li>  
                              <li>/</li>
                              <li> <a href="#">Disclamers </a> </li>  
                              <li>/</li> 
                              <li> <a href="#">rules </a> </li>  
                              <li>/</li> 
                              <li> <a href="#">endorsers </a> </li>  
                          </ul> 
                      </div>
                  </div>
              </div>
          </div> 
      </div>
  </footer>
  )
}

export default Footer