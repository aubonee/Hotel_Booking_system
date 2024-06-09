import React from 'react';
import Title from '../../../shared/title/Title';
import img1 from '../../../assets/images/pickup.png';
import img2 from '../../../assets/images/food-tray.png';
import img3 from '../../../assets/images/customer-service.png';
import img4 from '../../../assets/images/wifi.png';
import img5 from '../../../assets/images/washing-machine.png';
import img6 from '../../../assets/images/swimming-pool.png';
import '../../../App.css';



const Services = () => {
  const service = [
    {
      image: img1,
      heading: "Pickup Service",
      subheading: "Convenient pickup service for all your needs."
    },
    {
      image: img2,
      heading: "Buffet Breakfast",
      subheading: "Delicious meals and a complimentary breakfast buffet. "
    },
    {
      image: img3,
      heading: "Customer Service",
      subheading: "24/7 customer support for your convenience."
    },
    {
      image: img4,
      heading: "Free WiFi",
      subheading: "Stay connected with our high-speed WiFi."
    },
    {
      image: img5,
      heading: "Laundry Service",
      subheading: "Efficient laundry services to keep your clothes fresh."
    },
    {
      image: img6,
      heading: "Swimming Pool",
      subheading: "Relax and enjoy our state-of-the-art swimming pool."
    }
  ];
    return (
        <div className='w-full my-20'>
          <Title heading="Discover Our Services" subheading="All the Essentials for a Cozy and Comfortable Stay"></Title>
          <div className='pt-10'>
        <div className="mx-auto w-11/12 lg:w-5/6">
        <div>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  border border-black">
             {service.map((item,index)=>(
               <div key={index} className='border border-black px-6 py-16 flex flex-col justify-center items-center '>
               <div className=''><img src={item.image}  alt=""  className='w-[60px]'/></div>  
                 <h1 className='font-marcellus text-xl text-center text-[#495737] my-1 font-bold'>{item.heading}</h1>
                 <p className='font-jost text-center'>{item.subheading}</p>
               </div>
             ))}
             </div>


             {/* ......................table........................ */}


           
           </div></div>
          </div>
          <div></div>
        </div>
    );
};

export default Services;