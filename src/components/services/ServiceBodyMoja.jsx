/* eslint-disable react/prop-types */
import { useState } from "react";
import { GoChevronDown } from "react-icons/go";
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";
const ServiceBodyMoja = ({ data }) => {
    const [status, setStatus] = useState(false);

    const openService = () => setStatus(!status )
  return (
    <div className="service-body-moja">
                  <div className={status ? "service-body-header active"  : "service-body-header" } onClick={openService}>
                             <h3>{data.title}</h3>
                             <span><GoChevronDown /></span>
                  </div>
                  <div className={ status ? "service-body-answer active" : "service-body-answer"}>
                             <div className="body-answer-inner">
                                       <p>{data.introDescription}</p>
                                       <Link to={data.link}>Explore More <span><GoArrowUpRight /></span></Link>
                             </div>
                  </div>
    </div>
  )
}

export default ServiceBodyMoja