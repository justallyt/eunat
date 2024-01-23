import { Link, NavLink } from "react-router-dom"
import logo from "../../../assets/logo.png"
const Header = () => {
  return (
    <header>
              <div className="inner-row">
                        <div className="header-content">
                                  <Link to={'/'} className="logo">
                                              <img src={logo} alt="" />
                                                <div className="logo-texts">
                                                        <h2>EUNAT</h2>
                                                        <h4>International</h4>
                                                         <p>Limited</p>
                                                </div>              
                                  </Link>
                                  <nav>
                                               <ul>
                                                          <li><NavLink to={'/'}>Home</NavLink></li>
                                                          <li><NavLink to={'/about-us/'}>About</NavLink></li>
                                                          <li><NavLink to={'/services/'}>Services</NavLink></li>
                                                          <li><NavLink to={'/contact-us/'}>Contact Us</NavLink></li>
                                               </ul>
                                  </nav>
                                  <div className="header-actions"></div>
                        </div>
              </div>
    </header>
  )
}

export default Header