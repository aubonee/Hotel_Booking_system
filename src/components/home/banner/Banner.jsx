//import bgImage from '../../../assets/hotel_rooms_images/3.jpg'
import './Banner.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import '../../../App.css'
import 'swiper/css';



import { Autoplay, Pagination, Navigation ,Mousewheel, Keyboard} from 'swiper/modules';
const Banner = () => {
  useGSAP(()=>{
    gsap.from(".gsapAni",{
        y: -100,
        x:0,
        duration:2,
        delay:1,
    })
  })
    return (
      
       <div className='font-jost'>
        <div>
            <Swiper
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      mousewheel={true}
      keyboard={true}
      modules={[Autoplay, Pagination, Navigation,Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className="parallax hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/BjfvDPr/1.jpg)'}}>
            {/*  */}
            
            <div className="hero-overlay bg-opacity-40"></div>
      
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-5 uppercase text-4xl font-bold font-marcellus">WelCome to the Nomad Nest</h1>
            <p className="mb-5 font-jost">Book your Stay and Enjoy a Luxary Exprience. <br />Book your room now, starting from BDT 2000 per night.</p>
            <button className="btn text-white bg-yellow-500  hover:bg-[#E1AF55] mx-2 border-none mb-2 rounded-none">Book Room</button>
            <button className="btn text-white bg-yellow-500  hover:bg-[#E1AF55] mx-2 border-none mb-2 rounded-none ">Contact Us</button>
          </div>
        </div>
      </div>
        </SwiperSlide>
        <SwiperSlide>
          
        <div className="parallax hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/xSTLnf8/banner2.jpg)'}}>
            {/*  */}
            
            <div className="hero-overlay bg-opacity-60"></div>
      
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-5 uppercase text-4xl font-bold font-marcellus">WelCome to the Nomad Nest</h1>
            <p className="mb-5 font-jost">Book your Stay and Enjoy a Luxary Exprience.  Book your room now, starting from BDT 2000 per night.</p>
            <button className="btn text-white bg-yellow-500  hover:bg-[#E1AF55] mx-2 border-none mb-2 rounded-none">Book Room</button>
            <button className="btn text-white bg-yellow-500  hover:bg-[#E1AF55] mx-2 border-none mb-2 rounded-none ">Contact Us</button>
        
          </div>
        </div>
      </div>
        </SwiperSlide>
        {/* <SwiperSlide>Slide 3</SwiperSlide> */}
       
        <SwiperSlide>
        <div className="parallax hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/87D9kkN/img-74-3.jpg)'}}>
            {/*  */}
            
            <div className="hero-overlay bg-opacity-40"></div>
      
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-5 uppercase text-4xl font-bold font-marcellus">WelCome to the Nomad Nest</h1>
            <p className="mb-5 font-jost">Book your Stay and Enjoy a Luxary Exprience. <br />Book your room now, starting from BDT 2000 per night.</p>
            <button className="btn text-white bg-yellow-500  hover:bg-[#E1AF55] mx-2 border-none mb-2 rounded-none">Book Room</button>
            <button className="btn text-white bg-yellow-500  hover:bg-[#E1AF55] mx-2 border-none mb-2 rounded-none ">Contact Us</button>
        
          </div>
        </div>
      </div>
        </SwiperSlide>

      </Swiper>
            </div>
         {/* <div className="parallax hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/BjfvDPr/1.jpg)'}}>
           
            
            <div className="hero-overlay bg-opacity-60"></div>
      
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-4xl font-bold">Book your Stay and Enjoy a Luxary Exprience</h1>
            <p className="mb-5">"Book your room now, starting from BDT 2000 per night".</p>
            <button className="btn text-white bg-[#E1AF55] mx-2 border-none">Book A Room Now</button>
            <button className="btn text-white bg-[#E1AF55] mx-2 border-none">Contact Us Now!</button>
          </div>
        </div>
      </div> */}
       </div>
    );
};

export default Banner;