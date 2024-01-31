import warehouse from '../../assets/warehouse.png'
import delivery from "../../assets/delivery.png"
import payments from "../../assets/payments.png"
import support from "../../assets/support.png"
import pricing from "../../assets/pricing.png"
import update from '../../assets/updates.png'
import Quotation from './Quotation'

const Reasons = () => {
  return (
    <div className='reasons-section'>
                 <div className="inner-row">
                           <div className="reasons-section-content">
                                      <div className="reasons-intro">
                                                 <h3>Why Choose Us</h3>
                                                 <h1>Global Logistics Partner To World&apos;s Famous Brands For Over 30 Years</h1>
                                      </div>

                                      <div className="reasons-row">
                                               <div className="reason-moja">
                                                          <div className="reason-icon">
                                                                    <img src={warehouse} alt="" />
                                                          </div>
                                                          <div className="reasons-texts">
                                                                     <h3>Warehouse Storage</h3>
                                                                      <p>Depending on your product, needs and requirements, we provide professional warehouse activities.</p>
                                                          </div>
                                               </div>
                                               <div className="reason-moja">
                                                          <div className="reason-icon">
                                                                    <img src={pricing} alt="" />
                                                          </div>
                                                          <div className="reasons-texts">
                                                                     <h3>Transparent Pricing</h3>
                                                                      <p>No hidden fees, just honest upfront pricing for a smooth and stress-free shipping experience.</p>
                                                          </div>
                                               </div>
                                               <div className="reason-moja">
                                                          <div className="reason-icon">
                                                                    <img src={payments} alt="" />
                                                          </div>
                                                          <div className="reasons-texts">
                                                                     <h3>Easy Payment Methods</h3>
                                                                      <p>You can make use the easy convenient payment options, listed, that are available in your country.</p>
                                                          </div>
                                               </div>
                                               <div className="reason-moja">
                                                          <div className="reason-icon">
                                                                    <img src={support} alt="" />
                                                          </div>
                                                          <div className="reasons-texts">
                                                                     <h3>24/7 Hours Support</h3>
                                                                      <p>We enhance our logistics operations by relieving you of the worries associated with freight forwarding.</p>
                                                          </div>
                                               </div>
                                               <div className="reason-moja">
                                                          <div className="reason-icon">
                                                                    <img src={delivery} alt="" />
                                                          </div>
                                                          <div className="reasons-texts">
                                                                     <h3>Fast & Efficient Delivery</h3>
                                                                      <p>Ditch the waiting game - get your packages fast with our efficient delivery, ensuring they arrive swiftly and safely at your doorstep</p>
                                                          </div>
                                               </div>
                                               <div className="reason-moja">
                                                          <div className="reason-icon">
                                                                    <img src={update} alt="" />
                                                          </div>
                                                          <div className="reasons-texts">
                                                                     <h3>Reliable Shipping Updates</h3>
                                                                      <p>Upon request, we let you know where your package has reached so far in the shipping journey.</p>
                                                          </div>
                                               </div>
                                      </div>

                                      <Quotation />
                           </div>
                 </div>
    </div>
  )
}

export default Reasons