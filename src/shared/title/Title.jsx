import React from 'react';
import '../../App.css'
const Title = ({heading, subheading}) => {
    return (
     <div className=' text-center my-5'>
           <h1
             className='font-marcellus text-black font-bold text-5xl pb-2 '>{heading} 
        </h1>
        <p className='font-jost text-xl pb-2'>{subheading}</p>
     </div>

    );
};

export default Title;