import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import CustomInput from "./CustomInput";
import Label from "./Label";
import { motion } from "framer-motion";

const FormModal = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <motion.div
        initial={{ x: 2, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.1 }}
          className="bg-backgroundColor mt-24 w-[40%] text-whiteColor border-2 border-goldColor h-[100%] rounded-md px-3 py-5 relative flex flex-col justify-center items-center"
        >
          <div className="absolute right-0 top-0 p-5">
            <AiOutlineClose
              onClick={onClose}
              className="text-whiteColor text-xl font-bold"
            />
          </div>
          {/* Add your modal content here */}
          <form action="" className="mt-10 w-[100%] ">
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
                className="bg-whiteColor w-full text-backgroundColor px-2 py-4 rounded hover:text-whiteColor hover:bg-goldColor"
              />
            </div>
          </form>
        </motion.div>
      )}
    </>
  );
};

export default FormModal;
