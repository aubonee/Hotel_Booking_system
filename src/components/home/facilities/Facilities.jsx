import React from 'react';
import icon from '../../../assets/images/facility-logo.png'
import banner from '../../../assets/images/facility-banner.webp'
import img1 from '../../../assets/images/pool.jpg'
import img2 from '../../../assets/images/spa.jpg'
import img3 from '../../../assets/images/dine.jpg'
import './Facilities.css'

const Facilities = () => {
    return (
        <div className='mt-10 mb-4'>
            <div> </div>
            <div className='bg-blend-darken w-full h-[80vh] lg:h-[60vh] bg-opacity-50' style={{backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${banner})`, backgroundSize: 'cover',  backgroundRepeat: 'no-repeat'}}>
                <div>
                  <div className="flex items-center justify-center py-10" ><img src={icon} alt="" className='w-[40px]' /></div>         </div>
               <h2 className='my-1  font-marcellus text-4xl text-white' >One of the World's Most <br />Desirable Locations</h2>
            <p className='my-1  font-jost text-4xl text-white'>Providing Exceptional Amenities for a Memorable Stay, Ensuring You Enjoy Every Moment of Your Visit</p>
            </div >
            <div className=' min-h-[100vh] w-4/5 mx-auto  relative -top-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-x-10 gap-y-4'>
                <div className="flex flex-col items-center justify-center" >
                    {/* <img src={img1} alt="" className='h-[450px]' /> */}
                    <div className='imageBox w-full h-[460px]  ' style={{backgroundImage: `url(${img2})`,  backgroundSize: 'cover', backgroundPosition: 'center',  backgroundRepeat: 'no-repeat'}}>
                        <div className=' imageFrame w-full h-full mx-auto border-2 -translate-x-3 translate-y-3 hover:translate-x-3  hover:-translate-y-3  border-[#EAB308]  transition duration-300 ease-in-out'> 
                       </div>
                    </div>
                    <h2 className='mb-2 mt-5 text-lg font-marcellus text-[#495737]'> Spa and Wellness</h2>
                    <p className='font-jost my-1'> Relax and rejuvenate with our world-class spa treatments and wellness programs. Pamper yourself with personalized care and holistic therapies.</p>
                </div>
                <div className="flex flex-col items-center justify-center pt-24" >
                    {/* <img src={img1} alt="" className='h-[460px]' /> */}
                    <div className='imageBox w-full h-[460px]  ' style={{backgroundImage: `url(${img1})`,  backgroundSize: 'cover', backgroundPosition: 'center',  backgroundRepeat: 'no-repeat'}}>
                        <div className=' imageFrame w-full h-full mx-auto border-2 -translate-x-3 translate-y-3 hover:translate-x-3  hover:-translate-y-3  border-[#EAB308]  transition duration-300 ease-in-out'> 
                       </div>
                    </div>
                    <h2 className='mb-2 mt-5  font-marcellus text-[#495737]'> Pool Activities</h2>
                    <p className='font-jost my-1'> Dive into fun with our exciting pool activities for all ages.
                         Molestias dolores sunt dolorem qui. Voluptas quam, assumenda maxime nisi enim debitis!</p>
                </div>
                <div className="flex flex-col items-center justify-center" >
                    {/* <img src={img1} alt="" className='h-[450px]' /> */}
                    <div className='imageBox w-full h-[450px]   ' style={{backgroundImage: `url(${img3})`,  backgroundSize: 'cover', backgroundPosition: 'center',  backgroundRepeat: 'no-repeat'}}>
                        <div className=' imageFrame w-full h-full mx-auto border-2 -translate-x-3 translate-y-3 hover:translate-x-3  hover:-translate-y-3  border-[#EAB308]  transition duration-300 ease-in-out'> 
                       </div>
                    </div>
                    <h2 className='mb-2 mt-5  font-marcellus text-[#495737]'> Fine Dining</h2>
                    <p className='font-jost my-1'> Savor exquisite cuisines at our on-site restaurants and cafes. Experience gourmet meals crafted by top chefs. Enjoy a variety of cuisines in a luxurious setting</p>
                </div>
             </div>
        </div>
    );
};

export default Facilities;