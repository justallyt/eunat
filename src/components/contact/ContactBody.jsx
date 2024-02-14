import { IoMdCall } from "react-icons/io";
import { BsEnvelopeFill } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
//import { FaXTwitter } from "react-icons/fa6";
import { ImLocation2 } from "react-icons/im";
import { AiFillInstagram } from "react-icons/ai";
import { HiMiniDevicePhoneMobile } from "react-icons/hi2";
import { SiTiktok } from "react-icons/si";
import { Link  } from "react-router-dom";
const ContactBody = () => {
  return (
    <div className="contact-body">
              <div className="inner-row">
                         <div className="contact-body-content">
                                     <div className="contact-form">
                                                  <h2>Get in Touch with Us</h2>
                                                  <form>
                                                             <div className="form-row split">
                                                                       <div className="form-column">
                                                                                  <label htmlFor="name">Name</label>
                                                                                  <input type="text" className="form-control" placeholder="Name" />
                                                                       </div>
                                                                       <div className="form-column">
                                                                                  <label htmlFor="email">Email</label>
                                                                                  <input type="email" className="form-control" placeholder="Email" />
                                                                       </div>
                                                             </div>
                                                             <div className="form-row split">
                                                                       <div className="form-column">
                                                                                  <label htmlFor="phone">Phone</label>
                                                                                  <input type="number" className="form-control" placeholder="Phone Number" pattern="+[0,9]" />
                                                                       </div>
                                                                       <div className="form-column">
                                                                                  <label htmlFor="subject">Subject</label>
                                                                                  <input type="subject" className="form-control" placeholder="Email" />
                                                                       </div>
                                                             </div>
                                                             <div className="form-row">
                                                                        <label htmlFor="message">Message</label>
                                                                        <textarea placeholder="Your Message"  cols="30" rows="10"></textarea>
                                                             </div>

                                                             <button type="submit" className="form-btn">Submit</button>
                                                  </form>
                                     </div>

                                     <div className="contact-details">
                                                <div className="contact-detail-box">
                                                           <h3>Opening Hours</h3>
                                                           <p>Monday to Friday</p>
                                                           <p>8am to 5pm</p>
                                                </div>
                                                <div className="contact-detail-box">
                                                           <h3>Address</h3>
                                                           <h4>Main Office</h4>
                                                           <p><span><ImLocation2 /></span>3rd Floor, Alta Towers,Opposite Yaya Center</p>

                                                           <h4>Branch Office</h4>
                                                           <p><span><ImLocation2 /></span>2nd Floor Wakianda House,Meru Road, Mombasa</p>
                                                </div>
                                                <div className="contact-detail-box">
                                                            <h3>Support</h3>
                                                            <p><span><IoMdCall /></span>+(254) 7115 877320</p>
                                                            <p><span><IoMdCall /></span>+(254) 7839 23945</p>
                                                            <p><span><HiMiniDevicePhoneMobile /></span>+(254) 7170 00216</p>
                                                            <p><span><BsEnvelopeFill /></span>hello@eunat.com</p>

                                                            <div className="contact-social-links">
                                                                       <ul>
                                                                                 <p>Socials:</p>
                                                                                <Link to={'#'}><span><FaFacebookF /></span></Link>
                                                                                <Link to={'https://www.tiktok.com/@eunatinternational'} target="_blank"><span><SiTiktok /></span></Link>
                                                                                <Link to={'https://www.instagram.com/eunat_international_limited/'} target="_blank"><span><AiFillInstagram /></span></Link>
                                                                     </ul>
                                                            </div>
                                                </div>
                                     </div>
                         </div>
              </div>
    </div>
  )
}

export default ContactBody