import logo1 from "../../assets/magnate.png"
import logo2 from "../../assets/transbusiness.png"
import logo3 from '../../assets/com21.png'
import logo4 from '../../assets/malkar.png'
import logo5 from '../../assets/brownstone.png'
import logo6 from '../../assets/moran.webp'
import logo7 from '../../assets/goodwill.webp'
const Partners = () => {
  return (
    <div className="partners-section">
                <div className="inner-row">
                            <div className="partners-section-content">
                                        <div className="intro">
                                                   <h3>Our Partners</h3>
                                                   <h1>Brands & Companies we&apos;ve worked with<span>.</span></h1>
                                                   <p>Throught collaborative partnerships combined with decades of experience providing supply chain solutions, we endeavor to implement all the processess to client satisfaction.</p>
                                        </div>
                                        <div className="partners-row">
                                                    <img src={logo1} alt="" />
                                                    <img src={logo2} alt="" />
                                                    <img src={logo3} alt="" />
                                                    <img src={logo4} alt="" />
                                                    <img src={logo5} alt="" />
                                                    <img src={logo6} alt="" />
                                                    <img src={logo7} alt="" />
                                        </div>
                            </div>
                </div>
    </div>
  )
}

export default Partners