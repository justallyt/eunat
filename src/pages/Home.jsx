import "../css/home.css"
import Landing from "../components/home/Landing"
import AboutSection from "../components/home/AboutSection"
import ServicesSection from "../components/home/ServicesSection"
import Reasons from "../components/home/Reasons"
import Testimonials from "../components/home/Testimonials"
import Actionable from "../components/home/Actionable"
import Footer from "../components/common/Footer"
const Home = () => {
  return (
    <>
          <Landing /> 
          <AboutSection />
          <ServicesSection />
          <Reasons />
          <Testimonials />
          <Actionable />
          <Footer />
    </>
  )
}

export default Home