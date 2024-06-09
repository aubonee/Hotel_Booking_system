import React from 'react';
import Title from '../../../shared/title/Title.jsx';

const Location = () => {
    return (
        <div className='mt-20 mb-10'>
             
       
              <div className="mt-10 mb-10  ">
              <Title heading="Where to Find Us" subheading="Discover us in a Prime Location. The Perfect Spot for Your Next Stay"></Title>
               <div className='min-h-[70vh]'><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14610.27308423812!2d90.38425380000001!3d23.72710665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1705584403245!5m2!1sen!2sbd" className="w-full h-[70vh] rounded" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div> 
            </div>
        </div>
    );
};

export default Location;