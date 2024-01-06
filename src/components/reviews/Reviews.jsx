import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import { Pagination } from 'swiper/modules';



// import required modules
import { FreeMode, Navigation, Pagination } from 'swiper/modules';

import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

// import required modules

import { Link} from 'react-router-dom';



const Reviews = () => {
     

    const [reviews , setReviews]=useState([]);

    useEffect(()=>{
         fetch('http://localhost:5000/review')
      
        .then(res=>res.json())
        .then(data => setReviews(data))
    },[])

    console.log(reviews);
  
    return (
        <section className='my-12'>
             <div>
           
        </div>

             <section>
        <Swiper
         slidesPerView={3}
         spaceBetween={20}
         freeMode={true}
         pagination={{
           clickable: true,
         }}
         modules={[FreeMode, Pagination]}
         className="mySwiper"
      >
            {
                reviews.map(review => <SwiperSlide className=' bg-[#495737] h-[520px] p-2 pb-8'
                    key={review._id}
                >
                    <div className='flex flex-col justify-center items-center'>
                    <img src={review.photourl} alt=""  className='w-[140px] h-[140px] rounded-full mb-3'/>
                        <Rating
                            style={{ maxWidth: 100 }}
                            value={review.rating}
                            readOnly
                        />
                        <h3 className="pt-5 text-2xl text-orange-400">{review.name}</h3>
                        <p className="pt-1 pb-3 w-[300px] text-white text-center">{review.review}</p>
                    </div>
                </SwiperSlide>)
            }
                
     
     
             
              
      </Swiper>
            </section>
            <section>
                <div className='flex justify-center my-10'>
                <Link to={'/addReview'}> <button className='btn bg-[#E1AF55] text-white'>Add Review</button> </Link>   
                </div>
            </section>
        </section>
       
    );
};

export default Reviews;