import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateName, generateString } from "../constants/helper";
import ChatMessage from "./ChatMessage";
const ChatBox = () => {
  const [chatText, setChatText] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    //API POLLING DEMO
    const id = setInterval(() => {
      //API CALl
      dispatch(
        addMessage({
          name: generateName(),
          text: generateString(10),
        })
      );
    }, 1500);
    return () => clearInterval(id);
  }, []);

  const messages = useSelector((store) => store.chat.message);
  return (
    <>
      <div className="md:w-[28rem]  ml-2 border-2 h-[500px] rounded-lg p-2 bg-slate-100 flex  border-black overflow-hidden overflow-y-scroll flex-col-reverse">
        {messages.map((m, i) => (
          <ChatMessage key={i} message={m} />
        ))}
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className=" md:w-[28rem] m-2 p-2 border-2 border-black rounded-lg "
      >
        <input
          type="text"
          value={chatText}
          onChange={(e) => setChatText(e.target.value)}
          className=" max-sm:w-60 md:w-80 focus:border-none"
        />
        <button
          onClick={() => {dispatch(addMessage({ name: "Rana", text: chatText }))
               setChatText('')
        }}
          className="rounded-lg bg-green-400 p-2 m-2 w-20"
        >
          Send
        </button>
      </form>
    </>
  );
};

export default ChatBox;
