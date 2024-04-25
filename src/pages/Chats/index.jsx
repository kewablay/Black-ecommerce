import { SendIcon } from "assets/icons/svgIcons";
import DashboardLayout from "components/layout/DashboardLayout";
import React from "react";

function Chats() {
  return (
    <DashboardLayout>
      {/* heading  */}
      <div className="my-7">
        <h2 className="font-bold text-700">Live Chat</h2>
      </div>

      {/* chat section  */}
      <div className="grid grid-cols-12 gap-8 mt-5">
        {/* chat */}
        <div className="col-span-9 p-3 bg-white rounded-md max-h-[70vh]">
          {/* header  */}
          <div className="p-3 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <span className="w-10 h-10 overflow-hidden bg-gray-300 rounded-full"></span>
              <h3 className="font-bold">Kelvin Hart</h3>
            </div>
          </div>

          {/* chat area */}

          {/* CHATS AREA */}
          <div className=" p-3 overflow-auto text-200 h-[50vh] flex flex-col justfiy-end">
            <div className="flex flex-col gap-2 mt-auto messages">
              {/* incoming message */}
              <p className="p-6 mr-auto bg-gray-200 rounded-md lg:max-w-[60%] xl:max-w-[45%]">
                Hi 👋, welcome to customer support.
              </p>
              {/* outgoing message */}
              <p className="p-6 ml-auto bg-blue-200 rounded-md lg:max-w-[60%] xl:max-w-[45%] ">
                Hi , Please my order is still pending approval.
              </p>

              <p className="p-6 ml-auto bg-blue-200 rounded-md lg:max-w-[60%] xl:max-w-[45%] ">
                Hi , Please my order is still pending approval. Hi , Please my
                order is still pending approval. order is still pending
                approval. order is still pending approval.
              </p>
              <p className="p-6 mr-auto bg-gray-200 rounded-md lg:max-w-[60%] xl:max-w-[45%]">
                Hi 👋, welcome to customer support.
              </p>
            </div>
          </div>

          {/* MESSAGE BOX */}
          <div className="relative p-3">
            <textarea
              name="message-box"
              id="message-box"
              class="text-100 p-2 w-full h-12 border border-gray-300 rounded-md focus-visible:outline-blue-300 resize-none"
            ></textarea>

            {/* SEND BUTTON */}
            <button className="absolute z-50 p-1 bg-white rounded-md top-6 right-5">
              <SendIcon />
            </button>
          </div>
        </div>

        <div className="col-span-3 p-3 h-[20rem] bg-white rounded-md">
          <div className="p-3 mb-3 border-b border-gray-200 flex-between">
            <h3 className="font-bold">Messages</h3>
            <span className="w-5 h-5 font-medium text-white bg-green-600 rounded-full text-100 flex-center">
              3
            </span>
          </div>

          <div className="flex flex-col gap-3 py-2 pb-3 border-b border-gray-200 text-200">
            <div className="items-center flex-between ">
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 overflow-hidden bg-gray-300 rounded-full"></span>
                <h3>Kelvin Hart</h3>
              </div>

              <small className="text-gray-400">12:00pm</small>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Chats;
