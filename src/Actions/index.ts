import {
  SET_ACTIVE_USER_ID,
  SET_TYPING_VALUE,
  SEND_MESSAGE
} from "../Constants/action-types";

export const setActiveUserId = (id:number) => ({
  type: SET_ACTIVE_USER_ID,
  payload: id
});

export const setTypingValue = (value:string) => ({
  type: SET_TYPING_VALUE,
  payload: value
});

                  //puede ser que el mensaje en vez de ser tipo string tenga que ser
                      // tipo IMensaje
export const sendMessage = (message:string, userId:number) => ({
  type: SEND_MESSAGE,
  payload: {
    message,
    userId
  }
});
