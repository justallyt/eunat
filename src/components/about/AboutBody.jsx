import aboutImage from "../../assets/aboutBodyImage.jpg"
const AboutBody = () => {
  return (
    <div className="about-body-section">
              <div className="inner-row">
                          <div className="about-body-section-content">
                                      <div className="numbers">
                                                   <div className="number-moja">
                                                                <h1>4.578M</h1>
                                                                <h3>Tonnes of Goods Shipped</h3>
                                                   </div>
                                                  <div className="number-moja">
                                                             <h1>180<span>+</span></h1>
                                                             <h3>Total Warehouses</h3>
                                                  </div>
                                                  <div className="number-moja">
                                                             <h1>50<span>+</span></h1>
                                                             <h3>Total Countries</h3>
                                                  </div>
                                                  <div className="number-moja">
                                                             <h1>75<span>+</span></h1>
                                                             <h3>Total Vehicles</h3>
                                                  </div>
                                      </div>

                                      <div className="about-body-texts">
                                                  <h1>We are Leading Experts in Global Transport</h1>
                                                  <div className="about-body-texts-row">
                                                                   <div className="about-body-texts-column">
                                                                            <p>Introducing euNAT International Limited, a dynamic player in the cargo and shipping industry. With a robust foundation built on 30 years of seasoned expertise, we specialize in proficient clearing and forwarding services. Our commitment to seamless logistics and unparalleled customer satisfaction sets us apart in this evolving market. Trust euNAT for reliable, efficient, and innovative solutions that propel your cargo journey forward.</p>
                                                                            <p>Beyond logistics, EuNAT is also a prominent exporter of high-quality coffee and tea, bringing the rich flavors of these beverages to markets around the world. Their commitment to excellence extends from the smooth movement of goods to delivering unparalleled taste experiences.</p>

                                                                            <div className="statements-row">
                                                                                         <div className="statement-moja">
                                                                                                 <h3>Mission</h3>
                                                                                                 <p>Our mission is to provide unparalleled shipping, clearing, and forwarding solutions, international trade by seamlessly connecting businesses to global markets. With a commitment to efficiency, transparency, and customer satisfaction, we strive to optimize logistics, simplify clearance processes, and deliver reliable services that enable our clients to navigate the complexities of international commerce with ease.</p>
                                                                                         </div>
                                                                                         <div className="statement-moja">
                                                                                                       <h3>Vision</h3>
                                                                                                       <p>euNAT envisions becoming a global leader in cargo shipping, setting the standard for excellence in clearing and forwarding services. We strive to seamlessly connect businesses and markets, fostering efficient trade by leveraging cutting-edge technology and a commitment to environmental sustainability. Our vision is to be the preferred choice for clients, providing reliable, innovative, and cost-effective solutions that drive economic growth and strengthen international partnerships.</p>
                                                                                         </div>
                                                                            </div>
                                                                   </div>
                                                                   <div className="about-body-texts-column">
                                                                             <img src={aboutImage} alt="" />
                                                                   </div>
                                                  </div>
                                      </div>
                          </div>
              </div>
    </div>
  )
}

export default AboutBody