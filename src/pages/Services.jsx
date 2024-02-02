import ServicesBody from "../components/services/ServicesBody"
import ServicesLanding from "../components/services/ServicesLanding"
import "../css/services.css"
import Reasons from "../components/home/Reasons"
import Footer from "../components/common/Footer"
import Actionable from "../components/home/Actionable"
const Services = () => {
  return (
    <>
            <ServicesLanding />
            <ServicesBody />
            <Reasons />
            <div className="extra-padding">
                     <Actionable />
            </div>
            <Footer />
    </>
  )
}

export default Services