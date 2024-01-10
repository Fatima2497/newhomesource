import React from 'react'
import CustomInput from './CustomInput'
import Label from './Label'

const Form = () => {
  return (
    <div
      className="bg-backgroundColor  w-full text-whiteColor border-2 border-goldColor h-[90%] rounded-md px-3 py-5 relative flex flex-col justify-center items-center">
      {/* Add your modal content here */}
      <form action="" className="mt-10 w-[100%] mb-8">
        <div className="mb-3">
          <h3 className="text-center text-xl font-bold">
            GET PLATINUM ACCESS!!
          </h3>
          <p className="text-xs text-center">
            Register to Receive Guaranteed Platinum Access & Prices,
            Incentives & Discounts, Floor Plans & More!
          </p>
        </div>
        <div className="mb-3 w-[100%]">
          <Label label="First Name*" />
          <CustomInput type="text" placeholder="First Name" />
        </div>
        <div className="mb-3">
          <Label label="Last Name*" />
          <CustomInput type="text" placeholder="Last Name" />
        </div>
        <div className="mb-3">
          <Label label="Email*" />
          <CustomInput type="email" placeholder="Enter Email" />
        </div>
        <div className="mb-3">
          <Label label="Phone*" />
          <CustomInput type="text" placeholder="Phone" />
        </div>
        <div className="mb-3 flex justify-start items-center gap-5">
          <div>
            <input type="radio" />
            <Label label="No" />
          </div>
          <div>
            <input type="radio" />
            <Label label="Yes" />
          </div>
        </div>
        <div className="mb-3">
          <input
            type="submit"
            value="Submit"
            className="bg-whiteColor w-24 md:w-56 text-backgroundColor px-2 py-2 rounded hover:text-whiteColor hover:bg-goldColor"
          />
        </div>
      </form>
      </div>
  )
}

export default Form