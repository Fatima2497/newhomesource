import React, { useState } from "react";
import { Form, NavLink } from "react-router-dom";
import FormModal from "./FormModal";
import { AiOutlineClose, AiOutlineMenuFold } from "react-icons/ai";

const Header = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <header className="w-full h-20 bg-backgroundColor sticky top-0 z-10 px-4 py-5">
        <nav className="containerSmall px-3 py-2 hidden md:flex md:justify-between md:items-center">
          <div>
            <h3 className="text-whiteColor text-sm text-nowrap">
              NEWHOMESOURCE
            </h3>
          </div>
          <div className="flex justify-center items-center gap-5">
            <NavLink
              to="/"
              className="text-whiteColor font-notoFont text-sm"
            >
              Preconstruction
            </NavLink>
            <NavLink to="/assignment" className="text-whiteColor font-notoFont text-sm">
              Assignment
            </NavLink>
            <NavLink to="/blog" className="text-whiteColor font-notoFont text-sm">
              Blog
            </NavLink>
            <NavLink to="/resource" className="text-whiteColor font-notoFont text-sm">
              Resources
            </NavLink>
            <button
              className="bg-whiteColor px-2 rounded py-2 text-backgroundColor text-sm"
              onClick={openModal}
            >
              Register
            </button>
          </div>
        </nav>
        <div className="md:hidden lg:hidden flex items-center justify-between">
          <div>
            <h3 className="text-whiteColor text-sm text-nowrap">
              NEWHOMESOURCE
            </h3>
          </div>
          <div className="md:block cursor-pointer pl-24">
            <AiOutlineMenuFold onClick={handleNav} size={25} className="text-whiteColor" />
          </div>
          <div
            className={
              menuOpen
                ? "fixed left-0 top-0 h-screen w-[65%] md:hidden bg-backgroundColor p-10 ease-in duration-300"
                : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
            }
          >
            <div className="flex w-full items-center justify-end">
              <div
                onClick={handleNav}
                className="text-whiteColor cursor-pointer"
              >
                <AiOutlineClose size={25} />
              </div>
            </div>
            <div className="flex flex-col text-whiteColor py-4">
              <ul>
                <li
                  onClick={() => setMenuOpen(false)}
                  className="uppercase text-base w-full  ease-in duration-300 py-4 cursor-pointer"
                >
                  <NavLink href="/">Preconstruction</NavLink>
                </li>
                <li
                  onClick={() => setMenuOpen(false)}
                  className="uppercase text-base w-full  ease-in duration-300 py-4 cursor-pointer"
                >
                  <NavLink href="/assignment">Assignments</NavLink>
                </li>
                <li
                  onClick={() => setMenuOpen(false)}
                  className="uppercase text-base w-full  ease-in duration-300 py-4 cursor-pointer"
                >
                  <NavLink href="/resource">Resources</NavLink>
                </li>
                <li
                  onClick={() => setMenuOpen(false)}
                  className="uppercase text-base w-full  ease-in duration-300 py-4 cursor-pointer"
                >
                  <NavLink href="/blog">Blogs</NavLink>
                </li>
                <li
                  onClick={() => setMenuOpen(false)}
                  className="uppercase text-base w-full  ease-in duration-300 py-4 cursor-pointer"
                >
                  <NavLink href="/contact">Contact</NavLink>
                </li>
              
              </ul>
            </div>
          </div>
        </div>
      </header>

      <div className="flex justify-center items-center">
        <FormModal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </>
  );
};

export default Header;
