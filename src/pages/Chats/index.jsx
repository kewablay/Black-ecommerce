import DashboardLayout from "components/layout/DashboardLayout";
import React from "react";

function Chats() {
  return (
    <DashboardLayout>
      {/* heading  */}
      <div className="my-7 flex-between">
        <h2 className="font-bold text-700">Chats</h2>
      </div>
    </DashboardLayout>
  );
}

export default Chats;
