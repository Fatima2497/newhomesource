import React from 'react';
import { SlLocationPin } from "react-icons/sl";
import { AiOutlineUser } from "react-icons/ai";
import { FaCalendarAlt } from "react-icons/fa";

const FeatureCard = ({image}) => {
  return (
    <div className="bg-whiteColor w-56 h-62 shadow-md rounded-md flex flex-col ">
      <div className="w-full rounded-md h-48 overflow-hidden">
        <img src={image} alt="Tower" className="w-full rounded-md object-cover h-full" />
      </div>
      <div className="px-2 py-3 rounded-b-md flex flex-col justify-start items-start">
        <h3 className="text-xl text-left font-semibold mb-2 text-backgroundColor">Feature Title</h3>
        <p className="text-greyColor text-sm flex leading-loose">
            <SlLocationPin className='text-base' /> <span className='text-sm '>Mississauga</span>
        </p>
        <p className="text-greyColor text-sm flex leading-loose">
            <AiOutlineUser className='text-base' /> <span className='text-sm '>Real Estate Development</span>
        </p>
        <p className="text-greyColor text-sm flex leading-loose">
            <FaCalendarAlt className='text-base' /> <span className='text-sm '>Mississauga</span>
        </p>
        <button className="mt-4 text-whiteColor px-2 bg-backgroundColor py-2 rounded">Register Now</button>
      </div>
    </div>
  );
};

export default FeatureCard;
