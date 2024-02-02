import AboutBody from "../components/about/AboutBody"
import HeroLanding from "../components/about/HeroLanding"
import Values from "../components/about/Values"
import "../css/about.css"
import Actionable from "../components/home/Actionable"
import Footer from "../components/common/Footer"


const About = () => {
  return (
    <>
            <HeroLanding />
            <AboutBody />
            <Values />
            <Actionable />
            <Footer />
    </>
  )
}

export default About