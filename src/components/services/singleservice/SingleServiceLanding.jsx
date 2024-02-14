/* eslint-disable react/prop-types */
import Navbar from "../../common/navigation/Navbar"

const SingleServiceLanding = ({ data }) => {
  return (
    <div className="single-service-landing">
                <Navbar />
                <div className="service-image">
                         <img src={data.image} alt="" />
                </div>
                <div className="overlay"></div>
                <div className="service-landing-texts">
                          <div className="inner-row">
                                    <div className="texts-content">
                                            <h1>{data.title}</h1>
                                            <h2>{data.introText}</h2>
                                    </div>
                          </div>
                </div>
    </div>
  )
}

export default SingleServiceLanding