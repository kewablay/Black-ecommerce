import React from "react";

function MainContent({ children }) {
  return <div className="w-full h-screen p-5 lg:col-span-9">{children}</div>;
}

export default MainContent;
