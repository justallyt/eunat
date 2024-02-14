/* eslint-disable react/prop-types */
import { FaRegDotCircle } from "react-icons/fa";

const SingleServiceBody = ({ data }) => {
  return (
    <div className="single-service-body">
                 <div className="inner-row">
                            <div className="service-body-content">
                                        <div className="intro">
                                                   <h3>About The Service</h3>
                                                   <p>{data.introDescription}</p>
                                        </div>
                                        { data.specificDescription ? 
                                               <div className="specific-description-part">
                                                          <h2>Our {data.title} Services</h2>
                                                          {data.specificDescription.map(item => 
                                                                <div className="simple-service-box" key={item.id}>
                                                                          <h4>{item.id}. {item.name}</h4>
                                                                          {item.description.map(kitu => <p key={kitu}><span><FaRegDotCircle /></span> {kitu}</p>)}
                                                                </div>
                                                            )}
                                               </div>
                                         : ''}

                                         { data.advantages ? 
                                                <div className="advantages-part">
                                                          <h2>Advantages of Our {data.title} Services</h2>
                                                          {data.advantages.map(item => 
                                                                 <div className="simple-service-box" key={item.id}>
                                                                            <h4>{item.id}. {item.name}</h4>
                                                                            {item.description.map(kitu => <p key={kitu}><span><FaRegDotCircle /></span>{kitu}</p>)}
                                                                 </div>
                                                           )}
                                                </div>
                                         : ''}

                                         {data.reasons ?
                                               <div className="reasons-part">
                                                      <h2>Why Choose Us for {data.title}</h2>
                                                       { data.reasons.map(item => 
                                                              <div className="simple-reason-box" key={item.id}>
                                                                       <h4>{item.name}</h4>
                                                                       <p>{item.description}</p>
                                                              </div>
                                                        )}
                                               </div>
                                          :
                                          ''
                                          }

                                          <p className="final">{data.finalDescription}</p>
                            </div>
                 </div>
    </div>
  )
}

export default SingleServiceBody