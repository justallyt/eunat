import { values } from "../../data/values"

const Values = () => {
  return (
    <div className="values-section">
              <div className="inner-row">
                          <div className="values-section-content">
                                      <div className="values-intro">
                                                <h3>Our Values</h3>
                                                <h1>The Values that Drive Everything We Do</h1>
                                      </div>
                                      <div className="values-row">
                                                { values.map(item => 
                                                      <div className="value-moja" key={item.id}>
                                                                  <img src={item.image} alt="" />
                                                                  <h3>{item.title}</h3>
                                                                  <p>{item.description}</p>
                                                        </div>
                                                  )}
                                      </div>
                          </div>
              </div>
    </div>
  )
}

export default Values