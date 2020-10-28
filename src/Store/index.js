import {createStore} from "redux"
import reducer from "../Reducer/indexReducer"

const store = createStore(reducer);

export default store