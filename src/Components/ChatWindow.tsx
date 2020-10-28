import React from "react";
import store from "../Store/index.js";
import Header from "./Header";
import Chats from "./Chats";
import _ from "lodash";
import '../Styles/ChatWindow.css'
import MessageInput from './MessageInput'

const ChatWindow = ( activeUserId:string ) => {
  const state = store.getState();
  const activeUser = state.contacts[activeUserId];
  const activeMessages = state.messages[activeUserId];
  const {typing} = state;

  return (
    <div className="ChatWindow">
      <Header user={activeUser} />
      {/* Pass object as an array of values */}
      <Chats messages={_.values(activeMessages)}/>
      <MessageInput value={typing}/>
    </div>
    
  );
};

export default ChatWindow;
