import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function MainLayout({ children }) {
  // console.log("MAIN LAYOUT RENDERED ...............");
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default MainLayout;
