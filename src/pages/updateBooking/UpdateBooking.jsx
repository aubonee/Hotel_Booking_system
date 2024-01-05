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
    const {_id, title, date, room_images, description, room_size}= updateBooking;
    const [selectedDate, setSelectedDate] = useState(null);
    console.log({title});

    const handleUpdateBooking = (event) => {
        event.preventDefault(event);
    
        console.log('Selected Date:', selectedDate);
    
        const date = selectedDate;
        const updatedbooking = { date }

        console.log(updatedbooking);

        // send data to the server
        fetch(`http://localhost:5000/updateBooking/${_id}`, {
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
        <div>
         <h2>update booking:{title}</h2>   
         <form action="">

         <div className='font-semibold font-xl'>
               
               <span className='text-green-900 font-bold'> Choose the Date:</span>
                 <DatePicker  required  className='border-2 border-black'  selected={selectedDate} onChange={(date) => setSelectedDate(date)}  dateFormat='dd/MM/yyyy'/>
     
                 </div>   
                 <button type='submit' onClick={handleUpdateBooking} className='btn bg-black text-white'> update</button>  
         </form>
        </div>
    );
};

export default UpdateBooking;