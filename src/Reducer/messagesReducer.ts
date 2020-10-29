import { getMessages } from "../static-data";
import { SEND_MESSAGE } from "../Constants/action-types";
import _ from "lodash";


export default function messages(estado:any = getMessages(20), action:any) {
  console.log("GET 20 MESSAGES", estado);
  
  switch (action.type) {
    case SEND_MESSAGE:
      const { message, userId } = action.payload;
     // console.log(getMessages(20));
      //const allUserMsgs= estado[(userId)];
     // let allUserMsgs={};
     
      const allUserMsgs= estado[(userId)];
      //const number:number= +_.keys(allUserMsgs).pop() + 1;
      const number:number= +(_.keys(allUserMsgs)?.pop() ||{}) + 1;
      return {
        ...estado,
        [userId]: {
          ...allUserMsgs,
          [number]: {
            number,
            text: message,
            is_user_msg: true
          }
        }
      };

    default:
      return estado;
  }
}
