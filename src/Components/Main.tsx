import React from "react";
import "../Styles/Main.css";
import Empty from "./Empty";
import ChatWindow from "./ChatWindow";
import IUserModel from "../models/IUserModel";

interface IMainProps{
  user:IUserModel;
  activeUserId:string;

}
// Parameters are props
const Main:React.FC<IMainProps> = ( props ) => {
  const renderMainContent = () => {
    if (!props.activeUserId) {
      return <Empty user={props.user} activeUserId={props.activeUserId} />;
    } else {
      return <ChatWindow activeUserId={props.activeUserId} />;
    }
  };
  return <main className="Main">{renderMainContent()}</main>;
};

export default Main;
