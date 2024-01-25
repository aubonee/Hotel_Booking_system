import React from 'react';
import Swal from 'sweetalert2';

const AddReview = () => {
    const handleAddReview = event => {
        event.preventDefault()

        const form = event.target;

        const name = form.name.value;
        const review = form.review.value;
        const photourl = form.photourl.value;
        const rating = form.rating.value;
       
       

        const newReview = { name, review, photourl, rating};

        console.log(newReview);
        
      fetch('https://hotel-booking-server-side-eight.vercel.app/review',{
        method:'POST',
        headers :{
          'content-type':'application/json'
        },
        body : JSON.stringify(newReview)
      })
      .then(res=>res.json())
      .then(data =>{
        console.log(data);
        if(data.insertedId){
            Swal.fire(
                'Good job!',
                'You clicked the button!',
                'success'
              )


        }
      }
      )


    }
    return (
        <div className="w-full">
        <h2 className="mt-12 text-3xl font-bold text-center text-[#495737]"> Add Review</h2>

       <div className="w-3/4 mx-auto">
             

       {/* onSubmit={handleAddReview} */}
       <form onSubmit={handleAddReview} className=' my-8 px-5 '>  
       <div className=''>
       <div className="form-control my-5 ">
     
     <input type="text" placeholder="Name" name="name" className="bg-gray-100 input input-bordered border-3 rounded-none  border-[#495737]" required />
   </div>
   
   <div className="form-control my-5 ">
     
   <input type="text" placeholder="imageURL" name="photourl" className="bg-gray-100 input input-bordered border-3 rounded-none  border-[#495737]" required />
   </div>
   <div className="form-control my-5  ">
   <input type="number" placeholder="Rating" name="rating" className="bg-gray-100 input input-bordered border-3 rounded-none  border-[#495737]" required />
   </div>
   

       </div>
       <div className="form-control mt-5">
       <input type="text" placeholder="Write your Review" name="review" className="bg-gray-100 input input-bordered border-3 rounded-none  border-[#495737]" required />
 
  </div>

  <div>
   <button type="submit"  className='text-white btn btn-block my-3 bg-[#495737]'>Add Review</button></div>
     </form>
    
 
       
       </div>  
       
   </div>
    );
};

export default AddReview;