import { combineReducers } from "redux";
import user from "./userReducer";
import contacts from "./contactsReducer";
import activeUserId from "./activeUserId"
import messages from './messagesReducer'
import typing from './typing'

export default combineReducers({
  user: user,
  contacts: contacts,
  activeUserId: activeUserId,
  messages: messages,
  typing: typing
});