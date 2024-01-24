import React from "react";
import { USER_ICON } from "../constants/constants";

const ChatMessage = ({message}) => {
  return (
    <div className="border-2 rounded-lg p-2 bg-gray-50">
      <div className="flex items-center gap-2">
      <img className="w-8 h-8 " alt="userImg" src={USER_ICON} />
      <p className=" font-bold">{message.name}</p>
      <p className="ml-2">{message.text}</p>

      </div>
    </div>
  );
};

export default ChatMessage;
