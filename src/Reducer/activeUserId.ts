import { SET_ACTIVE_USER_ID } from '../Constants/action-types'

                //puede que haga falta cambiar el tipado de action
export default function activeUserId(state = null, action:any) {
    switch (action.type) {
        case SET_ACTIVE_USER_ID:
            return action.payload;

        default:
            return state;
    }
}