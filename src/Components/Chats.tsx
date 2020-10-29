import React, { Component } from "react";
import IMessageModel from "../models/IMessageModel";
import "../Styles/Chats.css";


interface IChatProps{
  message:IMessageModel;
}

const Chat:React.FC<IChatProps> = ( props ) => {
  const { text, is_user_msg } = props.message;
  return (
    <span className={`Chat ${is_user_msg ? "is-user-msg" : ""}`}>{text}</span>
  );
};
 interface IChatSProps{
   messages:IMessageModel[];
  // message:IMessageModel;
 }
class Chats extends Component<IChatSProps> {
//class Chats extends Component {
  constructor(props:IChatSProps) {
    super(props);
    //this.createRef:React.F = React.createRef();
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
