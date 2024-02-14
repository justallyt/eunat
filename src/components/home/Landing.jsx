import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import 'swiper/css/navigation';
import { Autoplay,EffectFade } from "swiper/modules";
import { Link } from 'react-router-dom'
import Navbar from '../common/navigation/Navbar'
import { useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const Landing = () => {
  const slides = ["one", "two", "three"]
  const [swiperRef, setSwiperRef] = useState(null);

  const prevHandler = () => swiperRef.slidePrev();
  const nextHandler = () => swiperRef.slideNext();

  return (
    <div id='landing'>
                 <Navbar />
                <div className="hero-slides">
                              <div className="hero-slides-container">
                                       <Swiper
                                                   slidesPerView={1}
                                                   loop={true}
                                                   effect={'fade'}
                                                   speed={1000}
                                                   autoplay= {{
                                                           delay: 6500,
                                                           disableOnInteraction: false
                                                    }}
                                                  onSwiper={(swiper) => setSwiperRef(swiper) }
                                                 modules={[Autoplay, EffectFade]}
                                         >
                                            { slides.map(item => 
                                                 <SwiperSlide key={item}>
                                                            {({isActive}) => (
                                                              <div className={`slide-moja ${item}`}>
                                                                        <div className="inner-row">
                                                                                 <div className="hero-section-content">
                                                                                           <div className={ isActive ? "hero-texts active" : "hero-texts"}>
                                                                                                   <h1 className={isActive ? 'active' : ''}>We&apos;re a Global Cargo & Shipping Provider<span>.</span></h1>
                                                                                                   <p className={isActive ? 'active' : ''}>We specialize in proficient clearing and forwarding services with a commitment to seamless logistics and unparalleled customer satisfaction which sets us apart in the evolving market.</p>
                         
                                                                                                   <div  className={isActive ? 'hero-btns active' : 'hero-btns'}>
                                                                                                               <Link to={'/'}>Get A Quote</Link>
                                                                                                               <Link to={'/services/'}>Our Services</Link>
                                                                                                   </div>
                                                                                           </div>
                                                                              </div>
                                                                        </div>

                                                                        <div className="slider-click-btns">
                                                                                   <div className="click-btn" onClick={prevHandler}>
                                                                                              <span><BsArrowLeft /></span>
                                                                                   </div>
                                                                                   <div className="click-btn" onClick={nextHandler}>
                                                                                               <span><BsArrowRight /></span>
                                                                                   </div>
                                                                        </div>
                                                              </div>


                                                         )}
                                           </SwiperSlide>
                                               )}
                                   </Swiper>
                              </div>
                </div>
    </div>
  )
}

export default Landing