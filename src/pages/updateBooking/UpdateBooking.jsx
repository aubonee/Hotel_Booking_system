import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateBooking = () => {
    const updateBooking = useLoaderData();

    if (!updateBooking) {
        return <div>Loading...</div>;
    }
    const {_id, title, date, room_images, description, room_size, price_per_night, }= updateBooking;
    const first_image = room_images[0];
   
    const [selectedDate, setSelectedDate] = useState(null);
    console.log({title});

    const handleUpdateBooking = (event) => {
        event.preventDefault(event);
    
        console.log('Selected Date:', selectedDate);
    
        const date = selectedDate;
        const updatedbooking = { date }

        console.log(updatedbooking);

        // send data to the server
        fetch(`https://hotel-booking-server-side-eight.vercel.app/updateBooking/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedbooking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'booking date Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
      };
    return (
        <div className='flex  justify-center items-center'>
         <div className=''>
         <h2 className='font-bold my-5 text-2xl text-center text-green-900'>Update Booking of <span className='uppercase'>{title}</span> </h2>   
         

         <div className='font-semibold font-xl'>
         <div className='flex justify-center flex-col my-3 bg-base-100 shadow-xl p-5 max-w-[920px] '>

         <div className='flex gap-5'>
          <img className='max-w-full bg-gray-300' src={first_image} alt='rooms' />
          
        </div>


<div className='text-left mt-3'>
<h2 className="font-semibold font-xl"> <span className='text-green-900 font-bold'>Room Name :</span> {title}</h2>
<h2 className="font-semibold font-xl"> <span className='text-green-900 font-bold'>Room Description :</span> {description}</h2>
<h2 className="font-semibold font-xl"> <span className='text-green-900 font-bold'>Price per night :</span> {price_per_night}</h2>
<h2 className="font-semibold font-xl"> <span className='text-green-900 font-bold'>Room size :</span> {room_size}</h2>
</div>        
               <span className='text-green-900 font-bold'> Choose the Date:</span>
                 <DatePicker  required  className='border-2 w-full my-3 border-black p-3'  selected={selectedDate} onChange={(date) => setSelectedDate(date)}  dateFormat='dd/MM/yyyy'/>
     
                
               
                 <button type='submit' onClick={handleUpdateBooking} className='my-5btn p-3 bg-black text-white'> update</button>  
         </div>
      
        </div>
        </div>
        </div>
    );
};

export default UpdateBooking;