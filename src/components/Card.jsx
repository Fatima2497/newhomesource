
import React from "react";
import { Link } from "react-router-dom";
// import SingleProject from ''

const Card = ({image}) => {
  return (
    <div className="relative w-[600px] md:w-[400px] lg:w-[460px] h-[300px] rounded-tl-md rounded-bl-md rounded-tr-md rounded-br-md ">
      <div className="grid grid-cols-2 h-full rounded-tl-md rounded-bl-md ">
        <div className=" relative rounded-tl-md rounded-bl-md ">
        <div className="absolute inset-0">
            <img
              className="object-cover w-full h-full rounded-tl-md rounded-bl-md"
              src={image}
              alt="qtower"
              layout="fill" // Use layout="fill" to fill the parent container
            />
          </div> 
        </div>
        <div className="card_body py-6  bg-backgroundColor rounded-tr-md rounded-br-md">
               <div className="mt-2 px-2">
               <h6 className="text-whiteColor text-sm">Last updated 2 months ago</h6>
                <h4 className="text-goldColor text-base font-extrabold">Myne Condos</h4>
                <p className="text-whiteColor text-sm">128 Ave NE, Calgary, AB, Canada</p>
               </div>
               <div className="mt-4 px-2">
               <h6 className="text-goldColor text-base font-medium">$319,900 - $454,900</h6>
                <h4 className="text-whiteColor text-sm">Truman Homes</h4>
               </div>
               <div className="mt-4 px-2">
               <p className="text-whiteColor text-base">Building Type: Condo</p>
               </div>
               <div className="mt-2 px-2">
                <Link to="/SingleProject" className="bg-whiteColor px-2 text-backgroundColor py-2 rounded">Register Now</Link>
               </div>
            
        </div>
      </div>
    </div>
  );
};

export default Card;
