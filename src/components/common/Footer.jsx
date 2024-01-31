import { Link } from "react-router-dom"
import logo from "../../assets/logo.png"
import { BsEnvelopeAt } from "react-icons/bs";
import { IoMdCall } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
              <div className="inner-row">
                           <div className="footer-content">
                                      <div className="footer-row-column">
                                                  <Link to={'/'} className="footer-logo">
                                                               <img src={logo} alt="" />
                                                             <div className="logo-texts">
                                                                     <h2>EUNAT</h2>
                                                                     <h4>International</h4>
                                                                      <p>Limited</p>
                                                             </div> 
                                                  </Link>
                                                  <p>Eunat is a representative logistics operator providing full range of services in the sphere of customs cargo and transportation worldwide</p>
                                      </div>
                                      <div className="footer-row-column split">
                                                  <div className="footer-column">
                                                               <h2 className="footer-title">Company</h2>
                                                               <ul>
                                                                          <li><Link to=''>Home</Link></li>
                                                                          <li><Link to=''>About</Link></li>
                                                                          <li><Link to=''>Services</Link></li>
                                                                          <li><Link to=''>Contact</Link></li>
                                                                          <li><Link to=''>Privacy Policy</Link></li>
                                                               </ul>
                                                  </div>
                                                  <div className="footer-column">
                                                              <h2 className="footer-title">Services</h2>
                                                               <ul>
                                                                          <li><Link to=''>Warehousing</Link></li>
                                                                          <li><Link to=''>Ocean Freight</Link></li>
                                                                          <li><Link to=''>Container Leasing</Link></li>
                                                                          <li><Link to=''>Air Freight</Link></li>
                                                                          <li><Link to=''>Road Frieght</Link></li>
                                                               </ul>
                                                  </div>
                                                  <div className="footer-column">
                                                            <h2 className="footer-title">Office</h2>
                                                            <p>123 Anywhere St, Any City, Chai Road 3425</p>

                                                            <h3>Contact Us</h3>
                                                             <div className="footer-box">
                                                                       <span><BsEnvelopeAt /></span>
                                                                       <p>support@eunat.com</p>
                                                             </div>
                                                             <div className="footer-box">
                                                                       <span><IoMdCall /></span>
                                                                       <p>+254 7123 45678</p>
                                                             </div>
                                                  </div>
                                      </div>
                           </div>

                           <div className="copyright-section">
                                     <p>&copy; {new Date().getFullYear()} All rights reserved - Eunat International Limited</p>
                                     <div className="footer-social-links">
                                                <ul>
                                                           <Link to={'/'}><span><FaFacebookF /></span></Link>
                                                           <Link to={'/'}><span><FaXTwitter /></span></Link>
                                                           <Link to={'/'}><span><AiFillInstagram /></span></Link>
                                                </ul>
                                     </div>
                           </div>
              </div>
    </footer>
  )
}

export default Footer