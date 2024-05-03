import { SendIcon } from "assets/icons/svgIcons";
import DashboardLayout from "components/layout/DashboardLayout";
import { useGetConversationByUserId, useGetUserDetails } from "hooks/useChat";
import { useGetAdminProfile } from "hooks/useProfile";
import React, { useState } from "react";
import { getSuperAdmin } from "utils/getSuperAdmin";
import AdminChatArea from "./components/adminChatArea";
import EmptyChat from "./components/EmptyConversation";
import StartConversation from "./components/StartConversation";
import EmptyConversation from "./components/EmptyConversation";
import Conversation from "./components/Conversation";

function Chats() {
  // GET ADMIN PROFILE
  // const { data: adminProfile } = useGetAdminProfile();
  // console.log("AdminProfile : ", adminProfile);
  const [activeConversation, setActiveConversation] = useState(null);
  const [userId, setUserId] = useState("");

  const adminId = getSuperAdmin()._id;
  const { data: conversations, isLoading } =
    useGetConversationByUserId(adminId);

  const isConversationsEmpty = conversations?.length === 0;

  // console.log("chats trigered...............");
  // console.log("Conversations: ", conversations);

  return (
    <DashboardLayout>
      {/* heading  */}
      <div className="my-7">
        <h2 className="font-bold text-700">Live Chat</h2>
      </div>

      {/* chat section  */}
      <div className="grid grid-cols-12 gap-8 mt-5">
        {/* chat */}
        <div className="col-span-8 xl:col-span-9 p-3 bg-white rounded-md max-h-[70vh]">
          {activeConversation ? (
            <AdminChatArea
              activeConversation={activeConversation}
              adminId={adminId}
            />
          ) : (
            <StartConversation />
          )}
        </div>

        {/* ALL CONVERSATIONS */}
        <div className="col-span-4 xl:col-span-3 p-1 h-[20rem] bg-white rounded-md">
          <div className="p-3 mb-3 border-b border-gray-200 flex-between">
            <h3 className="font-bold">Messages</h3>
            <span className="w-5 h-5 font-medium text-white bg-green-600 rounded-full text-100 flex-center">
              {conversations?.length}
            </span>
          </div>

          <div className="h-[15rem] overflow-y-auto">
            {conversations?.map((convo, index) => (
              <Conversation
                key={index}
                convo={convo}
                setActiveConversation={setActiveConversation}
              />
            ))}
          </div>

          {isConversationsEmpty && <EmptyConversation />}
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Chats;
