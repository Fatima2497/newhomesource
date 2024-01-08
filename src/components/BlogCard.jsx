import React from 'react'

const BlogCard = ({image}) => {
  return (
    <div className="bg-whiteColor w-72 h-62 shadow-md rounded-md flex flex-col ">
      <div className="w-full rounded-md h-48 overflow-hidden">
        <img src={image} alt="Tower" className="w-full rounded-md object-cover h-full" />
      </div>
      <div className="px-2 py-3 rounded-b-md flex flex-col justify-start items-start">
        <h3 className="text-xl text-left font-semibold mb-2 text-backgroundColor">Card Title</h3>
        <p className="text-greyColor text-sm flex">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus saepe inventore maxime modi. Iusto molestiae possimus, earum quidem temporibus minima?
        </p>
        <button className="mt-4 text-whiteColor px-2 bg-backgroundColor py-2 rounded">Read </button>
      </div>
    </div>
  )
}

export default BlogCard