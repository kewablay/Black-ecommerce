import React from "react";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import AdminNav from "./components/AdminNav";

function DashboardLayout({ children }) {
  return (
    <div className="w-screen grid-cols-12 lg:grid bg-bgGray">
      <Sidebar />
      <MainContent>
        <AdminNav />
        {children}
      </MainContent>
    </div>
  );
}

export default DashboardLayout;
