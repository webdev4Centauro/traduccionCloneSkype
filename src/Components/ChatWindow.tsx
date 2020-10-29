import React from "react";
import store from "../Store/index.js";
import Header from "./Header";
import Chats from "./Chats";
import _ from "lodash";
import '../Styles/ChatWindow.css'
import MessageInput from './MessageInput'
import IUserModel from "../models/IUserModel.js";
import IMessageModel from "../models/IMessageModel.js";

interface IChatWindowProps{
  activeUserId:string;
}

  const ChatWindow:React.FC<IChatWindowProps> = ( props ) => {
  const state = store.getState();
  const activeUser:IUserModel = state.contacts[props.activeUserId];
  const activeMessages:[IMessageModel] = state.messages[props.activeUserId];
  const {typing} = state;
  var mensajes:IMessageModel[]=_.values(activeMessages);

  return (
    <div className="ChatWindow">
      <Header user={activeUser} />
      {/* Pass object as an array of values */}

      {/* <Chats messages={_.values(activeMessages)}/> */}
      <Chats messages={mensajes}/>
      <MessageInput value={typing}/>
    </div>
    
  );
};

export default ChatWindow;
