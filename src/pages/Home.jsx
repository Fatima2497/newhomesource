import React from "react";
import Meta from "../components/Meta";
import "./pages.css";
import { AiOutlineSearch } from "react-icons/ai";
import FormModal from "../components/FormModal";
import BlogCard from "../components/BlogCard";
import cardpic from "../assets/image/towerImage1.jpg";
import cardpic1 from "../assets/image/towerImage2.jpg";
import cardpic2 from "../assets/image/towerImage3.jpg";
import cardpic3 from "../assets/image/towerImage4.jpg";
import Card from "../components/Card";
import FeatureCard from "../components/FeatureCard";
import Label from "../components/Label";
import CustomInput from "../components/CustomInput";

const Home = () => {
  return (
    <>
      <Meta title="Newhomesource" />
      <main className="w-full">
        <section className="placeimg h-98 w-full p-4">
          <div className=" flex justify-center items-center ml-[10%] mt-[60%] md:mt-[20%] w-[80%]">
            <form action="" className="w-full">
              <div className="relative w-98">
                <input
                  type="search"
                  placeholder="Enter City, Project"
                  className="pl-8 w-full bg-whiteColor p-2 rounded-sm placeholer:text-greyColor placeholder:text-sm placeholder:font-bodyFont outline-goldColor"
                />
                <AiOutlineSearch className="absolute top-2.5 text-greyColor left-2 text-xl" />
              </div>
            </form>
          </div>
        </section>
        <section className=" p-5 w-full">
          <h3 className="mt-5 text-2xl text-backgroundColor text-center font-bold uppercase">
            featured project
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-2 w-full">
            <button className="bg-transparent hover:bg-backgroundColor hover:rounded text-sm font-normal px-2 py-1 text-greyColor ">
              Toronto
            </button>
            <button className="bg-transparent hover:bg-backgroundColor hover:rounded text-sm font-normal px-2 py-1 text-greyColor ">
              Mississuaga
            </button>
            <button className="bg-transparent hover:bg-backgroundColor hover:rounded text-sm font-normal px-2 py-1 text-greyColor ">
              Oakville
            </button>
            <button className="bg-transparent hover:bg-backgroundColor hover:rounded text-sm font-normal px-2 py-1 text-greyColor "></button>
          </div>
          <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 place-items-center">
            <FeatureCard image={cardpic} />
            <FeatureCard image={cardpic1} />
            <FeatureCard image={cardpic2} />
            <FeatureCard image={cardpic3} />
          </div>
        </section>
        <section className=" p-5 w-full">
          <h3 className="mt-5 text-2xl text-backgroundColor text-center font-bold uppercase">
            featured project
          </h3>
          <div className="mt-3 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 place-items-center">
            <Card image={cardpic} />
            <Card image={cardpic1} />
            <Card image={cardpic2} />
            <Card image={cardpic3} />
          </div>
        </section>
        <section className="px-4 py-5 bg-whiteColor w-full">
          <h3 className="mt-5 text-2xl text-backgroundColor text-center font-bold uppercase">
            our blogs
          </h3>
          <div className="mt-3 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center">
            <BlogCard image={cardpic} />
            <BlogCard image={cardpic1} />
            <BlogCard image={cardpic2} />
            <BlogCard image={cardpic3} />
          </div>
        </section>
        <section className="w-full mb-24  bg-goldColor">
          <form
            action=""
            className="mt-10 w-full bg-backgroundColor  p-3"
          >
            <div className="mb-3 flex flex-col gap-2">
              <Label label="First Name*" />
              <input
                type="text"
                placeholder="Enter FirstName"
                className="bg-backgroundColor text-whiteColor placeholder:text-whiteColor placeholder:text-xs outline-none border-b w-[80%]"
              />
            </div>
            <div className="mb-3 flex flex-col gap-2">
              <Label label="Last Name*" />
              <input
                type="text"
                placeholder="Enter LastName"
                className="bg-backgroundColor text-whiteColor placeholder:text-whiteColor placeholder:text-xs outline-none border-b w-[80%]"
              />
            </div>
            <div className="mb-3 flex flex-col gap-2">
              <Label label="Email*" />
              <input
                type="email"
                placeholder="Enter Email"
                className="bg-backgroundColor text-whiteColor placeholder:text-whiteColor placeholder:text-xs outline-none border-b w-[80%]"
              />
            </div>
            <div className="mb-3 flex flex-col gap-2">
              <Label label="Phone*" />
              <input
                type="phone"
                placeholder="Enter Phone"
                className="bg-backgroundColor text-whiteColor placeholder:text-whiteColor placeholder:text-xs outline-none border-b w-[80%]"
              />
            </div>
            <div className="mb-3 flex justify-start items-center gap-5">
              <div>
                <input type="radio"  />
                <Label label="No" />
              </div>
              <div>
                <input type="radio"  />
                <Label label="Yes" />
              </div>
            </div>
            <div className="mb-3">
              <input
                type="submit"
                value="Submit"
                className="bg-whiteColor text-goldColor px-2 py-1 rounded-full hover:text-whiteColor hover:bg-goldColor"
              />
            </div>
          </form>
        </section>
       
      </main>
    </>
  );
};

export default Home;
