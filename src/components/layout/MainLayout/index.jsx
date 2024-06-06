import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ChatButton from "components/shared/ChatButton";

function MainLayout({ children }) {
  // console.log("MAIN LAYOUT RENDERED ...............");
  return (
    <>
      <Navbar />
      {children}
      <ChatButton />
      <Footer />
    </>
  );
}

export default MainLayout;
