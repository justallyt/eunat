import { Link } from "react-router-dom";
import quote from "../../assets/quote-request.png"
import { RiArrowRightFill } from "react-icons/ri";
//import { MdAddIcCall } from "react-icons/md";

const Quotation = () => {
  return (
    <div className="quotation-section">
             <div className="quotation-handle">
                        <img src={quote} alt="" />
                        <h3>Request A Quote</h3>
             </div>
             <div className="quotation-body">
                        <div className="quotation-form">
                                    <form>
                                               <label htmlFor="personal">Personal Data</label>
                                               <div className="quotation-form-row">
                                                         <div className="form-row-column">
                                                                   <input type="text" className="form-input" placeholder="Name"  />
                                                         </div>
                                                         <div className="form-row-column">
                                                                   <input type="email" className="form-input" placeholder="Email"  />
                                                         </div>
                                                         <div className="form-row-column">
                                                                   <input type="phone" className="form-input" pattern="+[0,9]" placeholder="Phone"  />
                                                         </div>
                                               </div>
                                               <label htmlFor="Shipping data">Shipment Data</label>
                                               <div className="quotation-form-row">
                                                         <div className="form-row-column">
                                                                   <select className="form-input">
                                                                              <option value="">Freight Type</option>
                                                                              <option value="Air Freight">Air Freight</option>
                                                                              <option value="Sea Freight">Sea Freight</option>
                                                                              <option value="Road Freight">Road Freight</option>
                                                                   </select>
                                                         </div>
                                                         <div className="form-row-column">
                                                                   <input type="text" className="form-input" placeholder="City of Departure"  />
                                                         </div>
                                                         <div className="form-row-column">
                                                                   <input type="text" className="form-input"  placeholder="Delivery City"  />
                                                         </div>
                                                         <div className="form-row-column">
                                                                   <input type="text" className="form-input" placeholder="Weight"  />
                                                         </div>
                                                         <div className="form-row-column">
                                                                   <input type="text" className="form-input"  placeholder="Height x Width x Length"  />
                                                         </div>
                                               </div>
                                               <div className="quotation-form-row-checkboxes">
                                                           <div className="checkbox-row">
                                                                        <input type="checkbox"  />
                                                                        <p>Fragile</p>
                                                           </div>
                                                           <div className="checkbox-row">
                                                                        <input type="checkbox"  />
                                                                        <p>Express Delivery</p>
                                                           </div>
                                                           <div className="checkbox-row">
                                                                        <input type="checkbox"  />
                                                                        <p>Insurance</p>
                                                           </div>
                                                           <div className="checkbox-row">
                                                                        <input type="checkbox"  />
                                                                        <p>Packaging</p>
                                                           </div>
                                               </div>

                                                <div className="form-btn">
                                                            <button type="submit">Submit Request  <span><RiArrowRightFill /></span></button>
                                                </div>
                                    </form>
                        </div>
                        <div className="quotation-action">
                                     <h3>Safe And Reliable Shipping Solutions!</h3>
                                     <p>We pride ourselves in providing the best transport & shipping services available all over the world.</p>

                                     <Link to={'/'}>Contact Us <span><RiArrowRightFill /></span></Link>
                        </div>
             </div>
    </div>
  )
}

export default Quotation