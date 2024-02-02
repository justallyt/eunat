import { IoMdCall } from "react-icons/io";
import { BsEnvelopeFill } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
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
                                                           <p>Monday to Saturday</p>
                                                           <p>9am to 8pm</p>

                                                           <h5>Weekend</h5>
                                                           <p>Saturday and Sunday</p>
                                                           <p>9am to 1pm</p>
                                                </div>
                                                <div className="contact-detail-box">
                                                           <h3>Address</h3>
                                                           <p>Chicago HQ Estica Corp. Macomb, MI 48045</p>
                                                </div>
                                                <div className="contact-detail-box">
                                                            <h3>Support</h3>
                                                            <p><span><IoMdCall /></span>+(254) 7123 6789</p>
                                                            <p><span><BsEnvelopeFill /></span>hello@eunat.com</p>

                                                            <div className="contact-social-links">
                                                                       <ul>
                                                                                 <p>Socials:</p>
                                                                                <Link to={'/'}><span><FaFacebookF /></span></Link>
                                                                                <Link to={'/'}><span><FaXTwitter /></span></Link>
                                                                                <Link to={'/'}><span><AiFillInstagram /></span></Link>
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