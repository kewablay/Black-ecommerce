import React from "react";

function MainContent({ children }) {
  return (
    <div className="w-full h-screen p-5 px-8 overflow-y-auto lg:col-span-12">
      {children}
    </div>
  );
}

export default MainContent;
