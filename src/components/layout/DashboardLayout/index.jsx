import React from "react";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import AdminNav from "./AdminNav";

function DashboardLayout({ children }) {
  return (
    <div className="w-screen grid-cols-15 lg:grid bg-bgGray">
      <Sidebar />
      <MainContent>
        <AdminNav />
        {children}
      </MainContent>
    </div>
  );
}

export default DashboardLayout;
