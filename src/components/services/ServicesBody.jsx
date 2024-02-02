import serviceBody from "../../assets/servicesBody.jpg"
import { services } from "../../data/services"
import ServiceBodyMoja from "./ServiceBodyMoja"
const ServicesBody = () => {
  return (
    <div className="services-body-section">
              <div className="inner-row">
                        <div className="services-body-intro">
                                     <h4>Whatever your transportation needs, you can rest assured that we will ensure timely delivery together with our competent partners, while you focus on your core business.</h4>
                        </div>

                        <div className="services-body-content">
                                       <div className="services-body-image">
                                                  <img src={serviceBody} alt="" />
                                       </div>

                                       <div className="services-body-texts">
                                                  { services.map(item => 
                                                             <ServiceBodyMoja key={item.id} data={item}  />
                                                    )}

                                       </div>

                                       <h3 className="extra-text">Beyond logistics, EuNAT is also a prominent exporter of high-quality coffee and
tea, bringing the rich flavors of these beverages to markets around the world.
Their commitment to excellence extends from the smooth movement of goods to
delivering unparalleled taste experiences.</h3>
                        </div>
              </div>
    </div>
  )
}

export default ServicesBody