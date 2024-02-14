import { Link } from "react-router-dom"
import logo from "../../assets/logo.png"
import { BsEnvelopeAt } from "react-icons/bs";
import { IoMdCall } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
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
                                                                          <li><Link to='/'>Home</Link></li>
                                                                          <li><Link to='/about/'>About</Link></li>
                                                                          <li><Link to='/services/'>Services</Link></li>
                                                                          <li><Link to='/contact-us/'>Contact</Link></li>
                                                                          <li><Link to='#'>Privacy Policy</Link></li>
                                                               </ul>
                                                  </div>
                                                  <div className="footer-column">
                                                              <h2 className="footer-title">Services</h2>
                                                               <ul>
                                                                          <li><Link to='/service/warehousing'>Warehousing</Link></li>
                                                                          <li><Link to='/service/ocean-freight'>Ocean Freight</Link></li>
                                                                          <li><Link to='/service/cargo-consolidation'>Cargo Consolidation</Link></li>
                                                                          <li><Link to='/service/air-freight'>Air Freight</Link></li>
                                                                          <li><Link to='/service/road-freight'>Road Frieght</Link></li>
                                                               </ul>
                                                  </div>
                                                  <div className="footer-column">
                                                            <h2 className="footer-title">Office</h2>
                                                            <p>3rd Floor, Alta Towers,Opposite Yaya Center</p>

                                                            <h3>Contact Us</h3>
                                                             <div className="footer-box">
                                                                       <span><BsEnvelopeAt /></span>
                                                                       <p>support@eunat.com</p>
                                                             </div>
                                                             <div className="footer-box">
                                                                       <span><IoMdCall /></span>
                                                                       <p>+(254) 7170 00216</p>
                                                             </div>
                                                  </div>
                                      </div>
                           </div>

                           <div className="copyright-section">
                                     <p>&copy; {new Date().getFullYear()} All rights reserved - Eunat International Limited</p>
                                     <div className="footer-social-links">
                                                <ul>
                                                        <Link to={'#'}><span><FaFacebookF /></span></Link>
                                                        <Link to={'https://www.tiktok.com/@eunatinternational'} target="_blank"><span><SiTiktok /></span></Link>
                                                        <Link to={'https://www.instagram.com/eunat_international_limited/'} target="_blank"><span><AiFillInstagram /></span></Link>
                                                </ul>
                                     </div>
                           </div>
              </div>
    </footer>
  )
}

export default Footer