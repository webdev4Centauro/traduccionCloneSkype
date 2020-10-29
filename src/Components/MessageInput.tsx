import React from "react";
import store from "../Store/index.js";
import { setTypingValue, sendMessage } from "../Actions/index";
import "../Styles/MessageInput.css";

interface IMessageInputProps {
  value: string;

}
const MessageInput: React.FC<IMessageInputProps> = (props) => {
  //const MessageInput:React.FC<IMessageInputProps> = ( {value} ) => {
  const state = store.getState();

  const handleChange = (e: any) => {
    store.dispatch(setTypingValue(e.target.value));
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { typing, activeUserId } = state;
    store.dispatch(sendMessage(typing, activeUserId));
  };
  return (
    <form className="Message" onSubmit={handleSubmit}>
      <input
        className="Message__input"
        onChange={handleChange}
        value={props.value}
        placeholder={"Write a message"}
      />
    </form>
  );
};

export default MessageInput;
