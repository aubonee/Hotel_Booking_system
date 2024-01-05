//import bgImage from '../../../assets/hotel_rooms_images/3.jpg'
import './Banner.css'
const Banner = () => {
    return (
        <div className="parallax hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/BjfvDPr/1.jpg)'}}>
            {/*  */}
            <div className="hero-overlay bg-opacity-60"></div>
      
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-4xl font-bold">Book your Stay and Enjoy a Luxary Exprience</h1>
            <p className="mb-5">"Book your room now, starting from BDT 2000 per night".</p>
            <button className="btn text-white bg-[#E1AF55] mx-2 border-none">Book A Room Now</button>
            <button className="btn text-white bg-[#E1AF55] mx-2 border-none">Contact Us Now!</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;