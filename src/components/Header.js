import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
        <div className="header">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="lc-navbar-main">
                            <nav className="navbar navbar-expand-md">
                                <Link className="navbar-brand" to="/"><img src="images/lc.png" alt="LC"/></Link>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                                    <ul className="nav navbar-nav ml-auto"> 
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/">Home</Link>
                                        </li> 
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#">Terminals </a> 
                                            {/* <!-- data-toggle="dropdown" --> */}
                                            <div className="dropdown-menu">
                                                <div className="dc-menu-main floating">
                                                    <div className="menu-list">
                                                        <ul>
                                                            <li><Link to="/terminal">Lahore</Link></li>
                                                            <li><Link to="/karachi">Karachi</Link></li>  
                                                            <li><Link to="/islamabad">Islamabad</Link></li>  
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                    

                                        <li className="nav-item">
                                            <Link className="nav-link" to="/contact">CONTACT US </Link>
                                        </li>  

                                        <li className="nav-item">
                                            <Link className="nav-link" to="/ticket">Purchase Ticket</Link>
                                        </li>  

                                    </ul>
        
                                </div>  
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    </header>
  )
}

export default Header