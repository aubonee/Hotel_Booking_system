import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import { Pagination } from 'swiper/modules';



// import required modules
import { FreeMode,  Pagination } from 'swiper/modules';

import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

// import required modules

import { Link} from 'react-router-dom';
import Title from '../../shared/title/Title';



const Reviews = () => {
     

    const [reviews , setReviews]=useState([]);
    const [slidesperView, setSlidesperView] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      
      if (window.innerWidth >= 1024) {
        setSlidesperView(3); 
      } else if (window.innerWidth >= 768) {
        setSlidesperView(2); 
      } else {
        setSlidesperView(1); 
      }
    };

    // Initial setup
    handleResize();

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

    useEffect(()=>{
         fetch('https://hotel-booking-server-side-eight.vercel.app/review')
      
        .then(res=>res.json())
        .then(data => setReviews(data))
    },[])

    console.log(reviews);
  
    return (
        <section className='mt-20 mb-10'>
            <Title heading="Guest Feedback" subheading="See Why Our Customers Love Us"></Title>
             
             <section>
        <Swiper 
        // lg:slidesPerView={3}
        // slidesPerView={1}
        // md:slidesPerView={2}
         
        //  spaceBetween={20}
        // lg:spaceBetween={15}
        slidesPerView={slidesperView}
        spaceBetween={18}
         freeMode={true}
         pagination={{
           clickable: true,
         }}
         modules={[FreeMode, Pagination]}
         className="mySwiper px-2"
      >
            {
                reviews.map(review => <SwiperSlide className='  bg-base-200 text-[#495737] min-h-[480px]  p-2 pb-8'
                    key={review._id}
                >
                    <div className='flex flex-col justify-center items-center my-6 mx-3'>
                    <img src={review.photourl} alt=""  className='w-[140px] h-[140px] rounded-full mb-3'/>
                        <Rating
                            style={{ maxWidth: 100 }}
                            value={review.rating}
                            readOnly
                        />
                        <h3 className="pt-5 text-2xl ">{review.name}</h3>
                        <p className="pt-5 pb-3 min-w-[300px] text-gray-700 text-center">{review.review}</p>
                    </div>
                </SwiperSlide>)
            }
                
     
     
             
              
      </Swiper>
            </section>
            <section>
                <div className='flex justify-center my-10'>
                <Link to={'/addReview'}> <button className='btn bg-yellow-500 hover:bg-[#E1AF55] text-white rounded-none'>Add Review</button> </Link>   
                </div>
            </section>
        </section>
       
    );
};

export default Reviews;