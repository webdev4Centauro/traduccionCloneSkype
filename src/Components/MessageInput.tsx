import React from "react";
import store from "../Store/index.js";
import { setTypingValue, sendMessage } from "../Actions/index";
import "../Styles/MessageInput.css";

const MessageInput = ( value:string ) => {
  const state = store.getState(); 

  const handleChange = (e:any) => {
    store.dispatch(setTypingValue(e.target.value));
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    const { typing, activeUserId } = state;
    store.dispatch(sendMessage(typing, activeUserId));
  };

  return (
    <form className="Message" onSubmit={handleSubmit}>
      <input
        className="Message__input"
        onChange={handleChange}
        value={value}
        placeholder={"Write a message"}
      />
    </form>
  );
};

export default MessageInput;
