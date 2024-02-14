import gsap from 'gsap'
import { useContext, useEffect, useRef,} from "react";
import { sidebarContext } from "./navcontext";
import logo from '../../../assets/logo.png'
import { Link, NavLink,   useLocation} from 'react-router-dom';
import { CgClose } from 'react-icons/cg';
import { BsEnvelope } from "react-icons/bs"
import { IoMdCall } from "react-icons/io"

const Sidebar = () => {
  const [sidebarStatus,setSidebarStatus] = useContext(sidebarContext)
  const sidebarRef = useRef();
  const { pathname } = useLocation();
  const realpath = pathname.slice(1,8)


  useEffect(() =>{
          if(sidebarStatus){
                sidebarRef.current.classList.add('active');
                const tl = gsap.timeline();

                tl.to(sidebarRef.current.querySelector('.sidebar-overlay'), {
                        y: 0,
                        duration: 1
                })
                tl.to(sidebarRef.current.querySelector('.sidebar-content'), {
                       x: 0,
                       duration: 1
                })
          }

          if(!sidebarStatus){
               const tl2 = gsap.timeline();
               tl2.to(sidebarRef.current.querySelector('.sidebar-content'), {
                       x: '-100%',
                       duration: 1
               })
               tl2.to(sidebarRef.current.querySelector('.sidebar-overlay'), {
                     y: '-100%',
                     duration: 1
               })
               setTimeout(() => {
                      sidebarRef.current.classList.remove("active")
               }, 2000)
          }
  }, [sidebarStatus])

  const closeSidebar = () => setSidebarStatus(false);
  return (
    <div ref={sidebarRef} className="sidebar-section">
               <div className="sidebar-overlay"></div>
               <div className="sidebar-content">
                           <div className="sidebar-inner">
                                     <div className="sidebar-head">
                                              <Link to={'/'} className="logo">
                                                    <img src={logo} alt="" />
                                                   <div className="logo-texts">
                                                        <h2>EUNAT</h2>
                                                        <h4>International</h4>
                                                         <p>Limited</p>
                                                 </div>              
                                             </Link>
                                             <span onClick={closeSidebar} className="closebtn"><CgClose /></span>
                                     </div>
                                     <nav>
                                               <ul>
                                                          <li><NavLink to={'/'}>Home</NavLink></li>
                                                          <li><NavLink to={'/about-us/'}>About</NavLink></li>
                                                          <li><NavLink to={'/services/'} className={realpath == 'service' ? 'active' : ''}>Services</NavLink></li>
                                                          <li><NavLink to={'/contact-us/'}>Contact Us</NavLink></li>
                                               </ul>
                                     </nav>

                                     <div className="sidebar-details">
                                               <h4>Email Us</h4>
                                               <div className="details-box">
                                                       <span><BsEnvelope /></span>
                                                       <p>support@eunat.com</p>
                                               </div>
                                               <h4>Call Us</h4>
                                               <div className="details-box">
                                                        <span><IoMdCall /></span>
                                                        <p>+(254) 7170 00216</p>
                                               </div>

                                               <Link to={'/'}>Get A Quote</Link>
                                     </div>
                           </div>
               </div>
    </div>
  )
}

export default Sidebar