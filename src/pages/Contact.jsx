import ContactBody from "../components/contact/ContactBody"
import ContactLanding from "../components/contact/ContactLanding"
import "../css/contact.css"
import Footer from "../components/common/Footer"

const Contact = () => {
  return (
    <>
          <ContactLanding />
          <ContactBody />
          <Footer />
    </>
  )
}

export default Contact