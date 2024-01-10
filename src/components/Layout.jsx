import React from "react";
import Header from "./Header";
import { Outlet } from "react-router";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
    <div className="flex flex-col min-h-[100vh]">
    <Header />
      <div className="flex-1">
      <Outlet />
      </div>
      <Footer />
    </div>
    </>
  );
};

export default Layout;
