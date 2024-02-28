import React from "react";

function MainContent({ children }) {
  return (
    <div className="w-full h-screen p-5 px-8 lg:col-span-12  overflow-y-auto">
      {children}
    </div>
  );
}

export default MainContent;
