import warehousing from "../../assets/warehouse.png"
import airplane from "../../assets/airplane.png"
import ship from "../../assets/ship.png"
import lorry from "../../assets/lorry.png"
import years from "../../assets/yearly-report.png"
import packages from "../../assets/logistics-delivery.png"
import { Link } from "react-router-dom"
import { RiArrowRightFill } from "react-icons/ri";

const AboutSection = () => {
  return (
    <div className="about-section">
               <div className="inner-row">
                       <div className="about-section-content">
                                   <div className="strip-bar-section">
                                              <div className="strip-box">
                                                        <div className="icon">
                                                                   <img src={warehousing} alt="" />
                                                        </div>
                                                        <div className="strip-text">
                                                                    <h4>Sustainable</h4>
                                                                    <h2>Warehousing Services</h2>
                                                        </div>
                                              </div>
                                              <div className="strip-box">
                                                        <div className="icon">
                                                                   <img src={airplane} alt="" />
                                                        </div>
                                                        <div className="strip-text">
                                                                    <h4>Reliable</h4>
                                                                    <h2>Air Freight Services</h2>
                                                        </div>
                                              </div>
                                              <div className="strip-box">
                                                      <div className="icon">
                                                                   <img src={ship} alt="" />
                                                        </div>
                                                        <div className="strip-text">
                                                                    <h4>Innovative</h4>
                                                                    <h2>Ocean Freight Services</h2>
                                                        </div>
                                              </div>
                                              <div className="strip-box">
                                                       <div className="icon">
                                                                   <img src={lorry} alt="" />
                                                        </div>
                                                        <div className="strip-text">
                                                                    <h4>Flexible</h4>
                                                                    <h2>Road Freight Services</h2>
                                                        </div>
                                              </div>
                                   </div>


                                   <div className="about-section-texts">
                                                 <div className="about-section-column">
                                                             <div className="about-section-row">
                                                                            <div className="about-section-box">
                                                                                       <div className="about-box-icon">
                                                                                                 <img src={years} alt="" />
                                                                                       </div>
                                                                                       <h2>30+</h2>
                                                                                        <h4>Years of Experience</h4>
                                                                             </div>
                                                                              <div className="about-section-box">
                                                                                         <div className="about-box-icon">
                                                                                                  <img src={packages} alt="" />
                                                                                        </div>
                                                                                        <h2>8.574 M</h2>
                                                                                         <h4>Delivered Goods</h4>
                                                                              </div>
                                                             </div>
                                                 </div>
                                                 <div className="about-section-column">
                                                          <div className="about-section-details">
                                                                      <h3>Providing Full Range of Transportation Worldwide.</h3>
                                                                      <h1>Safe, Reliable and Express Logistics Transport Solutions.</h1>
                                                                      <p>Eunat International Limited is a dynamic player in the cargo and shipping industry providing full range of services in the sphere of customs clearance and transportation worldwide.</p>
                                                                      <p>We pride ourselves on providing the best transport and shipping services available all over the world. Our skilled personnel, utilising the latest communications, tracking and combined with experience through integrated supply chain solutions.</p>

                                                                      <Link to={'/about/'}>Read More <span><RiArrowRightFill /></span></Link>
                                                          </div>
                                                 </div>
                                   </div>
                       </div>
               </div>
    </div>
  )
}

export default AboutSection