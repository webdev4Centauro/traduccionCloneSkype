import React, { Component } from "react";
import IMessageModel from "../models/IMessageModel";
import "../Styles/Chats.css";

const Chat = ( message:IMessageModel ) => {
  const { text, is_user_msg } = message;
  return (
    <span className={`Chat ${is_user_msg ? "is-user-msg" : ""}`}>{text}</span>
  );
};

class Chats extends Component {
  constructor(messages:[IMessageModel]) {
    super(messages);
    //this.createRef = React.createRef();
  }

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom = () => {
  //  this.chatsRef.current.scrollTop = this.chatsRef.current.scrollHeight;
  };
  
  //<div className="Chats" ref={this.chatsRef}>
  render() {
    return (
      <div className="Chats" >
        {this.props.messages.map((message:IMessageModel) => (
          <Chat message={message} key={message.number} />
        ))}
      </div>
    );
  }
}

export default Chats;
