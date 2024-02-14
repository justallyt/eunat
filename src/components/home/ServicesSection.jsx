import { Link } from "react-router-dom"
import { RiArrowRightFill } from "react-icons/ri";
import { GoArrowUpRight } from "react-icons/go";
import oceanFreight from "../../assets/ocean-freight.jpg"
import airFreight from '../../assets/air-freight.jpg'
import roadFreight from '../../assets/road-freight.jpg'
import warehousing from '../../assets/warehousing1.jpg'
const ServicesSection = () => {
  return (
    <div className="services-section">
                <div className="inner-row">
                            <div className="services-section-content">
                                        <div className="services-intro">
                                                   <div className="services-intro-sticky">
                                                              <h1>Comprehensive Set of <span>Cargo & Shipping</span> Services<span className="alternate">.</span></h1>
                                                              <p>Our global logistics expertise, advanced supply chain technology & customized logistics solutions will help you develop and implement successful supply chain management strategies from end-to-end.</p>
                                                              <Link to={'/services/'}>All Services <span><RiArrowRightFill /></span></Link>
                                                   </div>
                                        </div>
                                        <div className="services-row">
                                                  <div className="service-moja-outline">
                                                            <div className="service-desc">
                                                                      <div className="desc-inner">
                                                                                <h2>Ocean Freight</h2>
                                                                                 <Link to={'/service/ocean-freight'}>Explore More <span><GoArrowUpRight /></span></Link>
                                                                      </div>
                                                            </div>
                                                            <div className="service-image">
                                                                       <img src={oceanFreight} alt="" />
                                                            </div>
                                                  </div>
                                                  <div className="service-moja-outline">
                                                            <div className="service-desc">
                                                                      <div className="desc-inner">
                                                                                <h2>Air Freight</h2>
                                                                                 <Link to={'/service/air-freight'}>Explore More <span><GoArrowUpRight /></span></Link>
                                                                      </div>
                                                            </div>
                                                            <div className="service-image">
                                                                       <img src={airFreight} alt="" />
                                                            </div>
                                                  </div>
                                                  <div className="service-moja-outline">
                                                            <div className="service-desc">
                                                                      <div className="desc-inner">
                                                                                <h2>Road Freight</h2>
                                                                                 <Link to={'/service/road-freight'}>Explore More <span><GoArrowUpRight /></span></Link>
                                                                      </div>
                                                            </div>
                                                            <div className="service-image">
                                                                       <img src={roadFreight} alt="" />
                                                            </div>
                                                  </div>
                                                  <div className="service-moja-outline">
                                                            <div className="service-desc">
                                                                      <div className="desc-inner">
                                                                                <h2>Warehousing</h2>
                                                                                 <Link to={'/service/warehousing'}>Explore More <span><GoArrowUpRight /></span></Link>
                                                                      </div>
                                                            </div>
                                                            <div className="service-image">
                                                                       <img src={warehousing} alt="" />
                                                            </div>
                                                  </div>
                                        </div>
                            </div>
                </div>
    </div>
  )
}

export default ServicesSection