import { Link } from "react-router-dom"
import forklift from '../../assets/forklift.png'
const Actionable = () => {
  return (
    <div className="actionable-section">
                 <div className="inner-row">
                          <div className="actionable-section-content">
                                     <img src={forklift} alt="" className="forklift"/>
                                      <h1>Got Any Question? Get In Touch Today</h1>
                                      <Link to={'/contact-us/'}>Let&apos;s Talk</Link>
                          </div>
                 </div>
    </div>
  )
}

export default Actionable