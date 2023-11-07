import React, { useContext, useEffect, useState } from 'react';
import BookingCard from './BookingCard';
import { AuthContext } from '../../providers/AuthProvider';

const MyBookings = () => {
    const [booking, setBooking]=useState([])
    const {user} =useContext(AuthContext)
    useEffect(()=>
    {
        fetch(`http://localhost:5000/bookings/${user?.email}`).then(res=>res.json())
        .then(data=>setBooking(data))
    },[user])

         console.log(booking);
    return (
        <div className='min-h-[60vh]'>
          <div  className='flex-flex-col justify-center items-center'>

          {booking.length !== 0 ? (
      
      
     
      booking.map(detail =><BookingCard booking={booking} setBooking={setBooking} key={detail._id} detail={detail}></BookingCard>))
      : <div className='flex justify-center items-center'>  <h2 className=' text-5xl font-extra-bold mt-10 w-[500px] text-center'>There is no products in the Cart</h2></div>
        
    }
          
          </div>

          
        </div>
    );
};

export default MyBookings;