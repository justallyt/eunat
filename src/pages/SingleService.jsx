import SingleServiceLanding from "../components/services/singleservice/SingleServiceLanding"
import { useParams }  from "react-router-dom"
import { services } from "../data/services";
import SingleServiceBody from "../components/services/singleservice/SingleServiceBody";
import Footer from '../components/common/Footer'
import Actionable from "../components/home/Actionable";

const SingleService = () => {
    const { name } = useParams();
    const service = services.find(item => item.url_param === name);
    
  return (
    <>
           <SingleServiceLanding data={service} />
           <SingleServiceBody data={service} />
           <Actionable />
           <Footer />
    </>
  )
}

export default SingleService