import  { useEffect, useState } from 'react';
import RoomCard from './RoomCard';
import Title from '../../shared/title/Title';

const Rooms = () => {
    const [rooms , setRooms]=useState([]);

    useEffect(()=>{
         fetch('https://hotel-booking-server-side-eight.vercel.app/rooms')
       // fetch('https://hotel-booking-server-side-eight.vercel.app/rooms')
        .then(res=>res.json())
        .then(data => setRooms(data))
    },[])
    return (
        <div className=" w-11/12 mx-auto my-20 ">
            <div className="  pt-10"> <Title heading="All Rooms"></Title></div>
       
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              
              {
                rooms?.map(room=> <RoomCard key={room._id} room={room}></RoomCard>)
              }
        </div>
      
        </div>
       
    );
};

export default Rooms;