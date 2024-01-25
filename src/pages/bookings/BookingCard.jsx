import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const BookingCard = ({detail,booking,setBooking,selectedDate,setDate}) => {
  
    const { _id,title, date, room_images, description, price_per_night, quantity, special_offers, room_size} = detail;

    const handleCartDelete =(_id )=>{
        console.log(_id);
        Swal.fire({
           title: 'Are you sure?',
           text: "You won't be able to revert this!",
           icon: 'warning',
           showCancelButton: true,
           confirmButtonColor: '#3085d6',
           cancelButtonColor: '#d33',
           confirmButtonText: 'Yes, delete it!'
       }).then((result) => {
           if (result.isConfirmed) {
            
              const updatedBooking = booking.filter(item => item._id !== _id);
              setBooking(updatedBooking);

           //console.log("delete confirmed");
            fetch(`https://hotel-booking-server-side-eight.vercel.app/bookings/${_id}`, {
            //fetch(`https://hotel-booking-server-side-eight.vercel.app/bookings/${_id}`, {
               method: 'DELETE'
           })
           .then(res => res.json())
           .then(data => {
               console.log("data");
               console.log(data);
               if(data.deletedCount > 0){
                   Swal.fire(
                       'Deleted!',
                       'This product is deleted from your cart.',
                       'success'
                    )
                    
               }
           })
          }
         })
}

   
   // const first_image = room_images[0];
     const second_image = room_images[1];
   //  const date = setDate;
    //  console.log("date");
    //  console.log(setDate);
    //  console.log(date);
    return (
        <div>
         
         <div className="mx-auto p-3 m-5 max-w-[800px] card md:card-side bg-base-100 shadow-xl">
         
          <figure className='h-full'><img className='ml-5 h-full w-[400px]' src={second_image} alt="Movie"/></figure>
          

  <div className="card-body">
    
    
    <div className='text-left mt-3'>
   <h2 className="font-semibold font-xl"> <span className='text-green-900 font-bold'>Room Name :</span> {title}</h2>
   <h2 className="font-semibold font-xl"> <span className='text-green-900 font-bold'>Price per night :</span> {price_per_night}</h2>
   <h2 className="font-semibold font-xl"> <span className='text-green-900 font-bold'>Room size :</span> {room_size}</h2>
   <h2 className="font-semibold font-xl"> <span className='text-green-900 font-bold'>Date :</span> {date}</h2>
   </div>
    
    <div className="card-actions">
   <Link to={`/updateBooking/${_id}`}> <button  className="btn bg-[#495737] text-white">Update</button></Link> 
      <button onClick={()=>handleCartDelete(_id)} className="btn bg-[#495737] text-white">Delete</button>
     
    </div>
  </div>
</div>
        </div>
    );
};

export default BookingCard;