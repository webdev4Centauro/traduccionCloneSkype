import React from "react";
import "../Styles/Main.css";
import Empty from "./Empty";
import ChatWindow from "./ChatWindow";
import IUserModel from "../models/IUserModel";

// Parameters are props
const Main = ( user:IUserModel, activeUserId:string ) => {
  const renderMainContent = () => {
    if (!activeUserId) {
      return <Empty user={user} activeUserId={activeUserId} />;
    } else {
      return <ChatWindow activeUserId={activeUserId} />;
    }
  };
  return <main className="Main">{renderMainContent()}</main>;
};

export default Main;
