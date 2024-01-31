import { RiDoubleQuotesR } from "react-icons/ri";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Pagination } from "swiper/modules"
import { testimonials } from "../../data/testimonials";
import Partners from "./Partners";
const Testimonials = () => {
  return (
    <div className="testimonials-section">
              <div className="inner-row">
                           <div className="testimonial-section-content">
                                     <h1>What Our Clients Say</h1>

                                     <div className="testimonial-slide-container">
                                         <Swiper
                                                 spaceBetween={30}
                                                 slidesPerView={1}
                                                 loop={true}
                                                 autoplay={{
                                                           delay: 3000,
                                                           disableOnInteraction: false
                                                    }}
                                                 pagination={{ clickable: true}}
                                                 modules={[Autoplay, Pagination]}
                                                 breakpoints={{
                                                  768: {
                                                         slidesPerView: 2
                                                      }
                                                 }}
                                              >
                                                     { testimonials.map(item => 
                                                             <SwiperSlide key={item.id}>
                                                                    <div className="testimonial-moja" data-aos='zoom-in-up'>
                                                                              <span><RiDoubleQuotesR /></span>
                                                                              <p className='content'>{item.content}</p>

                                                                              <div className="profile">
                                                                                        <h3>{item.name},</h3>
                                                                                       <p>{item.position}</p>
                                                                              </div>
                                                                   </div>
                                                         </SwiperSlide>
                                                      )}
                                           </Swiper>  
                                     </div>
                           </div>

                           <Partners />
              </div>
    </div>
  )
}

export default Testimonials